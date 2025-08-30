'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Abril_Fatface, Bodoni_Moda, Old_Standard_TT } from 'next/font/google';
import Image from 'next/image';

// Load Google Fonts
const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril',
});

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bodoni',
});

const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oldstandard',
});

// Define image type
interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
  year: string;
}

// Gallery images from Unsplash - vintage coffee shop and bakery images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Vintage coffee art on wooden table",
    category: "coffee",
    year: "1950s inspired",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Nostalgic bakery display with pastries",
    category: "bakery",
    year: "1940s inspired",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Vintage coffee shop interior",
    category: "interior",
    year: "1930s inspired",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Classic baked goods on display",
    category: "bakery",
    year: "1960s inspired",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Retro coffee brewing methods",
    category: "coffee",
    year: "1920s inspired",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Vintage teacups and coffee service",
    category: "service",
    year: "1940s inspired",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Classic breakfast spread with pastries",
    category: "food",
    year: "1950s inspired",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Artisanal bread making process",
    category: "bakery",
    year: "1930s inspired",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Vintage coffee grinder and beans",
    category: "coffee",
    year: "1920s inspired",
  },
];

// Filter categories
const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'bakery', name: 'Bakery' },
  { id: 'interior', name: 'Interior' },
  { id: 'food', name: 'Food' },
  { id: 'service', name: 'Service' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images based on category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};  // Open modal with selected image
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={`${abrilFatface.variable} ${bodoniModa.variable} ${oldStandard.variable}`} 
      style={{
        background: "linear-gradient(to bottom, #f0ebe1, #e8e0d1)",
        padding: "5rem 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-8" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L10 6.172L10 7.172L0 7.172L0 6.172ZM40 6.172L30 6.172L30 7.172L40 7.172L40 6.172ZM20 0L23.09 3.672L27.64 1.836L26.82 6.582L31.18 9.164L26.45 11.09L27.91 15.67L23.09 14.328L20 18L16.91 14.328L12.09 15.67L13.55 11.09L8.82 9.164L13.18 6.582L12.36 1.836L16.91 3.672L20 0Z' fill='rgba(130, 92, 75, 0.15)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-x",
        }}
      ></div>
      
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <span className="absolute -top-3 -left-6 transform -rotate-12 opacity-70"
              style={{
                fontFamily: "var(--font-abril)",
                fontSize: "1rem",
                color: "#825c4b",
              }}
            >
              est. 1925
            </span>
            <h2 className={`${abrilFatface.className} text-4xl md:text-5xl text-[#5d4037] mb-4 relative`}
              style={{ letterSpacing: "0.05em" }}
            >
              Memory Lane
              <span className="absolute -bottom-3 left-0 right-0 h-1 bg-[#825c4b] opacity-40"></span>
            </h2>
          </div>
          
          <p className={`${oldStandard.className} text-xl text-[#6d4c41] max-w-2xl mx-auto italic mt-6`}>
            A glimpse into our heritage and craftsmanship through the years
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`${bodoniModa.className} px-4 py-2 text-sm transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'border-b-2 border-[#825c4b] text-[#5d4037] font-medium'
                  : 'text-[#8d6e63] hover:text-[#5d4037]'
              }`}
              style={{
                background: selectedCategory === category.id ? 'rgba(130, 92, 75, 0.08)' : 'transparent',
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredImages.map((image) => (
            <motion.div 
              key={image.id}
              className="group cursor-pointer relative overflow-hidden"
              variants={itemVariants}
              onClick={() => openModal(image)}
              whileHover={{ scale: 1.02 }}
              style={{ 
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              {/* Vintage photo frame effect */}
              <div className="absolute inset-0 border-[12px] border-[#e8dcc8] z-10 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2)' }}
              ></div>
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8dcc8]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 sepia-[0.2]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Vintage film grain overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>
                
                {/* Vintage date tag */}
                <div className="absolute bottom-3 right-3 bg-[#d7c7a9] px-2 py-0.5 rounded text-xs text-[#5d4037] opacity-80 z-10 transform rotate-2"
                  style={{ fontFamily: 'var(--font-oldstandard)' }}
                >
                  {image.year}
                </div>
              </div>
              
              {/* Image hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5d4037]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-[5]">
                <h3 className={`${bodoniModa.className} text-white text-lg font-medium`}>
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Vintage camera illustration */}
        <div className="flex justify-center mt-16">
          <div className="relative w-20 h-20 opacity-40">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#825c4b">
              <path d="M324.3,64H377c6.6,0,12,5.4,12,12v24c0,6.6-5.4,12-12,12h-52.7c-6.6,0-12-5.4-12-12V76C312.3,69.4,317.7,64,324.3,64z"/>
              <rect x="312.3" y="76" width="76.7" height="24" fill="#f8f4e9"/>
              <path d="M451.7,128H60.3C27,128,0,155,0,188.3v198.3C0,420,27,447,60.3,447h391.3c33.3,0,60.3-27,60.3-60.3V188.3 C512,155,485,128,451.7,128z M256,408c-77.3,0-140-62.7-140-140s62.7-140,140-140s140,62.7,140,140S333.3,408,256,408z"/>
              <path d="M352,249.3c-5.9-33.7-34.5-59.3-69-59.3h-54c-34.5,0-63.1,25.6-69,59.3C142.1,265,136,288,136,312c0,66.3,53.7,120,120,120 s120-53.7,120-120C376,288,369.9,265,352,249.3z M256,392c-44.2,0-80-35.8-80-80c0-44.2,35.8-80,80-80c44.2,0,80,35.8,80,80 C336,356.2,300.2,392,256,392z"/>
              <circle cx="256" cy="312" r="80" fill="#f8f4e9"/>
              <circle cx="256" cy="312" r="56" fill="#825c4b"/>
              <circle cx="256" cy="312" r="32" fill="#f8f4e9"/>
              <circle cx="430" cy="166" r="10"/>
            </svg>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <svg className="h-6 w-6 mx-auto mb-4 opacity-40" fill="#825c4b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
          </svg>
          <blockquote className={`${oldStandard.className} text-xl md:text-2xl text-[#5d4037] italic mb-6`}>
            &ldquo;Every photograph tells a story of our journey through time, preserving the craftsmanship and passion that has defined us for generations.&rdquo;
          </blockquote>
          <p className={`${bodoniModa.className} text-sm text-[#825c4b]`}>— Eleanor Wright, Founder, 1925</p>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-8" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L10 6.172L10 7.172L0 7.172L0 6.172ZM40 6.172L30 6.172L30 7.172L40 7.172L40 6.172ZM20 0L23.09 3.672L27.64 1.836L26.82 6.582L31.18 9.164L26.45 11.09L27.91 15.67L23.09 14.328L20 18L16.91 14.328L12.09 15.67L13.55 11.09L8.82 9.164L13.18 6.582L12.36 1.836L16.91 3.672L20 0Z' fill='rgba(130, 92, 75, 0.15)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat-x",
          transform: "rotate(180deg)",
        }}
      ></div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#e8dcc8] p-4"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              boxShadow: '0 0 40px rgba(0,0,0,0.3)',
              borderRadius: '4px',
            }}
          >
            {/* Close button */}
            <button 
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-[#5d4037] z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="border-[12px] border-[#d7c7a9]" style={{ boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2)' }}>
              <div className="relative aspect-video bg-[#e8dcc8]">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain sepia-[0.2]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="mt-4 px-2">
              <h3 className={`${bodoniModa.className} text-xl font-medium text-[#5d4037]`}>{selectedImage.alt}</h3>
              <p className={`${oldStandard.className} text-sm mt-2 text-[#825c4b]`}>{selectedImage.year}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;