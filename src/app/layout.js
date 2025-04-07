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
        <div className="fixed w-full h-32 flex justify-between px-5 bg-[url(/AI-PCB-1.png)] bg-cover bg-center">
          <div className="flex h-ful bg-black/70 items-center text-white text-6xl font-extrabold">
            <img src="/IEEEicon.png" className="h-28" />
            <div>IEEE</div>
          </div>
          <div className="h-full flex items-center bg-black/70 text-white text-6xl font-bold">
            <div>Edinburg Student Branch</div>
          </div>
        </div>
        <div className="flex">
          <NavBar
            navs={[
              { title: "About Us", nav: "/" },
              { title: "Events", nav: "/events" },
            ]}
          />
          <div className="ms-40 mt-32 p-3 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
