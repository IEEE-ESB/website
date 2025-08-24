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
        <div className="fixed w-full h-32 flex justify-between bg-[url(/AI-PCB-3.png)] bg-cover bg-center">
          <a href="/">
            <div className="flex px-5 h-full items-center text-white text-6xl font-extrabold text_gradient_r">
              <img src="/IEEEicon.png" className="h-28" />
              <div className="text-8xl">IEEE</div>
            </div>
          </a>
          <div className="h-full flex items-center text-white text-6xl font-bold text_gradient_l pe-3">
            Edinburg Student Branch
          </div>
        </div>
        <div className="flex">
          <NavBar
            navs={[
              { title: "About Us", nav: "/" },
              { title: "Events", nav: "/events" },
              { title: "Membership", nav: "/membership" },
              { title: "Leadership", nav: "/leadership" },
              // { title: "Support Us", nav: "/support" },
              { title: "Contact Us", nav: "/contact" },
              // { title: "Get Involved", nav: "/projects" },
            ]}
          />
          <div className="ms-40 mt-32 p-3 w-full pb-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
