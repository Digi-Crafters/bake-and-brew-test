'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cinzel, IM_Fell_English, Spectral } from 'next/font/google';

// Import Google Fonts
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
});

const imFellEnglish = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-im-fell',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-spectral',
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hoverField, setHoverField] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section 
      className={`${cinzel.variable} ${imFellEnglish.variable} ${spectral.variable} relative py-24 overflow-hidden`}
      style={{
        background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23433b30' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: '#F8F4ED',
        borderTop: '1px solid #D9D0C1',
        borderBottom: '1px solid #D9D0C1'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 w-full h-8" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23433b30' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        backgroundSize: "88px 12px",
        backgroundRepeat: "repeat-x",
        opacity: 0.5,
      }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
          {/* Left Column - Contact Information */}
          <motion.div 
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            {/* Section Title */}
            <div className="relative mb-12">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-[1px] bg-amber-900/40 absolute top-full mt-4"
              ></motion.div>
              
              <motion.span 
                className={`${imFellEnglish.className} text-amber-800 italic block mb-1`}
                variants={fadeIn}
              >
                Reach Out
              </motion.span>
              
              <h2 className={`${cinzel.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-800 mb-2`}>
                Correspondence
              </h2>
              
              <p className={`${spectral.className} text-stone-600 mt-6 text-lg leading-relaxed`}>
                We value the art of conversation and meaningful connections. 
                Should you wish to reach us, here are the ways of proper contact.
              </p>
            </div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Location */}
              <motion.div 
                className="flex items-start space-x-6" 
                variants={scaleIn}
              >
                <div className="bg-amber-50 p-3 rounded-full border border-amber-100 shadow-inner">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className={`${cinzel.className} text-xl font-medium text-stone-700 mb-1`}>Our Establishment</h3>
                  <p className={`${spectral.className} text-stone-600`}>42 Artisan Avenue, Old Town District</p>
                  <p className={`${spectral.className} text-stone-600`}>Craftshire, CS 12345</p>
                </div>
              </motion.div>
              
              {/* Hours */}
              <motion.div 
                className="flex items-start space-x-6" 
                variants={scaleIn}
              >
                <div className="bg-amber-50 p-3 rounded-full border border-amber-100 shadow-inner">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className={`${cinzel.className} text-xl font-medium text-stone-700 mb-1`}>Hours of Service</h3>
                  <p className={`${spectral.className} text-stone-600`}>Monday to Friday: 7am - 6pm</p>
                  <p className={`${spectral.className} text-stone-600`}>Weekends & Holidays: 8am - 4pm</p>
                </div>
              </motion.div>
              
              {/* Telephone */}
              <motion.div 
                className="flex items-start space-x-6" 
                variants={scaleIn}
              >
                <div className="bg-amber-50 p-3 rounded-full border border-amber-100 shadow-inner">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className={`${cinzel.className} text-xl font-medium text-stone-700 mb-1`}>Telephone</h3>
                  <p className={`${spectral.className} text-stone-600`}>(555) 123-4567</p>
                  <p className={`${spectral.className} text-stone-600 italic text-sm`}>For reservations & inquiries</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 opacity-20">
                <svg viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.5 73C56.6584 73 73 56.6584 73 36.5C73 16.3416 56.6584 0 36.5 0C16.3416 0 0 16.3416 0 36.5C0 56.6584 16.3416 73 36.5 73Z" fill="#8B6E4D" fillOpacity="0.6"/>
                </svg>
              </div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 opacity-10">
                <svg viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.5 73C56.6584 73 73 56.6584 73 36.5C73 16.3416 56.6584 0 36.5 0C16.3416 0 0 16.3416 0 36.5C0 56.6584 16.3416 73 36.5 73Z" fill="#8B6E4D" fillOpacity="0.8"/>
                </svg>
              </div>
              
              {/* Form container */}
              <div className="bg-white border border-stone-200 p-8 lg:p-10 rounded shadow-lg relative">
                <h3 className={`${cinzel.className} text-2xl md:text-3xl font-semibold text-stone-800 mb-6`}>
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <motion.div 
                    className="space-y-6" 
                    variants={staggerContainer}
                  >
                    {/* Name Field */}
                    <motion.div variants={fadeIn} className="relative">
                      <label 
                        htmlFor="name" 
                        className={`${spectral.className} text-stone-600 mb-1 block`}
                      >
                        Full Name
                      </label>
                      <input 
                        id="name" 
                        type="text" 
                        className={`w-full px-4 py-3 bg-stone-50 border ${hoverField === 'name' ? 'border-amber-500' : 'border-stone-200'} rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all duration-300 ${spectral.className}`}
                        onMouseEnter={() => setHoverField('name')}
                        onMouseLeave={() => setHoverField(null)}
                        placeholder="Your distinguished name"
                        required
                      />
                    </motion.div>
                    
                    {/* Email Field */}
                    <motion.div variants={fadeIn} className="relative">
                      <label 
                        htmlFor="email" 
                        className={`${spectral.className} text-stone-600 mb-1 block`}
                      >
                        Electronic Mail
                      </label>
                      <input 
                        id="email" 
                        type="email" 
                        className={`w-full px-4 py-3 bg-stone-50 border ${hoverField === 'email' ? 'border-amber-500' : 'border-stone-200'} rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all duration-300 ${spectral.className}`}
                        onMouseEnter={() => setHoverField('email')}
                        onMouseLeave={() => setHoverField(null)}
                        placeholder="Your correspondence address"
                        required
                      />
                    </motion.div>
                    
                    {/* Message Field */}
                    <motion.div variants={fadeIn} className="relative">
                      <label 
                        htmlFor="message" 
                        className={`${spectral.className} text-stone-600 mb-1 block`}
                      >
                        Your Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className={`w-full px-4 py-3 bg-stone-50 border ${hoverField === 'message' ? 'border-amber-500' : 'border-stone-200'} rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all duration-300 ${spectral.className}`}
                        onMouseEnter={() => setHoverField('message')}
                        onMouseLeave={() => setHoverField(null)}
                        placeholder="Share your thoughts in an eloquent manner..."
                        required
                      ></textarea>
                    </motion.div>
                    
                    {/* Submit Button */}
                    <motion.div variants={fadeIn}>
                      <button 
                        type="submit" 
                        className="group relative inline-flex bg-amber-800 text-white border border-amber-900 px-8 py-3 overflow-hidden transition-all duration-300 hover:bg-amber-700"
                        style={{
                          boxShadow: '3px 3px 0px rgba(0,0,0,0.1)',
                        }}
                      >
                        <span className={`${cinzel.className} relative z-10`}>Contact Us</span>
                        <span className="absolute bottom-0 left-0 w-0 h-full bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      
                      {formSubmitted && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`${spectral.className} text-amber-600 mt-3 italic`}
                        >
                          Not implemented at this moment.
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>
                </form>
                
                {/* Decorative wax seal */}
                <div className="absolute -bottom-8 -right-8 w-16 h-16 flex items-center justify-center">
                  <div className="bg-red-700 rounded-full w-16 h-16 flex items-center justify-center transform rotate-12" style={{ boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
                    <span className={`${imFellEnglish.className} text-white text-xs tracking-wide`}>B&B</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom pattern */}
              <div className="absolute h-16 w-full bottom-[-64px] left-0 right-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M0,12 L24,12 M12,0 L12,24" stroke="#8B6E4D" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 w-full h-8" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23433b30' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        backgroundSize: "88px 12px",
        backgroundRepeat: "repeat-x",
        opacity: 0.5,
        transform: "rotate(180deg)"
      }}></div>
    </section>
  );
};

export default Contact;