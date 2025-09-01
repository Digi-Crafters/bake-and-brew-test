'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const menuItems = {
    coffee: [
      { name: "Classic Espresso", price: "$3.50", description: "Rich, bold shot of pure coffee perfection", icon: "☕" },
      { name: "Vanilla Latte", price: "$4.75", description: "Smooth espresso with steamed milk and vanilla syrup", icon: "🤍" },
      { name: "Caramel Macchiato", price: "$5.25", description: "Espresso with vanilla milk and caramel drizzle", icon: "🍯" },
      { name: "Cappuccino", price: "$4.25", description: "Equal parts espresso, steamed milk, and foam", icon: "☁️" },
      { name: "Mocha Delight", price: "$5.50", description: "Espresso with chocolate syrup and whipped cream", icon: "🍫" },
      { name: "Iced Cold Brew", price: "$4.00", description: "Smooth, cold-steeped coffee served over ice", icon: "🧊" }
    ],
    pastries: [
      { name: "Butter Croissant", price: "$3.25", description: "Flaky, buttery layers of golden perfection", icon: "🥐" },
      { name: "Chocolate Muffin", price: "$3.75", description: "Rich chocolate muffin with chocolate chips", icon: "🧁" },
      { name: "Blueberry Scone", price: "$3.50", description: "Fresh blueberries in a tender, crumbly scone", icon: "🫐" },
      { name: "Cinnamon Roll", price: "$4.25", description: "Warm, gooey cinnamon roll with cream cheese glaze", icon: "🌀" },
      { name: "Apple Danish", price: "$4.00", description: "Flaky pastry with sweet apple filling", icon: "🍎" },
      { name: "Strawberry Tart", price: "$4.50", description: "Fresh strawberries on vanilla custard", icon: "🍓" }
    ],
    breakfast: [
      { name: "Avocado Toast", price: "$6.75", description: "Smashed avocado on artisan bread with everything seasoning", icon: "🥑" },
      { name: "Breakfast Sandwich", price: "$7.25", description: "Egg, cheese, and bacon on a fresh croissant", icon: "🥪" },
      { name: "Yogurt Parfait", price: "$5.50", description: "Greek yogurt with berries and granola", icon: "🍇" },
      { name: "Oatmeal Bowl", price: "$4.75", description: "Steel-cut oats with brown sugar and cinnamon", icon: "🥣" },
      { name: "Bagel & Cream Cheese", price: "$4.25", description: "Fresh bagel with our signature cream cheese", icon: "🥯" },
      { name: "Acai Bowl", price: "$8.50", description: "Acai blend topped with fresh fruits and granola", icon: "🍌" }
    ]
  };

  const categories = [
    { id: 'coffee', name: 'Coffee & Beverages', icon: '☕' },
    { id: 'pastries', name: 'Fresh Pastries', icon: '🥐' },
    { id: 'breakfast', name: 'Breakfast Items', icon: '🍳' }
  ];

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
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-16"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-4">
          Our <span className="text-orange-700">Delicious</span> Menu
        </h1>
        <p className="text-lg text-amber-800 max-w-2xl mx-auto px-6">
          Discover our carefully crafted selection of premium coffees and freshly baked treats
        </p>
      </motion.div>

      {/* Category Navigation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 mb-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all shadow-lg ${
                activeCategory === category.id
                  ? 'bg-amber-700 text-white shadow-xl'
                  : 'bg-white text-amber-700 hover:bg-amber-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Menu Items Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-24 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 relative overflow-hidden"
            >
              {/* Cute decorative corner */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-bl from-yellow-200 to-orange-200 rounded-full opacity-30"></div>
              
              {/* Item icon with animation */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="text-4xl mb-4 relative z-10"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-amber-900 mb-2 relative z-10">
                {item.name}
              </h3>
              
              <p className="text-amber-700 mb-4 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between relative z-10">
                <span className="text-2xl font-bold text-orange-700">
                  {item.price}
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-medium text-sm hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
                >
                  Add to Cart
                </motion.button>
              </div>

              {/* Floating sparkle animation */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.8
                }}
                className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating decorative elements specific to menu */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-8 z-0"
      >
        {/* Large decorative coffee bean */}
        <div className="w-16 h-24 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative shadow-lg opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-16 bg-amber-700 rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 10, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-12 z-0"
      >
        {/* Large decorative croissant */}
        <div className="w-24 h-18 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full relative shadow-lg opacity-15">
          <div className="absolute inset-3 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-full opacity-80"></div>
        </div>
      </motion.div>

      {/* Special offer banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white"
        >
          <div className="text-center">
            <div className="text-sm font-bold">🎉 Daily Special!</div>
            <div className="text-xs">Buy 2 pastries, get coffee 50% off</div>
          </div>
        </motion.div>
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

export default MenuPage;