"use client";

import { useState } from "react";

export default function OfficerJoin() {
  const [errors, setErrors] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (errors.length > 0) return;
    try {
      const form = document.getElementById("officerForm");
      fetch("/api/officer", {
        method: "POST",
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
        }),
        "content-type": "application/json",
      }).then((response) => {
        if (!response.ok) {
          setErrors([
            ...errors,
            "Couldn't complete request. Please try again.",
          ]);
          return;
        }
        setErrors(
          errors.filter(
            (error) => error != "Couldn't complete request. Please try again."
          )
        );
        const test = document.createElement("div");
        test.innerText = "Thank you, we'll reach out as soon as we can!";
        form.parentNode.appendChild(test);
        form.remove();
      });
    } catch {
      setErrors(["Network error. Please try again."]);
    }
  };

  const emailCheck = (e) => {
    if (
      e.target.value.includes("@utrgv.edu") &&
      e.target.value.replace(/@utrgv.edu/g, "") !== ""
    ) {
      setErrors(
        errors.filter((error) => error != "Please enter a UTRGV email")
      );
      return;
    } else if (errors.includes("Please enter a UTRGV email")) return;
    setErrors([...errors, "Please enter a UTRGV email"]);
  };

  const emailClick = (e) => {
    if (e.target.value.includes("@utrgv.edu")) {
      return;
    }
    e.target.value += "@utrgv.edu";
  };

  const emptyCheck = (e) => {
    if (e.target.value) {
      setErrors(
        errors.filter((error) => error != `Missing ${e.target.placeholder}`)
      );
      return;
    } else if (errors.includes(`Missing ${e.target.placeholder}`)) {
      return;
    }
    setErrors([...errors, `Missing ${e.target.placeholder}`]);
  };

  return (
    <div className="w-full h-full justify-items-center">
      <div className="text-4xl font-bold p-4 text-primary_dark">
        Officer Form
      </div>
      {errors.map((error) => (
        <div key={error} className="text-red-500 text-xl font-bold">
          {error}
        </div>
      ))}
      <form
        id="officerForm"
        className="flex flex-col w-1/4 gap-y-3 items-center"
        onSubmit={submit}
      >
        <input
          name="name"
          placeholder="Name"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
          onBlur={emptyCheck}
        />
        <input
          name="email"
          placeholder="UTRGV Email"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
          onBlur={emailCheck}
          onClick={emailClick}
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
