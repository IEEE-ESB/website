"use client";

import styles from "@/app/styles.module.css";
import { useState, useEffect } from "react";

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
              src={event.image ? event.image : "next.svg"}
              className={`w-full h-24 mb-5 ${styles.event_image}`}
            />
            <p className="text-xl font-bold text-primary_dark">{event.title}</p>
            <p className="italic text-primary_dark">{date.toDateString()}</p>
            <p className="text-primary">{event.who}</p>
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
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      fetch("/api/events").then((response) => {
        response.json().then((data) => {
          setData(data);
        });
      });
    } catch {
      console.log("Cannot retrieve events");
    }
  }, []);

  return (
    <div className="text-center flex flex-col gap-20">
      <p className="text-6xl font-bold text-primary_dark">Events</p>
      <div>
        <p className="text-4xl underline text-primary">Upcoming</p>
        {data ? <EventList data={data} /> : <p>loading...</p>}
      </div>
      <div>
        <p className="text-4xl underline text-primary">Previous</p>
        <ul className="flex flex-col gap-5">
          {data ? <EventList data={data} /> : <p>loading...</p>}
        </ul>
      </div>
    </div>
  );
}
