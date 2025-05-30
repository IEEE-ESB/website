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
          email: e.target.email.value,
          payment: e.target.payment.value,
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
        test.innerText = "Thank you, welcome to the club!";
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

  const cashappCheck = (e) => {
    const input = e.target.value;
    if (input.replace("$", "")) {
      setErrors(
        errors.filter(
          (error) =>
            error !=
            'Enter your cashapp tag or type "paid" if you used another method'
        )
      );
      return;
    } else if (
      errors.includes(
        'Enter your cashapp tag or type "paid" if you used another method'
      )
    ) {
      return;
    }
    setErrors([
      ...errors,
      'Enter your cashapp tag or type "paid" if you used another method',
    ]);
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
          onBlur={emptyCheck}
        />
        <input
          name="major"
          placeholder="Major"
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
        <input
          name="payment"
          placeholder="Cashapp Tag"
          required
          className="border border-4 border-zinc-500 text-center w-full h-10"
          onClick={(e) => {
            if (!e.target.value) e.target.value = "$";
          }}
          onBlur={cashappCheck}
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
