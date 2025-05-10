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
    image: "missing.webp",
  },
  {
    id: 3,
    name: "Joseph Trevino",
    position: "Secretary",
    image: "missing.webp",
  },
  {
    id: 4,
    name: "Jose Amaro",
    position: "Master at Arms",
    image: "missing.webp",
  },
  {
    id: 5,
    name: "Daniel Drane",
    position: "Program Director",
    image: "missing.webp",
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
    name: "Carlos Rodriguez",
    position: "Advisor",
    image: "missing.webp",
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
    image: "missing.webp",
  },
];

export default function Leadership() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="justify-items-center">
        <p className="text-5xl font-bold mb-3">Officers</p>
        <div className="grid grid-cols-3 gap-10">
          {officers.map((officer) => (
            <div key={officer.id}>
              <img src={officer.image} width={300} height={300} />
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
              <img src={fac.image} width={300} height={300} />
              <p className="font-bold">{fac.position}</p>
              <p>{fac.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-items-center">
        <p className="text-2xl font-bold">Want to be an officer?</p>
        <button className="bg-primary hover:bg-primary_dark hover:text-white border rounded p-2 font-bold">
          Apply Now
        </button>
      </div>
    </div>
  );
}
