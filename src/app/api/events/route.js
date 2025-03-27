import { NextResponse } from "next/server";

export function GET() {
  const events = [
    {
      title: "IEEE Hackathon",
      when: Date.now(),
      description:
        "Duis ea consequat ea ea minim sunt. Et laboris non proident cupidatat ad non. Commodo ullamco ea enim aute minim. Incididunt exercitation exercitation id et dolor cillum id aliquip ut aliqua adipisicing officia sit. Enim aliquip laboris aliqua fugiat tempor pariatur non cillum. Id anim nisi eiusmod adipisicing fugiat reprehenderit eiusmod anim esse. Nulla non Lorem cupidatat dolore sit laborum in reprehenderit dolor reprehenderit occaecat reprehenderit exercitation.",
    },
    {
      title: "Web Development Workshop",
      when: Date.now(),
      description:
        "Duis ea consequat ea ea minim sunt. Et laboris non proident cupidatat ad non. Commodo ullamco ea enim aute minim. Incididunt exercitation exercitation id et dolor cillum id aliquip ut aliqua adipisicing officia sit. Enim aliquip laboris aliqua fugiat tempor pariatur non cillum. Id anim nisi eiusmod adipisicing fugiat reprehenderit eiusmod anim esse. Nulla non Lorem cupidatat dolore sit laborum in reprehenderit dolor reprehenderit occaecat reprehenderit exercitation.",
    },
    {
      title: "PSpice Workshop",
      when: Date.now(),
      description:
        "Duis ea consequat ea ea minim sunt. Et laboris non proident cupidatat ad non. Commodo ullamco ea enim aute minim. Incididunt exercitation exercitation id et dolor cillum id aliquip ut aliqua adipisicing officia sit. Enim aliquip laboris aliqua fugiat tempor pariatur non cillum. Id anim nisi eiusmod adipisicing fugiat reprehenderit eiusmod anim esse. Nulla non Lorem cupidatat dolore sit laborum in reprehenderit dolor reprehenderit occaecat reprehenderit exercitation.",
    },
  ];

  return NextResponse.json(events, { status: 200 });
}
