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
      id="contact-section"
      className={`${cinzel.variable} ${imFellEnglish.variable} ${spectral.variable} relative py-24 overflow-hidden`}
      style={{
        background: `linear-gradient(to bottom, #f8f4ed, #f1e9dd)`,
        borderTop: '2px solid #d9c8b4',
        borderBottom: '2px solid #d9c8b4'
      }}
    >
      {/* Coffee bean pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="coffee-beans" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M30,50 Q40,30 50,50 T70,50 Q80,30 90,50 T110,50 Q120,30 130,50 T150,50" stroke="#5d4037" strokeWidth="2" fill="none" />
              <path d="M20,70 Q30,50 40,70 T60,70 Q70,50 80,70 T100,70 Q110,50 120,70 T140,70" stroke="#5d4037" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#coffee-beans)" />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 w-full h-8" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%235d4037' fill-opacity='0.15'/%3E%3C/svg%3E\")",
        backgroundSize: "88px 12px",
        backgroundRepeat: "repeat-x",
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
                className="h-[1px] bg-amber-700/60 absolute top-full mt-4"
              ></motion.div>
              
              <motion.span 
                className={`${imFellEnglish.className} text-amber-800 italic block mb-1`}
                variants={fadeIn}
              >
                Reach Out
              </motion.span>
              
              <h2 className={`${cinzel.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-[#5d4037] mb-2`}>
                Correspondence
              </h2>
              
              <p className={`${spectral.className} text-[#6d4c41] mt-6 text-lg leading-relaxed`}>
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
                <div className="bg-amber-100 p-3 rounded-full border border-amber-200 shadow-sm">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className={`${cinzel.className} text-xl font-medium text-[#5d4037] mb-1`}>Our Establishment</h3>
                  <p className={`${spectral.className} text-[#6d4c41]`}>42 Artisan Avenue, Old Town District</p>
                  <p className={`${spectral.className} text-[#6d4c41]`}>Craftshire, CS 12345</p>
                </div>
              </motion.div>
              
              {/* Hours */}
              <motion.div 
                className="flex items-start space-x-6" 
                variants={scaleIn}
              >
                <div className="bg-amber-100 p-3 rounded-full border border-amber-200 shadow-sm">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className={`${cinzel.className} text-xl font-medium text-[#5d4037] mb-1`}>Hours of Service</h3>
                  <p className={`${spectral.className} text-[#6d4c41]`}>Monday to Friday: 7am - 6pm</p>
                  <p className={`${spectral.className} text-[#6d4c41]`}>Weekends & Holidays: 8am - 4pm</p>
                </div>
              </motion.div>
              
              {/* Telephone */}
              <motion.div 
                className="flex items-start space-x-6" 
                variants={scaleIn}
              >
                <div className="bg-amber-100 p-3 rounded-full border border-amber-200 shadow-sm">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className={`${cinzel.className} text-xl font-medium text-[#5d4037] mb-1`}>Telephone</h3>
                  <p className={`${spectral.className} text-[#6d4c41]`}>(555) 123-4567</p>
                  <p className={`${spectral.className} text-[#6d4c41] italic text-sm`}>For reservations & inquiries</p>
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
              
              {/* Form container - Updated with theme colors */}
              <div className="bg-gradient-to-br from-[#f3ebe0] to-[#e8ddd0] border-2 border-amber-200 p-8 lg:p-10 rounded-lg shadow-xl relative overflow-hidden">
                {/* Vintage paper texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDRiZjliIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0iTTAgNjAgNjAgMCBNNjAgNjAgMCAwIiAvPjwvc3ZnPg==')] opacity-20"></div>
                
                {/* Coffee stain decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-900/10 rounded-full blur-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-800/10 rounded-full blur-lg"></div>
                
                <h3 className={`${cinzel.className} text-2xl md:text-3xl font-semibold text-[#5d4037] mb-6 relative z-10`}>
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="relative z-10">
                  <motion.div 
                    className="space-y-6" 
                    variants={staggerContainer}
                  >
                    {/* Name Field */}
                    <motion.div variants={fadeIn} className="relative">
                      <label 
                        htmlFor="name" 
                        className={`${spectral.className} text-[#5d4037] mb-1 block font-medium`}
                      >
                        Full Name
                      </label>
                      <input 
                        id="name" 
                        type="text" 
                        className={`w-full px-4 py-3 bg-amber-50/80 border ${hoverField === 'name' ? 'border-amber-600' : 'border-amber-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${spectral.className} placeholder-amber-800/40`}
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
                        className={`${spectral.className} text-[#5d4037] mb-1 block font-medium`}
                      >
                        Electronic Mail
                      </label>
                      <input 
                        id="email" 
                        type="email" 
                        className={`w-full px-4 py-3 bg-amber-50/80 border ${hoverField === 'email' ? 'border-amber-600' : 'border-amber-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${spectral.className} placeholder-amber-800/40`}
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
                        className={`${spectral.className} text-[#5d4037] mb-1 block font-medium`}
                      >
                        Your Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className={`w-full px-4 py-3 bg-amber-50/80 border ${hoverField === 'message' ? 'border-amber-600' : 'border-amber-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${spectral.className} placeholder-amber-800/40`}
                        onMouseEnter={() => setHoverField('message')}
                        onMouseLeave={() => setHoverField(null)}
                        placeholder="Share your thoughts in an eloquent manner..."
                        required
                      ></textarea>
                    </motion.div>
                    
                    {/* Submit Button */}
                    <motion.div variants={fadeIn} className="pt-4">
                      <button 
                        type="submit" 
                        className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-4 overflow-hidden transition-all duration-300 hover:from-amber-800 hover:to-amber-900 rounded-md shadow-lg hover:shadow-xl"
                      >
                        <span className={`${cinzel.className} relative z-10 text-lg`}>Send Message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -inset-1 bg-amber-400/20 rounded-md blur-sm group-hover:blur-md transition-all duration-300"></div>
                      </button>
                      
                      {formSubmitted && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`${spectral.className} text-amber-700 mt-3 italic`}
                        >
                          Not implemented at this moment.
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>
                </form>
                
                {/* Decorative coffee bean elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-amber-800/30 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-700/40 rounded-full"></div>
                
                {/* Decorative wax seal */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 flex items-center justify-center">
                  <div className="bg-amber-800 rounded-full w-14 h-14 flex items-center justify-center transform rotate-6 shadow-md border-2 border-amber-900/30">
                    <span className={`${imFellEnglish.className} text-amber-100 text-sm tracking-wide`}>B&B</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 w-full h-8" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%235d4037' fill-opacity='0.15'/%3E%3C/svg%3E\")",
        backgroundSize: "88px 12px",
        backgroundRepeat: "repeat-x",
        transform: "rotate(180deg)"
      }}></div>
    </section>
  );
};

export default Contact;