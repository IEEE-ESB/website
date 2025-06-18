const officers = [
  {
    id: 1,
    name: "Diego Sauceda",
    position: "President",
    image: "missing.webp",
  },
  {
    id: 2,
    name: "Koriel Lopez",
    position: "Vice President",
    image: "KorielLopez.jpg",
  },
  {
    id: 3,
    name: "Joseph Trevino",
    position: "Secretary",
    image: "JosephTrevino.jpg",
  },
  {
    id: 8,
    name: "Alexa Perez-Lara",
    position: "Treasurer",
    image: "missing.webp",
  },
  {
    id: 4,
    name: "Jose Amaro",
    position: "Master at Arms",
    image: "JoseAmaro.jpg",
  },
  {
    id: 5,
    name: "Daniel Drane",
    position: "Program Director",
    image: "DanielDrane.jpg",
  },
  {
    id: 6,
    name: "Sebastian Godinez",
    position: "Fundraising Director",
    image: "missing.webp",
  },
  {
    id: 7,
    name: "Joey Rodriguez",
    position: "Social Media Manager",
    image: "missing.webp",
  },
];

const faculty = [
  {
    id: 1,
    name: "Carlos Rodriguez Betancourth",
    position: "Advisor",
    image: "CarlosRodriguezBetancourth.jpg",
  },
  {
    id: 2,
    name: "Luis Castanuela",
    position: "Advisor",
    image: "missing.webp",
  },
  {
    id: 3,
    name: "Dr. Nazmul Islam",
    position: "Advisor",
    image: "NazmulIslam.jpg",
  },
];

export default function Leadership() {
  const size = 240;
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="justify-items-center">
        <p className="text-5xl font-bold mb-3">Officers</p>
        <div className="grid grid-cols-3 gap-10">
          {officers.map((officer) => (
            <div key={officer.id}>
              <img
                src={officer.image}
                className="rounded object-fill"
                width={size}
                height={size}
              />
              <p className="font-bold">{officer.position}</p>
              <p>{officer.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-items-center">
        <p className="text-5xl font-bold mb-3">Faculty</p>
        <div className="grid grid-cols-3 gap-10">
          {faculty.map((fac) => (
            <div key={fac.id}>
              <img
                src={fac.image}
                className="rounded object-fill"
                width={size}
                height={size}
              />
              <p className="font-bold">{fac.position}</p>
              <p>{fac.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-items-center">
        <p className="text-2xl font-bold">Want to be an officer?</p>
        <a href="/leadership/join">
          <button className="bg-primary hover:bg-primary_dark hover:text-white border rounded p-2 font-bold">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
}
