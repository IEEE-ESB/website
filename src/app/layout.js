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
        <div className="fixed w-full bg-zinc-500 h-32 flex justify-between px-5 text-yellow-300 text-6xl font-bold items-center">
          <div>IEEE</div>
          <div>Edinburg Student Branch</div>
        </div>
        <div className="flex">
          <NavBar
            navs={[
              { title: "About Us", nav: "/" },
              { title: "Events", nav: "/events" },
              { title: "Membership", nav: "/membership" },
            ]}
          />
          <div className="ms-40 mt-32 p-3 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
