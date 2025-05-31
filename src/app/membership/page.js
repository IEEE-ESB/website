export default function Membership() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <img
        src="mountain.webp"
        className="object-none object-center h-48 w-full"
      />
      <div className="flex flex-col items-center gap-y-5">
        <p className="text-5xl font-bold">Become a Member</p>
        <div className="flex flex-col gap-3 w-3/4">
          <p>
            Joining IEEE Edinburg Student Branch (IEEE ESB) means becoming part
            of a vibrant, inclusive community of students passionate about
            engineering, innovation, and impact. As a member, you’ll gain
            hands-on experience through technical workshops, student-led
            projects, and real-world problem-solving opportunities. Whether
            you're building circuits, coding applications, or launching outreach
            programs, you'll develop valuable skills that go beyond the
            classroom.
          </p>
          <p>
            IEEE ESB also offers access to mentorship, leadership roles, and
            professional development opportunities to help you grow academically
            and prepare for your future career. You'll connect with like-minded
            peers, experienced mentors, and industry professionals through
            networking events, sponsorships, and collaborations. Plus, with our
            strong focus on community engagement, you'll have the chance to
            inspire young minds by leading STEM activities in local schools. No
            matter your major, if you're curious, driven, and ready to make a
            difference, IEEE ESB is the place for you.
          </p>
          <p className="font-bold">Requirements:</p>
          <ul className="list list-disc">
            <li>All Majors welcome</li>
            <li>Actively participate</li>
            <li>Fee: $5 / semester</li>
          </ul>
        </div>
        <a href="membership/join">
          <button className="text-3xl bg-primary hover:bg-primary_dark hover:text-white p-3 rounded">
            Join Us
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <p className="text-5xl font-bold">Alumni</p>
        <div className="flex flex-col gap-3 w-3/4">
          <p>
            Even after graduation, your connection to IEEE Edinburg Student
            Branch (IEEE ESB) continues to offer lasting value. As an alumnus,
            you remain part of a growing network of engineers, innovators, and
            leaders who share a passion for lifelong learning and community
            impact.
          </p>
          <p>
            Staying engaged with IEEE ESB gives you access to networking
            opportunities with current members and fellow alumni, invitations to
            special events, and chances to mentor or speak at workshops—allowing
            you to give back and share your journey. You'll also stay connected
            to developments in engineering education, student-led innovation,
            and outreach initiatives that continue to shape the next generation.
          </p>
          <p>
            Whether you're looking to mentor, recruit, collaborate on a project,
            or simply stay in touch, our alumni network is a place where your
            experience matters and your involvement makes a difference.
          </p>
        </div>
        <button className="text-3xl bg-primary hover:bg-primary_dark hover:text-white p-3 rounded">
          Support Us
        </button>
      </div>
    </div>
  );
}
