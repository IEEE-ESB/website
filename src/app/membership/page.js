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
            Voluptate officia ullamco proident est irure eu anim ipsum duis
            consequat duis. Fugiat ut qui mollit ea aute dolore ut duis.
            Consectetur esse elit est dolor sit cillum in incididunt sit. Ea
            adipisicing nostrud culpa laborum pariatur eu adipisicing veniam
            incididunt. Aliqua velit pariatur et deserunt aliquip. Do culpa anim
            enim est proident eu officia reprehenderit mollit laborum
            consectetur culpa qui. Minim deserunt velit id ad fugiat mollit
            aliquip esse. Eu officia aliqua ipsum occaecat ullamco sunt. Est eu
            non ut in fugiat qui qui commodo consectetur nulla irure do tempor.
            Elit magna elit irure minim aliqua voluptate velit Lorem ipsum
            mollit.
          </p>
          <p>Requirements:</p>
          <ul className="list">
            <li>GPA: 2.5+</li>
            <li>Engineering Major</li>
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
            Tempor nostrud nostrud voluptate deserunt occaecat veniam eiusmod
            consequat labore sunt ut. Ullamco est nostrud minim voluptate magna
            est aliqua cillum nostrud excepteur cillum. Lorem quis enim sunt
            duis proident culpa Lorem qui sunt ullamco elit proident sint.Irure
            exercitation dolore incididunt nisi ullamco est. Consequat laborum
            aliquip commodo irure consequat quis aliquip id aute sint. Tempor
            labore dolore enim proident eu magna sunt est ut ea non tempor
            occaecat aute.
          </p>
        </div>
        <button className="text-3xl bg-primary hover:bg-primary_dark hover:text-white p-3 rounded">
          Support Us
        </button>
      </div>
    </div>
  );
}
