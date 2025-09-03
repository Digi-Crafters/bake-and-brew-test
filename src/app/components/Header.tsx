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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Navigation items
  const navItems = [
    { label: "Services", id: "services-section" },
    { label: "Gallery", id: "gallery-section" },
    { label: "Contact", id: "contact-section" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-gradient-to-b from-[#5d4037] to-[#4e342e] py-3'}`}>
      {/* Animated coffee steam effect - hidden on mobile */}
      <div className="absolute -top-4 left-10 md:left-20 w-12 h-4 opacity-70 hidden md:block">
        <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-3 animate-steam1"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full top-0 left-5 animate-steam2"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-8 animate-steam3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <h2
            className={`${abrilFatface.className} text-2xl sm:text-3xl md:text-4xl relative transition-colors duration-500 ${isScrolled ? 'text-[#5d4037]' : 'text-amber-50'} md:ml-[-9.4rem]`}
            style={{ 
              letterSpacing: "0.03em", 
              textShadow: isScrolled ? "none" : "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Bean and Brew
            <span className={`absolute -bottom-2 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-amber-600 opacity-100' : 'bg-amber-400 opacity-80'}`}></span>
          </h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 md:gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToComponent(item.id)}
              className={`font-medium transition-all duration-300 flex items-center py-2 relative group ${isScrolled ? 'text-[#5d4037] hover:text-amber-600' : 'text-amber-100 hover:text-amber-300'}`}
              onMouseEnter={() => setActiveHover(item.label)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <span className="relative z-10 text-sm md:text-base">{item.label}</span>
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
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-[#5d4037]' : 'text-amber-50'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''} ${isScrolled ? 'bg-[#5d4037]' : 'bg-amber-50'}`}></span>
            <span className={`block h-0.5 w-6 rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-[#5d4037]' : 'bg-amber-50'}`}></span>
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''} ${isScrolled ? 'bg-[#5d4037]' : 'bg-amber-50'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToComponent(item.id)}
                className="text-left py-2 px-3 text-[#5d4037] font-medium rounded-md hover:bg-amber-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
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