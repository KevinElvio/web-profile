const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-950 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Contact Section */}
          <div className="w-full md:w-1/3 px-4 mb-12 text-slate-300 font-medium">
            <h2 className="font-bold text-4xl text-white mb-5">Kevin Elvio</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p className="text-sm md:text-base">kevinelvio18@gmail.com</p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/2 px-4 mb-12">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300">
              {[
                { href: "#home", text: "Beranda" },
                { href: "#about", text: "Tentang Saya" },
                { href: "#portfolio", text: "Portfolio" },
                { href: "#clients", text: "Skill" },
                { href: "#blog", text: "Pengalaman" },
              ].map((link, idx) => (
                <li key={idx} className="mb-3">
                  <a
                    href={link.href}
                    className="inline-block text-base hover:text-primary"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            <a
              href="https://www.instagram.com/kevin_elvio1774/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg
                width="20"
                className="fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0..." />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-elvio-403486255/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg
                width="20"
                className="fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v..." />
              </svg>
            </a>
          </div>

          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat oleh{" "}
            <a
              href="https://www.instagram.com/kevin_elvio1774/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary"
            >
              Kevin Elvio
            </a>
            , menggunakan{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sky-500"
            >
              Tailwind CSS
            </a>
            .
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#home"
        id="to-top"
        className="hidden justify-center items-center fixed z-[9999] bottom-4 right-4 p-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse"
      >
        <span className="block h-5 w-5 rotate-45 border-t-2 border-l-2 mt-2"></span>
      </a>
    </footer>
  );
};

export default Footer;
