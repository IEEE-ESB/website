"use client";

import { useParams } from "next/navigation";

export default function MembershipJoin() {
  const params = useParams();

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.major.value);
    console.log(e.target.cashapp.value);
    fetch("/api/member", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        major: e.target.major.value,
        cashapp: e.target.cashapp.value,
      }),
      "content-type": "application/json",
    }).then((response) => {
      console.log(response);
      response.json().then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <form className="flex flex-col w-1/4" onSubmit={submit}>
      <input
        name="name"
        placeholder="Name"
        className="border border-4 border-zinc-500 text-center"
      />
      <input
        name="major"
        placeholder="Major"
        className="border border-4 border-zinc-500 text-center"
      />
      <input
        name="cashapp"
        placeholder="Cashapp Tag"
        className="border border-4 border-zinc-500 text-center"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
