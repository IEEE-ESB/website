"use client";

import styles from "@/app/styles.module.css";
import { useState, useEffect } from "react";
import PocketBase from "pocketbase";

function EventList({ data }) {
  return data ? (
    <div className="grid grid-flow-rows grid-cols-3 gap-5">
      {data.map((event) => {
        const date = new Date(event.when);
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
            <p className="italic text-primary_dark">{date.toDateString()}</p>
            <p className="text-primary">Mentors: {event.who.join(", ")}</p>
            <p className="text-left mt-3">{event.description}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default function Events() {
  const [upcoming, setUpcoming] = useState();
  const [previous, setPrevious] = useState();

  useEffect(() => {
    try {
      const pb = new PocketBase("https://dev.koriel.net");
      (async () => {
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
        const past = events.filter((item) => new Date(item.when) < Date.now());
        past.sort((a, b) => new Date(b.when) - new Date(a.when));
        const future = events.filter(
          (item) => new Date(item.when) >= Date.now()
        );
        future.sort((a, b) => new Date(b.when) - new Date(a.when));
        setPrevious(past);
        setUpcoming(future);
      })();
    } catch {
      console.log("Cannot retrieve events");
    }
  }, []);

  return (
    <div className="text-center flex flex-col gap-10">
      <p className="text-6xl font-bold text-primary_dark">Events</p>
      <div>
        <p className="text-4xl text-black font-bold">Upcoming</p>
        <div className="border border-black border-2 mb-5" />
        {upcoming ? <EventList data={upcoming} /> : <p>loading...</p>}
      </div>
      <div>
        <p className="text-4xl text-black font-bold">Previous</p>
        <div className="border border-black border-2 mb-5" />
        {previous ? <EventList data={previous} /> : <p>loading...</p>}
      </div>
    </div>
  );
}
