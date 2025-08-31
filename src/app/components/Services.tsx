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

// Enhanced service data with cute illustrations
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
    ],
    color: 'from-orange-100 to-amber-200',
    accentColor: 'orange-300'
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
    ],
    color: 'from-amber-100 to-yellow-200',
    accentColor: 'amber-300'
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
    ],
    color: 'from-yellow-100 to-orange-200',
    accentColor: 'yellow-300'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -15,
    scale: 1.02,
    rotateY: 5,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    x: [-2, 2, -2],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Cute illustration components
const CuteCroissant = () => (
  <motion.div 
    className="relative"
    animate={{
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="w-24 h-16 bg-gradient-to-br from-yellow-200 via-orange-200 to-amber-300 rounded-full relative shadow-lg">
      <div className="absolute inset-2 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-full opacity-80"></div>
      {/* Croissant layers */}
      <div className="absolute top-3 left-2 w-16 h-1 bg-amber-400 rounded-full opacity-60"></div>
      <div className="absolute top-5 left-3 w-14 h-1 bg-amber-400 rounded-full opacity-60"></div>
      <div className="absolute top-7 left-4 w-12 h-1 bg-amber-400 rounded-full opacity-60"></div>
      {/* Cute sparkles */}
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full"
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-400 rounded-full"
      />
    </div>
  </motion.div>
);

const CuteCoffeeCup = () => (
  <motion.div 
    className="relative"
    animate={{
      y: [-8, 8, -8],
      rotate: [0, -3, 3, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="w-20 h-24 bg-gradient-to-b from-orange-100 to-amber-200 rounded-2xl relative shadow-lg border-3 border-amber-300">
      {/* Coffee liquid */}
      <motion.div
        animate={{ height: ["75%", "80%", "75%"] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-amber-800 to-amber-600 rounded-xl"
      />
      {/* Cute foam art */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-orange-50 rounded-t-full opacity-90">
        <div className="absolute -top-0.5 left-1 w-2 h-2 bg-orange-50 rounded-full"></div>
        <div className="absolute -top-0.5 right-1 w-2 h-2 bg-orange-50 rounded-full"></div>
      </div>
      {/* Handle */}
      <div className="absolute -right-4 top-6 w-6 h-8 border-3 border-amber-300 rounded-r-full bg-gradient-to-r from-transparent to-orange-100"></div>
    </div>
    {/* Steam hearts */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, -30],
            opacity: [0.8, 0],
            scale: [1, 1.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut"
          }}
          className="absolute"
          style={{ left: `${i * 4 - 4}px` }}
        >
          <div className="w-2 h-1.5 bg-orange-300 relative opacity-60">
            <div className="absolute -top-0.5 left-0 w-1 h-1 bg-orange-300 rounded-full"></div>
            <div className="absolute -top-0.5 right-0 w-1 h-1 bg-orange-300 rounded-full"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const CutePartyHat = () => (
  <motion.div 
    className="relative"
    animate={{
      rotate: [0, 8, -8, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="w-20 h-24 relative">
      {/* Party hat */}
      <div className="w-16 h-20 bg-gradient-to-b from-pink-200 via-yellow-200 to-orange-200 relative mx-auto">
        <div style={{ 
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'linear-gradient(to bottom, rgb(252, 231, 243), rgb(254, 240, 138), rgb(254, 215, 170))'
        }} className="w-full h-full shadow-lg">
        </div>
        {/* Stripes */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-orange-300 opacity-60"></div>
        <div className="absolute top-8 left-1 right-1 h-1 bg-pink-300 opacity-60"></div>
        <div className="absolute top-12 left-2 right-2 h-1 bg-yellow-400 opacity-60"></div>
      </div>
      {/* Pom pom */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full shadow-md"
      />
      {/* Confetti */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 10],
            x: [0, Math.sin(i) * 10, 0],
            rotate: [0, 360],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"
          style={{
            top: `${60 + i * 5}%`,
            left: `${30 + i * 10}%`
          }}
        />
      ))}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className={`${playfair.variable} ${cormorant.variable} ${dancingScript.variable} py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden`} 
      style={{ 
        background: 'linear-gradient(to bottom, #f8f3e9, #f3ebd7)',
        borderTop: '1px solid #e6d9bc',
        borderBottom: '1px solid #e6d9bc'
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-10"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-32 right-20 w-12 h-12 bg-yellow-200 rounded-full opacity-15"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-amber-200 rounded-full opacity-10"
        />
      </div>

      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute left-4 top-4 opacity-15"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7Z" stroke="#76624d" strokeWidth="2" />
            <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="#76624d" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className={`${dancingScript.className} text-3xl text-amber-800 block mb-2`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Indulge in
          </motion.span>
          <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 text-[#5C4B36]`}>Our Services</h2>
          
          {/* Enhanced decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent w-16"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="#8C6D4D" />
                <path d="M12 2L13 5L12 6L11 5L12 2Z" fill="#8C6D4D" />
                <path d="M12 14L11 17L12 18L13 17L12 14Z" fill="#8C6D4D" />
                <path d="M6 10L3 9L2 10L3 11L6 10Z" fill="#8C6D4D" />
                <path d="M18 10L21 11L22 10L21 9L18 10Z" fill="#8C6D4D" />
              </svg>
            </motion.div>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent w-16"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          
          <motion.p 
            className={`${cormorant.className} text-xl max-w-2xl mx-auto text-[#5C4B36] italic leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A curated selection of artisanal delights to satisfy every palate
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="relative group"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className="overflow-hidden service-card relative"
                variants={cardHoverVariants}
                style={{
                  background: 'rgba(255, 252, 245, 0.95)',
                  borderRadius: '1.5rem',
                  boxShadow: '0 8px 32px rgba(138, 110, 79, 0.15)',
                  border: '2px solid rgba(222, 205, 179, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Cute top decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-60"></div>
                
                {/* Enhanced image section with cute illustrations */}
                <div className={`h-56 overflow-hidden relative bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute top-8 right-6 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-6 left-8 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Cute custom illustrations */}
                  <div className="relative z-10">
                    {index === 0 && <CuteCroissant />}
                    {index === 1 && <CuteCoffeeCup />}
                    {index === 2 && <CutePartyHat />}
                  </div>
                  
                  {/* Floating emoji with animation */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0">
                    <div className={`w-16 h-16 bg-${service.accentColor} opacity-20 rounded-tl-full`}></div>
                  </div>
                </div>

                {/* Enhanced content section */}
                <div className="p-8 relative">
                  {/* Cute title decoration */}
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`w-2 h-2 bg-${service.accentColor} rounded-full mr-3`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <h3 className={`${playfair.className} text-2xl font-semibold text-[#5C4B36]`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className={`${cormorant.className} mb-6 text-[#6b5c48] text-lg leading-relaxed`}>
                    {service.description}
                  </p>
                  
                  {/* Enhanced features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className={`${cormorant.className} flex items-center text-[#6b5c48] text-lg`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 + index * 0.2 }}
                      >
                        <motion.span 
                          className="mr-3 text-amber-700 text-xl"
                          animate={{ rotate: [0, 360] }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: featureIndex * 0.5 
                          }}
                        >
                          ✦
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Enhanced button */}
                  <motion.button 
                    className={`${cormorant.className} px-8 py-3 text-[#5C4B36] transition-all duration-300 relative overflow-hidden group`}
                    style={{
                      border: '2px solid #8C6D4D',
                      borderRadius: '2rem',
                      background: 'transparent',
                      fontSize: '1.1rem',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 8px 20px rgba(140, 109, 77, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#8C6D4D';
                      e.currentTarget.style.color = '#f8f3e9';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#5C4B36';
                    }}
                  >
                    <span className="relative z-10">Discover More</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.button>
                </div>

                {/* Card corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-300 rounded-tl-2xl opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-300 rounded-br-2xl opacity-60"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="mt-24 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(140, 109, 77, 0.08), rgba(140, 109, 77, 0.15), rgba(140, 109, 77, 0.08))',
            padding: '4rem 2rem',
            borderRadius: '2rem',
            border: '1px solid rgba(222, 205, 179, 0.4)',
            boxShadow: '0 12px 40px rgba(138, 110, 79, 0.1)'
          }}
        >
          {/* Floating decorative hearts */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              animate={{
                y: [-10, -30, -10],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 30}%`
              }}
            >
              💕
            </motion.div>
          ))}

          <motion.span 
            className={`${dancingScript.className} text-3xl text-amber-800 block mb-2`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Customized for You
          </motion.span>
          
          <h3 className={`${playfair.className} text-4xl font-semibold mb-6 text-[#5C4B36]`}>
            Have a special request?
          </h3>
          
          <p className={`${cormorant.className} mb-10 max-w-2xl mx-auto text-[#6b5c48] text-xl leading-relaxed`}>
            We love creating custom experiences for our patrons. Let us know how we can make your visit or event truly special.
          </p>
          
          <motion.button 
            className={`${cormorant.className} px-10 py-4 bg-[#8C6D4D] text-[#f8f3e9] transition-all duration-300 relative overflow-hidden group`}
            style={{
              borderRadius: '2rem',
              fontSize: '1.2rem',
              letterSpacing: '0.5px',
              boxShadow: '0 8px 25px rgba(140, 109, 77, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 35px rgba(140, 109, 77, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#76624d';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#8C6D4D';
            }}
          >
            <span className="relative z-10">Contact Us</span>
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 opacity-0 group-hover:opacity-30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ borderRadius: '2rem' }}
            />
          </motion.button>
          
          {/* Enhanced decorative coffee elements */}
          <motion.div 
            className="absolute -bottom-4 right-8 opacity-15"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
              <path d="M2 8H18V17C18 19.2091 16.2091 21 14 21H6C3.79086 21 2 19.2091 2 17V8Z" stroke="#76624d" strokeWidth="2"/>
              <path d="M18 8H22V10C22 11.1046 21.1046 12 20 12C18.8954 12 18 11.1046 18 10V8Z" stroke="#76624d" strokeWidth="2"/>
              <path d="M6 1L6 4" stroke="#76624d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 1L10 4" stroke="#76624d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 1L14 4" stroke="#76624d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>

          <motion.div 
            className="absolute -top-6 left-12 opacity-20"
            animate={{ 
              y: [-5, 5, -5],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
          
            <div className="text-4xl">🌟</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
