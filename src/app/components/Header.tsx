import React from "react";
import { Abril_Fatface } from "next/font/google";

// Load Google Fonts
const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril",
});

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#f8f3e9] to-[#f3ebd7] shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* Removed pl-2 and md:pl-8 to align with Hero component */}
          <h2
            className={`${abrilFatface.className} text-4xl md:text-5xl text-[#5d4037] relative ml-2 md:ml-8`}
            style={{ letterSpacing: "0.05em" }}
          >
            Bean and Brew
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-[#825c4b] opacity-40"></span>
          </h2>
        </div>
        <nav className="flex gap-8 pr-4">
          <a
            href="#services"
            className="text-yellow-700 font-serif hover:text-[#8C6D4D] transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="text-yellow-700 font-serif hover:text-[#8C6D4D] transition-colors duration-200"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-yellow-700 font-serif hover:text-[#8C6D4D] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;