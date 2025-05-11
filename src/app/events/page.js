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
              src={
                event.image
                  ? `http://dev.koriel.net/api/files/events/${event.id}/${event.image}`
                  : "under_construction.png"
              }
              className={`w-full h-48 mb-5 ${styles.event_image}`}
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
  const [upcoming, setUpcoming] = useState([]);
  const [previous, setPrevious] = useState([]);

  const url = "http://dev.koriel.net/api/collections/events/records";

  useEffect(() => {
    try {
      fetch(`/api/proxy?target=${encodeURI(url)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        response.json().then((data) => {
          setUpcoming(
            data.items.filter((item) => new Date(item.when) >= Date.now())
          );
          setPrevious(
            data.items.filter((item) => new Date(item.when) < Date.now())
          );
        });
      });
    } catch {
      console.log("Cannot retrieve events");
    }
  }, []);

  return (
    <div className="text-center flex flex-col gap-10">
      <p className="text-6xl font-bold text-primary_dark">Events</p>
      <div>
        <p className="text-4xl underline text-black">Upcoming</p>
        {upcoming ? <EventList data={upcoming} /> : <p>loading...</p>}
      </div>
      <div>
        <p className="text-4xl underline text-black">Previous</p>
        {previous ? <EventList data={previous} /> : <p>loading...</p>}
      </div>
    </div>
  );
}
