import styles from "@/app/styles.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <img
        src="mountain.webp"
        className={`object-none object-center h-48 w-full ${styles.event_image}`}
      />
      <p className="text-5xl font-bold text-black">About Us</p>
      <div className="flex flex-col gap-5 w-1/2 items-center">
        <p>
          The Institute of Electrical and Electronics Engineers - Edinburg
          Student Branch (IEEE ESB) is a dynamic, student-run organization
          dedicated to fostering innovation, leadership, and hands-on experience
          in engineering and technology. Based at UTRGV, our branch operates
          under the global umbrella of the Institute of Electrical and
          Electronics Engineers (IEEE), the world's largest technical
          professional organization.
        </p>
        <h1 className="text-3xl font-bold">Who We Are</h1>
        <p>
          Open to students from all majors, IEEE ESB places a special emphasis
          on those pursuing electrical and computer engineering. We aim to build
          a collaborative environment where students can expand their technical
          knowledge, grow their professional network, and make a real impact
          both on campus and in the wider community.
        </p>
        <h1 className="text-3xl font-bold">What We Do</h1>
        <p>
          We host a variety of events throughout the year to engage, educate,
          and empower our members, including:
        </p>
        <ul className="list-disc">
          <li>
            Hands-on workshops in electronics, software development, robotics,
            and more
          </li>
          <li>
            Fundraisers and sponsorship initiatives to support projects and
            outreach
          </li>
          <li>Student-led projects that encourage innovation and teamwork</li>
          <li>
            Mentorship and support programs to guide members through their
            academic and career journeys
          </li>
          <li>
            Community outreach, including visits to local grade schools to
            inspire the next generation of engineers through fun, interactive
            STEM activities
          </li>
        </ul>
        <h1 className="text-3xl font-bold">Our Mission</h1>
        <p>
          Our mission is to empower students through hands-on learning,
          leadership opportunities, and community outreach in engineering and
          technology cultivating the next generation of innovators and
          changemakers.
        </p>
        <h1 className="text-3xl font-bold">Our Values</h1>
        <ul className="list-disc flex flex-col gap-3">
          <li>
            <h1 className="font-bold">Innovation</h1>
            We encourage creativity and experimentation in all student-led
            projects.
          </li>
          <li>
            <h1 className="font-bold">Collaboration</h1>
            We believe in teamwork across disciplines and backgrounds.
          </li>
          <li>
            <h1 className="font-bold">Community Engagement</h1>
            We are committed to serving and inspiring our local community,
            especially the next generation.
          </li>
          <li>
            <h1 className="font-bold">Growth</h1>
            We provide resources and experiences that help members grow
            technically, professionally, and personally.
          </li>
          <li>
            <h1 className="font-bold">Leadership</h1>
            We nurture student leaders who drive positive change in their field
            and their community.
          </li>
        </ul>
        <h1 className="text-3xl font-bold">Why Join IEEE ESB?</h1>
        <p>
          Whether you're looking to enhance your technical skills, lead a team,
          give back to your community, or simply find a group of like-minded
          peers, IEEE ESB offers the tools and support to help you thrive. Join
          us in shaping the future of engineering starting today.
        </p>
      </div>
    </div>
  );
}
