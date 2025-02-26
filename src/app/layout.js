import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "IEEE-ESB",
  description: "IEEE-ESB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex`}>
        <NavBar
          navs={[
            { title: "About Us", nav: "/about-us" },
            { title: "Events", nav: "/events" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
