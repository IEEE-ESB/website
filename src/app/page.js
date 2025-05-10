import styles from "@/app/styles.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <img
        src="mountain.webp"
        className={`object-none object-center h-48 w-full ${styles.event_image}`}
      />
      <p className="text-5xl font-bold text-primary_dark">About Us</p>
      <div className="flex flex-col gap-3 w-3/4">
        <p>
          IEEE Edinburg Student Branch (IEEE ESB) is a dynamic, student-run
          organization dedicated to fostering innovation, leadership, and
          hands-on experience in engineering and technology. Based at UTRGV, our
          branch operates under the global umbrella of the Institute of
          Electrical and Electronics Engineers (IEEE), the world’s largest
          technical professional organization.
        </p>
      </div>
    </div>
  );
}
