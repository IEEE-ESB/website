import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "IEEE-ESB",
  description: "IEEE-ESB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="fixed w-full bg-zinc-500 h-32"></div>
        <div className="flex">
          <NavBar
            navs={[
              { title: "About Us", nav: "/about-us" },
              { title: "Events", nav: "/events" },
            ]}
          />
          <div className="ms-40 mt-32 p-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
