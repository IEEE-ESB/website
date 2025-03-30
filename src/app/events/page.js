function EventList({ data }) {
  return (
    <div className="grid grid-flow-rows grid-cols-3 gap-5">
      {data.map((event) => {
        const date = new Date(event.when);
        return (
          <div
            key={event.title}
            className="border border-8 border-yellow-500 p-5"
          >
            <img src="next.svg" className="w-auto mb-5" />
            <p className="text-xl font-bold">{event.title}</p>
            <p className="italic">{date.toDateString()}</p>
            <p className="text-left mt-3">{event.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default async function Events() {
  const data = await (await fetch("http://localhost:3000/api/events")).json();

  return (
    <div className="text-center flex flex-col gap-20">
      <p className="text-6xl font-bold">Events</p>
      <div>
        <p className="text-4xl underline">Upcoming</p>
        <EventList data={data} />
      </div>
      <div>
        <p className="text-4xl underline">Previous</p>
        <ul className="flex flex-col gap-5">
          <EventList data={data} />
        </ul>
      </div>
    </div>
  );
}
