import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// --- WEDDING GALLERY DATA ---
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop', title: 'The Vow', location: 'Kandy' },
  { id: 2, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', title: 'Golden Hour', location: 'Bentota' },
  { id: 3, src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop', title: 'First Dance', location: 'Colombo' },
  { id: 4, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop', title: 'Pure Joy', location: 'Galle' },
  { id: 5, src: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop', title: 'Intimate Moments', location: 'Ella' },
  { id: 6, src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop', title: 'Tradition', location: 'Jaffna' },
  { id: 7, src: 'https://images.unsplash.com/photo-1623167123985-3b10c6603a10?q=80&w=800&auto=format&fit=crop', title: 'Veil Shot', location: 'Negombo' },
  { id: 8, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop', title: 'Just Married', location: 'Mirissa' },
  { id: 9, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop', title: 'The Kiss', location: 'Nuwara Eliya' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-emerald-600">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 text-neutral-900">
              Wedding <span className="italic font-light text-emerald-800">Gallery</span>
            </h2>
            <div className="w-16 h-[1px] bg-emerald-500/30 mx-auto mt-8" />
          </motion.div>
        </div>

        {/* --- MASONRY GRID --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(img)}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out filter grayscale group-hover:grayscale-0"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <ZoomIn className="text-white w-8 h-8 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100" />
                <h3 className="text-xl font-serif text-white italic opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  {img.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-emerald-200 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {img.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- LIGHTBOX (FULL SCREEN VIEW) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)} // Close on background click
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 rounded-full border border-emerald-100 hover:bg-emerald-50 text-emerald-800 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl max-h-full w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto object-contain shadow-2xl shadow-emerald-900/10 rounded-sm"
              />
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif text-neutral-900 italic">
                  {selectedImage.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 mt-2 font-bold">
                  {selectedImage.location}
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;