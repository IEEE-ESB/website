export const runtime = "edge";

import styles from "@/app/styles.module.css";
import PocketBase from "pocketbase";

function EventList({ data }) {
  return (
    <div className="grid grid-flow-rows grid-cols-3 gap-5">
      {data.map((event) => {
        return (
          <div
            key={event.title}
            className="border border-8 border-primary_dark p-5"
          >
            <img
              src={
                event.image
                  ? `http://db.ieee-esb.org/api/files/events/${event.id}/${event.image}`
                  : "under_construction.png"
              }
              className={`w-full h-48 mb-5 ${styles.event_image}`}
            />
            <a
              href={
                event.vlink
                  ? event.vlink
                  : "https://utrgv.campuslabs.com/engage/organization/ieee"
              }
              target="#"
            >
              <p className="text-xl font-bold text-primary_dark hover:text-primary">
                {event.title}
              </p>
            </a>
            <p className="italic text-primary_dark">
              {event.when instanceof Date
                ? `${event.when.toDateString()} ${event.when.toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }
                  )}`
                : "Date TBD"}{" "}
              | {event.where ? event.where : "Location TBD"}
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
  let future = [];
  let past = [];

  try {
    const pb = new PocketBase("https://db.ieee-esb.org");
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
      return {
        ...event,
        who: event.who.map((name) => names.get(name)),
        when: event.when ? new Date(event.when) : Infinity,
      };
    });
    // separate events and sort them
    past = events.filter((item) =>
      item.when ? item.when < Date.now() : false
    );
    future = events.filter((item) =>
      item.when ? item.when >= Date.now() : true
    );
    past.sort((a, b) => a.when - b.when);
    future.sort((a, b) => a.when - b.when);
  } catch {
    return <div>Please try again later</div>;
  }

  return (
    <div className="text-center flex flex-col gap-10">
      <p className="text-5xl font-bold text-black">Events</p>
      <div>
        <p className="text-4xl text-black font-bold">Upcoming</p>
        <div className="border border-black border-2 mb-5" />
        {future.length > 0 ? (
          <EventList data={future} />
        ) : (
          <p>No upcoming events, check again soon!</p>
        )}
      </div>
      <div>
        <p className="text-4xl text-black font-bold">Previous</p>
        <div className="border border-black border-2 mb-5" />
        {past.length > 0 ? (
          <EventList data={past} />
        ) : (
          <p>Start of a new beginning</p>
        )}
      </div>
    </div>
  );
}
