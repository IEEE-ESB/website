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
    <div className="w-full h-full justify-items-center">
      <div className="text-4xl font-bold p-4 text-primary_dark">
        Membership Form
      </div>
      <form
        className="flex flex-col w-1/4 gap-y-3 items-center"
        onSubmit={submit}
      >
        <input
          name="name"
          placeholder="Name"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
        />
        <input
          name="major"
          placeholder="Major"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
        />
        <input
          name="cashapp"
          placeholder="Cashapp Tag"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary_dark hover:text-white h-10 w-1/2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
