import styles from "./styles.module.css";
import Link from "next/link";

export const NavBar = ({ navs }) => {
  return (
    <div
      className={`fixed flex flex-col content-between h-full mt-32 ${styles.bg_black} pe-3 gap-5 py-5`}
    >
      <div className="flex flex-col gap-5">
        {navs.map((item, i) => {
          return <BookMark title={item.title} nav={item.nav} key={i} />;
        })}
      </div>
      <div className="flex place-content-between px-2">
        <a href="https://www.facebook.com/ieeeedinburg" target="#">
          <img src="/facebook.png" width={28} height={28} />
        </a>
        <a href="https://www.instagram.com/ieee.edinburg?igsh=MXUydWdiNnVhNnQ0MQ==" target="#">
          <img src="/instagram.png" width={28} height={28} />
        </a>
        <a
          href="https://discord.gg/jMR3z42"
          target="#"
          className="bg-white p-px rounded"
        >
          <img src="/discord.png" width={25} height={25} />
        </a>
      </div>
    </div>
  );
};

const BookMark = ({ title, nav }) => {
  return (
    <Link href={nav}>
      <button className={`flex relative ${styles.nav_button}`}>
        <div className="absolute inset-3">
          <p className="text-left font-bold">{title}</p>
        </div>
        <div className={styles.rectangle} />
        <div className={styles.triangle_topleft} />
      </button>
    </Link>
  );
};
