import React, { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-balsanBlue/95 backdrop-blur border-b border-white/10" : "bg-balsanBlue"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-bold tracking-wide text-xl">
          BALSAN
        </a>

        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-white transition-colors">
              {l.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-4 py-2 rounded-full bg-white/10 text-white text-sm border border-white/15 hover:bg-white/20 transition"
        >
          Get Consultation
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
