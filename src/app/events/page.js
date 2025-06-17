import styles from "@/app/styles.module.css";
import PocketBase from "pocketbase";

function EventList({ data }) {
  return (
    <div className="grid grid-flow-rows grid-cols-3 gap-5">
      {data.map((event) => {
        const date = event.when ? new Date(event.when) : undefined;
        return (
          <div
            key={event.title}
            className="border border-8 border-primary_dark p-5"
          >
            <img
              src={
                event.image
                  ? `http://dev.koriel.net/api/files/events/${event.id}/${event.image}`
                  : "under_construction.png"
              }
              className={`w-full h-48 mb-5 ${styles.event_image}`}
            />
            <p className="text-xl font-bold text-primary_dark">{event.title}</p>
            <p className="italic text-primary_dark">
              {date ? date.toDateString() : "Date TBD"} |{" "}
              {event.where ? event.where : "Location TBD"}
            </p>
            <p className="text-primary">
              Mentors: {event.who.length > 0 ? event.who.join(", ") : "TBD"}
            </p>
            <p className="text-left mt-3">
              {event.description
                ? event.description
                : "We'll announce more details soon!"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default async function Events() {
  let upcoming = [];
  let previous = [];

  try {
    const pb = new PocketBase("https://dev.koriel.net");
    // get all events
    let events = await pb.collection("events").getList();
    // get names from users table
    let leaders = new Set();
    events.items.map((event) =>
      event.who.map((person) => leaders.add(`id='${person}'`))
    );
    leaders = Array.from(leaders);
    const users = await pb.collection("users").getFullList({
      filter: leaders.join(" || "),
    });
    // map events to correct users
    const names = new Map(users.map((person) => [person.id, person.name]));
    events = events.items.map((event) => {
      return { ...event, who: event.who.map((name) => names.get(name)) };
    });
    // separate events and sort them
    const past = events.filter((item) =>
      item.when ? new Date(item.when) < Date.now() : false
    );
    past.sort((a, b) =>
      a.when && b.when ? new Date(b.when) - new Date(a.when) : 1
    );
    const future = events.filter((item) =>
      item.when ? new Date(item.when) >= Date.now() : true
    );
    future.sort((a, b) =>
      a.when && b.when ? new Date(b.when) - new Date(a.when) : 1
    );
    previous = past;
    upcoming = future;
  } catch {
    return <div>Please try again later</div>;
  }

  return (
    <div className="text-center flex flex-col gap-10">
      <p className="text-6xl font-bold text-primary_dark">Events</p>
      <div>
        <p className="text-4xl text-black font-bold">Upcoming</p>
        <div className="border border-black border-2 mb-5" />
        {upcoming.length > 0 ? (
          <EventList data={upcoming} />
        ) : (
          <p>No upcoming events, check again soon!</p>
        )}
      </div>
      <div>
        <p className="text-4xl text-black font-bold">Previous</p>
        <div className="border border-black border-2 mb-5" />
        {previous.length > 0 ? (
          <EventList data={previous} />
        ) : (
          <p>Start of a new beginning</p>
        )}
      </div>
    </div>
  );
}
