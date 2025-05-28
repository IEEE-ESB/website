"use client";

import { useState } from "react";

export default function MembershipJoin() {
  const [errors, setErrors] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    try {
      const form = document.getElementById("memberForm");
      fetch("/api/member", {
        method: "POST",
        body: JSON.stringify({
          name: e.target.name.value,
          major: e.target.major.value,
          cashapp: e.target.cashapp.value,
        }),
        "content-type": "application/json",
      })
        .then(() => {
          const test = document.createElement("div");
          test.innerText = "Thank you, welcome to the club!";
          form.parentNode.appendChild(test);
          // form.remove();
        })
        .then(() => {
          form.remove();
        });
    } catch {
      setError("Network error. Please try again.");
    }
  };

  const emailCheck = (e) => {
    if (e.target.value.includes("@utrgv.edu")) {
      setErrors(
        errors.filter((error) => error != "Please enter a UTRGV email")
      );
      return;
    } else if (errors.includes("Please enter a UTRGV email")) return;
    setErrors([...errors, "Please enter a UTRGV email"]);
  };

  return (
    <div className="w-full h-full justify-items-center">
      <div className="text-4xl font-bold p-4 text-primary_dark">
        Membership Form
      </div>
      <img src="/qr-code.jpg" width={150} className="pb-5" />
      {errors.map((error) => (
        <div key={error} className="text-red-500 text-xl font-bold">
          {error}
        </div>
      ))}
      <form
        id="memberForm"
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
          name="major"
          placeholder="UTRGV Email"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
          onBlur={emailCheck}
        />
        <input
          name="cashapp"
          placeholder="Cashapp Tag"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
          onClick={(e) => {
            if (!e.target.value) e.target.value = "$";
          }}
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary_dark hover:text-white h-10 w-1/2 rounded font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
