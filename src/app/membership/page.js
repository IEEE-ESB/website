import styles from "@/app/styles.module.css";

export default function Membership() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <img
        src="mountain.webp"
        className={`object-none object-center h-48 w-full ${styles.event_image}`}
      />
      <div className="flex flex-col items-center gap-y-5">
        <p className="text-5xl font-bold">Become a Member</p>
        <div className="flex flex-col gap-3 w-1/2">
          <p>
            At IEEE ESB, we're more than just a student organization we're a
            launchpad for innovators, leaders, and lifelong learners. Whether
            you're looking for a mentor or ready to take the lead yourself,
            you'll find your place here.As a newly established non-profit, we
            turn challenges into opportunities, learning and growing together
            every step of the way. Our members thrive in competition, proudly
            representing the Edinburg Student Branch (ESB) at the{" "}
            <a
              className="text-primary_dark hover:text-primary font-bold"
              href="https://www.r5conferences.org"
              target="#"
            >
              IEEE Region 5 Conference
            </a>{" "}
            ,{" "}
            <a
              className="text-primary_dark hover:text-primary font-bold"
              href="https://ieeextreme.org"
              target="#"
            >
              IEEE Xtreme Programming Competition
            </a>
            , and other local competitions we host or support.
          </p>
          <p>
            Need help with coursework or your senior design project? We've got
            your back. And when it's your turn to give back, you can join us in
            building partnerships and running fundraisers that make a difference
            in our community. Try us for a semester you'll see why many stay for
            life. From your first meeting to your alumni years, the skills,
            connections, and experiences you gain here will follow you
            throughout your career.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold">Benefits</p>
            <ul className="list list-disc">
              <li>Workshops</li>
              <li>Projects</li>
              <li>Mentorship</li>
              <li>Competitions</li>
              <li>And more!</li>
            </ul>
            <p className="font-bold">Requirements</p>
            <ul className="list list-disc">
              <li>All Majors welcome</li>
              <li>Fee: $5 / semester</li>
            </ul>
          </div>
        </div>
        {/* <a href="membership/join">
          <button className="text-3xl bg-primary hover:bg-primary_dark hover:text-white p-3 rounded">
            Join Us
          </button>
        </a> */}
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <p className="text-5xl font-bold">Alumni</p>
        <div className="flex flex-col gap-3 w-1/2">
          <p>
            Even after graduation, your connection to IEEE ESB continues to
            offer lasting value. As alumni, you remain part of a growing network
            of engineers, innovators, and leaders who share a passion for
            lifelong learning and community impact. Staying engaged gives you
            access to networking opportunities with current members and fellow
            alumni, invitations to special events, and chances to mentor or
            speak at workshops. This allows you to give back and share your
            journey.
          </p>
          <p>
            Whether you're looking to mentor, recruit, collaborate on a project,
            or simply stay in touch, our alumni network is a place where your
            experience matters and your involvement makes a difference.
          </p>
        </div>
        {/* <button className="text-3xl bg-primary hover:bg-primary_dark hover:text-white p-3 rounded">
          Support Us
        </button> */}
      </div>
    </div>
  );
}
