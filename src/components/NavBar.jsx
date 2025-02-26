"use client";

import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const NavBar = ({ navs }) => {
  return (
    <div className={`flex flex-col ${styles.bg_black} pe-3 gap-5 py-5`}>
      {navs.map((item, i) => {
        return <BookMark title={item.title} nav={item.nav} key={i} />;
      })}
    </div>
  );
};

const BookMark = ({ title, nav }) => {
  return (
    <Link href={nav}>
      <button className={`flex relative ${styles.nav_button}`}>
        <div className="absolute inset-3">
          <p className="text-left">{title}</p>
        </div>
        <div className={styles.rectangle} />
        <div className={styles.triangle_topleft} />
      </button>
    </Link>
  );
};
