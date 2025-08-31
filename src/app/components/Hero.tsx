"use client"
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const mugVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 3, -3, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const steamVariants = {
    animate: {
      y: [-20, -60],
      opacity: [0.8, 0],
      scale: [1, 1.5],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 w-16 h-16 bg-amber-300 rounded-full opacity-15"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-25"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute bottom-20 right-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-20"
        />
      </div>

      {/* Main content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-32"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium tracking-wide uppercase">
                Freshly Baked Daily
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight"
            >
              <span className="block">Bean &</span>
              <span className="block text-orange-700">Brew</span>
              <span className="block text-yellow-700">Cafe</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-amber-800 mb-8 max-w-lg leading-relaxed"
            >
              Where aromatic coffee meets freshly baked artisan pastries. 
              Start your day with our handcrafted delights and premium brews.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-amber-700 text-cream-50 rounded-lg font-semibold text-lg hover:bg-amber-800 transition-colors shadow-lg"
              >
                Explore Menu
              </motion.button>
              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-lg font-semibold text-lg 
             hover:bg-amber-700 hover:text-white transition-all"
>
  Order Online
</motion.button>

            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">15+</div>
                <div className="text-sm text-amber-700">Coffee Varieties</div>
              </div>
              <div className="w-px h-8 bg-amber-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">25+</div>
                <div className="text-sm text-amber-700">Fresh Pastries</div>
              </div>
              <div className="w-px h-8 bg-amber-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">5★</div>
                <div className="text-sm text-amber-700">Customer Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Right content - Coffee Mug Image with Animation */}
          <div className="flex-1 relative">
            <motion.div
              variants={itemVariants}
              className="relative max-w-lg mx-auto"
            >
              {/* Animated background circle for the mug */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 rounded-full opacity-30 mx-auto"
              />

              {/* Main coffee mug image with cute animations */}
              <motion.div
                variants={mugVariants}
                animate="animate"
                className="relative z-20 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.img
                  src="https://img.freepik.com/premium-vector/vector-cute-mug-with-coffee-cartoon-icon-illustration_349618-25980.jpg"
                  alt="Cute Coffee Mug"
                  className="w-72 h-72 object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
                
                {/* Additional cute steam effects over the image */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={steamVariants}
                      animate="animate"
                      className="absolute"
                      style={{ 
                        left: `${i * 8 - 12}px`,
                        animationDelay: `${i * 0.6}s`
                      }}
                    >
                      {/* Heart-shaped steam */}
                      <div className="w-4 h-3 bg-gradient-to-t from-orange-300 to-transparent relative opacity-60">
                        <div className="absolute -top-0.5 left-0.5 w-2 h-2 bg-orange-300 rounded-full"></div>
                        <div className="absolute -top-0.5 right-0.5 w-2 h-2 bg-orange-300 rounded-full"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating sparkles around the mug */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-20, -40, -20],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 360],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                    style={{
                      top: `${30 + i * 15}%`,
                      left: `${20 + (i % 3) * 30}%`
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating cute pastries around the mug */}
              <motion.div
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -left-8 z-10"
              >
                {/* Cute croissant */}
                <div className="w-16 h-12 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full relative shadow-lg">
                  <div className="absolute inset-2 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-full opacity-80"></div>
                  <div className="absolute top-2 left-3 w-1 h-1 bg-amber-600 rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 right-2 w-1 h-1 bg-amber-600 rounded-full opacity-60"></div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{
                  x: [0, -12, 0],
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-12 z-10"
              >
                {/* Cute cupcake */}
                <div className="relative">
                  {/* Cupcake base */}
                  <div className="w-12 h-16 bg-gradient-to-b from-amber-300 to-orange-400 rounded-b-lg shadow-lg"></div>
                  {/* Frosting */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-t from-orange-50 to-yellow-100 rounded-full shadow-md">
                    {/* Cherry on top */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-300 rounded-full shadow-sm"></div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-0.5 w-1 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 8, 0],
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 -right-6 z-10"
              >
                {/* Cute donut */}
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full shadow-lg relative">
                    {/* Donut hole */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full shadow-inner"></div>
                    {/* Cute sprinkles */}
                    <div className="absolute top-2 left-3 w-1 h-3 bg-red-400 rounded-full transform rotate-45 opacity-80"></div>
                    <div className="absolute top-4 right-2 w-1 h-3 bg-green-400 rounded-full transform -rotate-12 opacity-80"></div>
                    <div className="absolute bottom-3 left-4 w-1 h-3 bg-blue-400 rounded-full transform rotate-12 opacity-80"></div>
                    <div className="absolute bottom-2 right-4 w-1 h-3 bg-purple-400 rounded-full transform -rotate-45 opacity-80"></div>
                  </div>
                </div>
              </motion.div>

              {/* Additional cute coffee bean */}
              <motion.div
                animate={{
                  x: [0, -5, 0],
                  y: [0, 12, 0],
                  rotate: [0, 360, 720]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute top-16 left-8 z-10"
              >
                {/* Coffee bean */}
                <div className="w-8 h-12 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full relative shadow-md">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-amber-800 rounded-full"></div>
                </div>
              </motion.div>

              {/* Cute mini coffee cup */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-16 left-4 z-10"
              >
                {/* Mini coffee cup */}
                <div className="relative">
                  <div className="w-8 h-10 bg-gradient-to-b from-orange-200 to-amber-300 rounded-lg shadow-md border-2 border-amber-400">
                    {/* Coffee in mini cup */}
                    <div className="absolute bottom-1 left-1 right-1 h-6 bg-gradient-to-t from-amber-800 to-amber-600 rounded-md"></div>
                    {/* Mini foam */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-orange-50 rounded-full opacity-90"></div>
                  </div>
                  {/* Mini handle */}
                  <div className="absolute -right-2 top-2 w-3 h-4 border-2 border-amber-400 rounded-r-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="rgba(251, 191, 36, 0.1)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;