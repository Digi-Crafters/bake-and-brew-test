"use client";

import React, { useState, useEffect } from "react";
import { Abril_Fatface } from "next/font/google";

// Load Google Fonts
const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril",
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to component function
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-gradient-to-b from-[#5d4037] to-[#4e342e] py-3'}`}>
      {/* Animated coffee steam effect */}
      <div className="absolute -top-4 left-20 w-12 h-4 opacity-70">
        <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-3 animate-steam1"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full top-0 left-5 animate-steam2"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-8 animate-steam3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <h2
            className={`${abrilFatface.className} text-3xl md:text-4xl relative transition-colors duration-500 ${isScrolled ? 'text-[#5d4037]' : 'text-amber-50'}`}
            style={{ letterSpacing: "0.03em", textShadow: isScrolled ? "none" : "1px 1px 2px rgba(0,0,0,0.3)" }}
          >
            Bean and Brew
            <span className={`absolute -bottom-2 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-amber-600 opacity-100' : 'bg-amber-400 opacity-80'}`}></span>
          </h2>
        </div>
        
        <nav className="flex gap-6 md:gap-8">
          {[
            { label: "Services", id: "services" },
           { label: "Gallery", id: "gallery-section" },
            { label: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToComponent(item.id)}
              className={`font-medium transition-all duration-300 flex items-center py-2 relative group ${isScrolled ? 'text-[#5d4037] hover:text-amber-600' : 'text-amber-100 hover:text-amber-300'}`}
              onMouseEnter={() => setActiveHover(item.label)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <span className="relative z-10">{item.label}</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 rounded-full ${activeHover === item.label ? 'w-full' : 'w-0'}`}></span>
              
              {/* Floating coffee bean on hover */}
              {activeHover === item.label && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 opacity-0 animate-float">
                  <svg className="w-3 h-3 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9 7 4 9 4 14c0 2 1 3 1 3h14s1-1 1-3c0-5-5-7-8-12z"/>
                  </svg>
                </span>
              )}
            </button>
          ))}
          
          {/* Special menu button with coffee stain effect */}
              <button 
            onClick={() => scrollToComponent("menu")} // <-- Change to match the section id in menu.tsx
            className={`ml-4 px-4 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${isScrolled ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-amber-400 text-[#5d4037] hover:bg-amber-500'}`}
          >
            <span className="relative z-10">Menu</span>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute w-16 h-16 bg-amber-700/20 rounded-full -translate-y-8 -translate-x-6"></div>
              <div className="absolute w-10 h-10 bg-amber-700/20 rounded-full translate-y-4 translate-x-8"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-400/30 to-amber-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </nav>
      </div>
      
      {/* Subtle decorative element */}
      <div className={`h-1 transition-all duration-500 ${isScrolled ? 'bg-gradient-to-r from-transparent via-amber-500/40 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-400/40 to-transparent'}`}></div>
      
      <style jsx>{`
        @keyframes steam1 {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-8px) scale(1.5); opacity: 0; }
        }
        @keyframes steam2 {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-12px) scale(1.8); opacity: 0; }
        }
        @keyframes steam3 {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-10px) scale(1.6); opacity: 0; }
        }
        @keyframes float {
          0% { transform: translate(-50%, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, -12px); opacity: 0; }
        }
        .animate-steam1 {
          animation: steam1 3s infinite ease-out;
          animation-delay: 0.5s;
        }
        .animate-steam2 {
          animation: steam2 3s infinite ease-out;
          animation-delay: 1s;
        }
        .animate-steam3 {
          animation: steam3 3s infinite ease-out;
          animation-delay: 1.5s;
        }
        .animate-float {
          animation: float 1.5s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;