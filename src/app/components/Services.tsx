'use client';

import { motion } from 'framer-motion';
import { Playfair_Display, Cormorant_Garamond, Dancing_Script } from 'next/font/google';

// Load Google Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
});

// Service data
const services = [
  {
    id: 1,
    title: 'Artisan Bakery',
    description: 'Handcrafted pastries, breads, and desserts made daily with locally-sourced ingredients and traditional techniques.',
    icon: '🥐',
    features: [
      'Freshly baked croissants & pastries',
      'Artisan sourdough breads',
      'Custom celebration cakes'
    ]
  },
  {
    id: 2,
    title: 'Specialty Coffee',
    description: 'Expertly crafted coffee beverages using ethically sourced beans roasted to perfection in small batches.',
    icon: '☕',
    features: [
      'Single-origin pour overs',
      'Signature espresso blends',
      'Seasonal specialty drinks'
    ]
  },
  {
    id: 3,
    title: 'Catering & Events',
    description: 'Elevate your special occasions with our custom catering packages and private event hosting options.',
    icon: '🎉',
    features: [
      'Office breakfast spreads',
      'Wedding & celebration cakes',
      'Private cafe rentals'
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const Services = () => {
  return (
    <section className={`${playfair.variable} ${cormorant.variable} ${dancingScript.variable} py-20 px-4 md:px-8 lg:px-16`} 
      style={{ 
        background: 'linear-gradient(to bottom, #f8f3e9, #f3ebd7)',
        borderTop: '1px solid #e6d9bc',
        borderBottom: '1px solid #e6d9bc'
      }}
    >
      <div className="container mx-auto">
        {/* Decorative elements */}
        <div className="absolute left-4 top-4 opacity-10">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7Z" stroke="#76624d" strokeWidth="2" />
            <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="#76624d" strokeWidth="2" />
          </svg>
        </div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={`${dancingScript.className} text-2xl text-amber-800`}>Indulge in</span>
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 text-[#5C4B36]`}>Our Services</h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px bg-amber-800 w-12 opacity-70"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="#8C6D4D" />
            </svg>
            <div className="h-px bg-amber-800 w-12 opacity-70"></div>
          </div>
          <p className={`${cormorant.className} text-lg max-w-2xl mx-auto text-[#5C4B36] italic`}>
            A curated selection of artisanal delights to satisfy every palate
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="overflow-hidden service-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                background: 'rgba(255, 252, 245, 0.8)',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 15px rgba(138, 110, 79, 0.1)',
                border: '1px solid rgba(222, 205, 179, 0.5)'
              }}
            >
              <div className="h-48 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-[#f0e6d2] to-[#e6d7bb] flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className={`${playfair.className} text-2xl font-semibold mb-3 text-[#5C4B36]`}>{service.title}</h3>
                <p className={`${cormorant.className} mb-5 text-[#6b5c48] text-lg`}>{service.description}</p>
                <ul className="space-y-3 mb-7">
                  {service.features.map((feature, index) => (
                    <li key={index} className={`${cormorant.className} flex items-center text-[#6b5c48] text-lg`}>
                      <span className="mr-2 text-amber-800">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`${cormorant.className} px-6 py-2 text-[#5C4B36] hover:text-[#f8f3e9] transition-all duration-300`}
                  style={{
                    border: '1px solid #8C6D4D',
                    borderRadius: '0.25rem',
                    background: 'transparent',
                    fontSize: '1.1rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#8C6D4D';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Discover More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(to right, rgba(140, 109, 77, 0.05), rgba(140, 109, 77, 0.1), rgba(140, 109, 77, 0.05))',
            padding: '3rem 2rem',
            borderRadius: '0.5rem',
          }}
        >
          <span className={`${dancingScript.className} text-2xl text-amber-800`}>Customized for You</span>
          <h3 className={`${playfair.className} text-3xl font-semibold mb-4 text-[#5C4B36]`}>Have a special request?</h3>
          <p className={`${cormorant.className} mb-8 max-w-2xl mx-auto text-[#6b5c48] text-xl`}>
            We love creating custom experiences for our patrons. Let us know how we can make your visit or event truly special.
          </p>
          <button 
            className={`${cormorant.className} px-8 py-3 bg-[#8C6D4D] text-[#f8f3e9] hover:bg-[#76624d] transition-colors`}
            style={{
              borderRadius: '0.25rem',
              fontSize: '1.1rem',
              letterSpacing: '0.5px',
            }}
          >
            Contact Us
          </button>
          
          {/* Decorative coffee elements */}
          <div className="absolute -bottom-3 right-8 opacity-10 transform rotate-12">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path d="M2 8H18V17C18 19.2091 16.2091 21 14 21H6C3.79086 21 2 19.2091 2 17V8Z" stroke="#76624d" strokeWidth="2"/>
              <path d="M18 8H22V10C22 11.1046 21.1046 12 20 12C18.8954 12 18 11.1046 18 10V8Z" stroke="#76624d" strokeWidth="2"/>
              <path d="M6 1L6 4" stroke="#76624d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 1L10 4" stroke="#76624d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 1L14 4" stroke="#76624d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;