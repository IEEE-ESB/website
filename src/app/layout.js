import "./globals.css";
import styles from "./styles.module.css";

export const metadata = {
  title: "IEEE-ESB",
  description: "IEEE-ESB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

const NavBar = () => {
  return (
    <div className={`flex flex-col ${styles.bg_black} pe-3 gap-5 py-5`}>
      <BookMark />
      <BookMark />
      <BookMark />
    </div>
  );
};

const BookMark = () => {
  return (
    <div className={`flex relative ${styles.nav_button}`}>
      <div className="absolute inset-3">
        <p>Testing</p>
      </div>
      <div className={styles.rectangle} />
      <div className={styles.triangle_topleft} />
    </div>
  );
};
