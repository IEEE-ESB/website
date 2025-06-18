export default function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-10 text-xl">
      <p className="text-5xl font-bold">Contact Us</p>
      <div className="flex gap-5">
        <a href="https://www.facebook.com/ieeeedinburg" target="#">
          <img src="facebook.png" width={25} height={25} />
        </a>
        <p>
          Share your experiences with us and your family on{" "}
          <a
            href="https://www.facebook.com/ieeeedinburg"
            target="#"
            className="text-blue-600 hover:text-blue-300"
          >
            Facebook
          </a>
          !
        </p>
      </div>
      <div className="flex gap-5">
        <a href="https://www.instagram.com/ieeeedinburg/" target="#">
          <img src="instagram.png" width={25} height={25} />
        </a>
        <p>
          Tag us on your posts and follow our story on{" "}
          <a
            href="https://www.instagram.com/ieeeedinburg/"
            target="#"
            className="text-blue-600 hover:text-blue-300"
          >
            Instagram
          </a>
          !
        </p>
      </div>
      <div className="flex gap-5">
        <a
          href="https://discord.gg/jMR3z42"
          target="#"
          className="bg-white p-px rounded"
        >
          <img src="discord.png" width={25} height={25} />
        </a>
        <p>
          Come chat with us and find peers in our server on{" "}
          <a
            href="https://discord.gg/jMR3z42"
            target="#"
            className="text-blue-600 hover:text-blue-300"
          >
            Discord
          </a>
          !
        </p>
      </div>
      <div className="flex gap-5">
        <a
          href="https://chat.whatsapp.com/HwgvzHQpgKcLriKa93e2Zk"
          target="#"
          className="bg-white p-px rounded"
        >
          <img src="whatsapp.png" width={25} height={25} />
        </a>
        <p>
          For more announcements and to get involved, reach out on{" "}
          <a
            href="https://chat.whatsapp.com/HwgvzHQpgKcLriKa93e2Zk"
            target="#"
            className="text-blue-600 hover:text-blue-300"
          >
            Whatsapp
          </a>
          !
        </p>
      </div>
      <div className="flex gap-5">
        <a
          href="mailto:UTRGV_ie3.esb@utrgv.onmicrosoft.com"
          className="bg-white p-px rounded"
        >
          <img src="mail.png" width={25} height={25} />
        </a>
        <p>
          If you have other inquiries or business, email us at{" "}
          <a
            href="mailto:UTRGV_ie3.esb@utrgv.onmicrosoft.com"
            className="text-blue-600 hover:text-blue-300"
          >
            UTRGV_ie3.esb@utrgv.onmicrosoft.com
          </a>
          !
        </p>
      </div>
    </div>
  );
}
