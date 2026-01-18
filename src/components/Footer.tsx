import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-balsanBlue text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-bold text-xl mb-3">BALSAN</h3>
          <p className="text-sm leading-relaxed">
            Business & Finance Solutions for growing companies. Trusted services in accounting,
            taxation, compliance and financial planning.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">📍 Hyderabad, Telangana</p>
          <p className="text-sm">📞 +91 98xxx xxxxx</p>
          <p className="text-sm">✉️ info@balsan.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs flex justify-between">
          <p>© {new Date().getFullYear()} BALSAN. All rights reserved.</p>
          <div className="hidden md:flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
