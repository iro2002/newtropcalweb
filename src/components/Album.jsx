import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowDown, ChevronDown, Calendar } from "lucide-react";

// ------------------------------------------------------------------
// --- IMAGES IMPORT SECTION ---
// ------------------------------------------------------------------

// --- ALBUM 1 ---
import a1_cover from "../images/album1/1.jpg";
import a1_1 from "../images/album1/1.jpg";
import a1_2 from "../images/album1/2.jpg";
import a1_3 from "../images/album1/3.jpg";
import a1_4 from "../images/album1/4.jpg";
import a1_5 from "../images/album1/5.jpg";
import a1_6 from "../images/album1/6.jpg";
import a1_7 from "../images/album1/7.jpg";
import a1_8 from "../images/album1/8.jpg";
import a1_9 from "../images/album1/9.jpg";
import a1_10 from "../images/album1/10.jpg";
import a1_11 from "../images/album1/11.jpg"; 
import a1_12 from "../images/album1/12.jpg";
import a1_13 from "../images/album1/13.jpg";
import a1_14 from "../images/album1/14.jpg";
import a1_15 from "../images/album1/15.jpg"; 

// --- ALBUM 2 ---
import a2_cover from "../images/album2/1.jpg";
import a2_1 from "../images/album2/1.jpg";
import a2_2 from "../images/album2/2.jpg";
import a2_3 from "../images/album2/3.jpg";
import a2_4 from "../images/album2/4.jpg";
import a2_5 from "../images/album2/5.jpg";
import a2_6 from "../images/album2/6.jpg";
import a2_7 from "../images/album2/7.jpg"; 
import a2_8 from "../images/album2/8.jpg";
import a2_9 from "../images/album2/9.jpg";
import a2_10 from "../images/album2/10.jpg";

// --- ALBUM 3 ---
import a3_cover from "../images/album3/1.jpg";
import a3_1 from "../images/album3/1.jpg";
import a3_3 from "../images/album3/3.jpg";
import a3_4 from "../images/album3/4.jpg";
import a3_5 from "../images/album3/5.jpg";
import a3_6 from "../images/album3/6.jpg"; 
import a3_7 from "../images/album3/7.jpg";
import a3_8 from "../images/album3/8.jpg";
import a3_9 from "../images/album3/9.jpg";
import a3_10 from "../images/album3/10.jpg";
import a3_11 from "../images/album3/11.jpg";
import a3_12 from "../images/album3/12.jpg";
import a3_13 from "../images/album3/13.jpg";
import a3_14 from "../images/album3/14.jpg";
import a3_15 from "../images/album3/15.jpg";

// --- ALBUM 4 ---
import a4_cover from "../images/album4/1.jpg";
import a4_1 from "../images/album4/1.jpg";
import a4_2 from "../images/album4/2.jpg";
import a4_3 from "../images/album4/3.jpg";
import a4_4 from "../images/album4/4.jpg";
import a4_5 from "../images/album4/5.jpg";
import a4_6 from "../images/album4/6.jpg";
import a4_7 from "../images/album4/7.jpg";
import a4_8 from "../images/album4/8.jpg";
import a4_9 from "../images/album4/9.jpg"; 
import a4_10 from "../images/album4/10.jpg";
import a4_11 from "../images/album4/11.jpg";
import a4_12 from "../images/album4/12.jpg";

// --- ALBUM 5 ---
import a5_cover from "../images/album5/1.jpg";
import a5_1 from "../images/album5/1.jpg";
import a5_2 from "../images/album5/2.jpg";
import a5_3 from "../images/album5/3.jpg";
import a5_4 from "../images/album5/4.jpg";
import a5_5 from "../images/album5/5.jpg";
import a5_6 from "../images/album5/6.jpg";
import a5_7 from "../images/album5/7.jpg";
import a5_8 from "../images/album5/8.jpg";
import a5_9 from "../images/album5/9.jpg";
import a5_10 from "../images/album5/10.jpg";
import a5_11 from "../images/album5/11.jpg";
import a5_12 from "../images/album5/12.jpg";
import a5_13 from "../images/album5/13.jpg";
import a5_14 from "../images/album5/14.jpg";

// --- ALBUM 6 ---
import a6_cover from "../images/album6/1.jpg";
import a6_1 from "../images/album6/1.jpg";
import a6_2 from "../images/album6/2.jpg";
import a6_3 from "../images/album6/3.jpg";
import a6_4 from "../images/album6/4.jpg";
import a6_5 from "../images/album6/5.jpg";
import a6_6 from "../images/album6/6.jpg";
import a6_7 from "../images/album6/7.jpg";
import a6_8 from "../images/album6/8.jpg";
import a6_9 from "../images/album6/9.jpg";
import a6_10 from "../images/album6/10.jpg";
import a6_11 from "../images/album6/11.jpg";
import a6_12 from "../images/album6/12.jpg";
import a6_13 from "../images/album6/13.jpg";
import a6_14 from "../images/album6/14.jpg";
import a6_15 from "../images/album6/15.jpg";

// --- ALBUM 7 ---
import a7_cover from "../images/album7/1.jpg";
import a7_1 from "../images/album7/1.jpg";
import a7_2 from "../images/album7/2.jpg";
import a7_3 from "../images/album7/3.jpg";
import a7_4 from "../images/album7/4.jpg";
import a7_5 from "../images/album7/5.jpg";
import a7_6 from "../images/album7/6.jpg";
import a7_7 from "../images/album7/7.jpg";
import a7_8 from "../images/album7/8.jpg";
import a7_9 from "../images/album7/9.jpg";
import a7_10 from "../images/album7/10.jpg";
import a7_11 from "../images/album7/11.jpg";
import a7_12 from "../images/album7/12.jpg";
import a7_13 from "../images/album7/13.jpg";
import a7_14 from "../images/album7/14.jpg";
import a7_15 from "../images/album7/15.jpg";

// --- ALBUM 8 ---
import a8_cover from "../images/album8/1.jpg";
import a8_1 from "../images/album8/1.jpg";
import a8_2 from "../images/album8/2.jpg";
import a8_3 from "../images/album8/3.jpg";
import a8_4 from "../images/album8/4.jpg";
import a8_5 from "../images/album8/5.jpg";
import a8_6 from "../images/album8/6.jpg";
import a8_7 from "../images/album8/7.jpg";
import a8_8 from "../images/album8/8.jpg";
import a8_9 from "../images/album8/9.jpg";
import a8_10 from "../images/album8/10.jpg";
import a8_11 from "../images/album8/11.jpg";
import a8_12 from "../images/album8/12.jpg";
import a8_13 from "../images/album8/13.jpg";
import a8_14 from "../images/album8/14.jpg";
import a8_15 from "../images/album8/15.jpg";

// --- ALBUM 9 ---
import a9_cover from "../images/album9/1.jpg";
import a9_1 from "../images/album9/1.jpg";
import a9_2 from "../images/album9/2.jpg";
import a9_3 from "../images/album9/3.jpg";
import a9_4 from "../images/album9/4.jpg";
import a9_5 from "../images/album9/5.jpg";
import a9_6 from "../images/album9/6.jpg";
import a9_7 from "../images/album9/7.jpg";
import a9_8 from "../images/album9/8.jpg";
import a9_9 from "../images/album9/9.jpg";
import a9_10 from "../images/album9/10.jpg";
import a9_11 from "../images/album9/11.jpg";
import a9_12 from "../images/album9/12.jpg";
import a9_13 from "../images/album9/13.jpg";
import a9_14 from "../images/album9/14.jpg";
import a9_15 from "../images/album9/15.jpg";


// ------------------------------------------------------------------
// --- DATA CONFIGURATION ---
// ------------------------------------------------------------------

const albums = [
  {
    id: 1,
    couple: "NETHMI & HASARANGA",
    description: "Amidst the mist-laden hills and colonial whispers.",
    cover: a1_cover,
    images: [a1_1, a1_2, a1_3, a1_4, a1_5, a1_6, a1_7, a1_8, a1_9, a1_10, a1_11, a1_12, a1_13, a1_14, a1_15]
  },
  {
    id: 2,
    couple: "DUSHANI & AYATHRU",
    description: "Where ancient ramparts meet the endless azure sea.",
    cover: a2_cover,
    images: [a2_1, a2_2, a2_3, a2_4, a2_5, a2_6, a2_7, a2_8, a2_9, a2_10]
  },
  {
    id: 3,
    couple: "MADUSHI & KAVINDA",
    description: "An urban symphony of love in the city lights.",
    cover: a3_cover,
    images: [a3_1, a3_3, a3_4, a3_5, a3_6, a3_7, a3_8, a3_9, a3_10, a3_11, a3_12, a3_13, a3_14, a3_15]
  },
  {
    id: 4,
    couple: "OSHI & NALAKA",
    description: "Lost in the emerald embrace of the rainforest.",
    cover: a4_cover,
    images: [a4_1, a4_2, a4_3, a4_4, a4_5, a4_6, a4_7, a4_8, a4_9, a4_10, a4_11, a4_12]
  },
  {
    id: 5,
    couple: "SEWMINI & ANJANA",
    description: "Golden sands and sunset horizons.",
    cover: a5_cover, 
    images: [a5_1, a5_2, a5_3, a5_4, a5_5, a5_6, a5_7, a5_8, a5_9, a5_10, a5_11, a5_12, a5_13, a5_14]
  },
  {
    id: 6,
    couple: "SAHEENA & SHANAKA",
    description: "Sacred vows exchanged in the heart of the hill capital.",
    cover: a6_cover,
    images: [a6_1, a6_2, a6_3, a6_4, a6_5, a6_6, a6_7, a6_8, a6_9, a6_10, a6_11, a6_12, a6_13, a6_14, a6_15]
  },
  {
    id: 7,
    couple: "KAWEE & YOHAN",
    description: "Love amongst the tea plantations and nine arches.",
    cover: a7_cover,
    images: [a7_1, a7_2, a7_3, a7_4, a7_5, a7_6, a7_7, a7_8, a7_9, a7_10, a7_11, a7_12, a7_13, a7_14, a7_15]
  },
  {
    id: 8,
    couple: "CHALANI & KAVEEN",
    description: "Vibrant colors and palmyrah breeze.",
    cover: a8_cover,
    images: [a8_1, a8_2, a8_3, a8_4, a8_5, a8_6, a8_7, a8_8, a8_9, a8_10, a8_11, a8_12, a8_13, a8_14, a8_15]
  },
  {
    id: 9,
    couple: "KAWYA & ASHAN",
    description: "River safaris and twilight boat rides.",
    cover: a9_cover,
    images: [a9_1, a9_2, a9_3, a9_4, a9_5, a9_6, a9_7, a9_8, a9_9, a9_10, a9_11, a9_12, a9_13, a9_14, a9_15]
  }
];

// ------------------------------------------------------------------
// --- SMOOTH IMAGE LOADER COMPONENT ---
// ------------------------------------------------------------------
const SmoothImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy" // Native lazy loading to save bandwidth
      initial={{ opacity: 0, filter: "blur(10px)" }} 
      animate={{ 
        opacity: isLoaded ? 1 : 0,
        filter: isLoaded ? "blur(0px)" : "blur(10px)"
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onLoad={() => setIsLoaded(true)}
      className={className}
    />
  );
};

// ------------------------------------------------------------------
// --- MAIN COMPONENT ---
// ------------------------------------------------------------------

const Album = () => {
  const targetRef = useRef(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.05], [0, -50]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, albums.length));
  };

  return (
    <>
      <section id="gallery" ref={targetRef} className="hidden md:block relative h-[1200vh] bg-white">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="absolute top-20 left-20 z-10 max-w-[450px]"
          >
            <h2 className="text-7xl font-serif text-neutral-900 leading-[0.9]">
             Selected <br />
              <span className="italic font-light text-emerald-700">Love Stories</span>
            </h2>
            <p className="text-neutral-500 text-sm font-light leading-relaxed mt-6 max-w-sm border-l border-emerald-500/30 pl-4">
              A curated collection of intimate moments, raw emotions, and timeless celebrations captured across the paradise island of Sri Lanka.
            </p>
            <div className="flex items-center gap-3 mt-8 text-neutral-400 text-xs uppercase tracking-widest">
              <ArrowRight size={16} className="text-emerald-600 animate-pulse" />
              <span>Scroll to Unfold</span>
            </div>
          </motion.div>

          <motion.div style={{ x }} className="flex gap-12 pl-[35vw] items-center h-full min-w-max">
            {albums.map((album) => (
              <div 
                key={album.id}
                onClick={() => setSelectedAlbum(album)}
                className="relative group cursor-pointer flex-shrink-0"
              >
                <div className="relative h-[600px] w-[450px] overflow-hidden bg-neutral-100 shadow-md group-hover:shadow-2xl transition-all duration-500 rounded-sm">
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-900 rounded-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Open Story
                  </div>
                  <SmoothImage 
                    src={album.cover} 
                    alt={album.couple} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5 flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-serif text-neutral-900 italic group-hover:text-emerald-800 transition-colors">
                      {album.couple}
                    </h3>
                  </div>
                  <span className="text-4xl font-serif text-neutral-100 group-hover:text-neutral-200 transition-colors">
                    0{album.id}
                  </span>
                </div>
              </div>
            ))}

            {/* End Card */}
            <div className="relative flex-shrink-0 w-[450px] h-[600px] group cursor-pointer">
              <div className="absolute inset-0 border border-dashed border-emerald-200 rounded-sm -m-4 group-hover:m-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
              <div className="relative h-full w-full bg-neutral-50 flex flex-col items-center justify-center p-12 text-center overflow-hidden border border-neutral-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">The Next Chapter</span>
                  <h3 className="text-5xl font-serif text-neutral-900 leading-[1.1] mb-8">
                    Your Story <br />
                    <span className="italic font-light text-neutral-400 group-hover:text-emerald-700 transition-colors duration-500">Starts Here</span>
                  </h3>
                  <div className="h-px w-12 bg-neutral-200 group-hover:bg-emerald-400/50 mx-auto mb-8 transition-colors duration-500" />
                  <p className="text-neutral-500 text-sm font-light leading-relaxed mb-12 max-w-[200px]">
                    Let's capture the unscripted moments of your celebration. <span className="block mt-2 font-medium text-emerald-800">Now booking 2026.</span>
                  </p>
                  <button className="relative px-8 py-4 bg-neutral-900 text-white text-[10px] uppercase tracking-widest overflow-hidden transition-all duration-500 hover:bg-emerald-900 hover:px-10">
                    <span className="relative z-10 flex items-center gap-2">Get in Touch <ArrowRight size={14} /></span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-[5vw] flex-shrink-0" />
            
          </motion.div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="md:hidden bg-white py-12 px-6">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-serif text-neutral-900 leading-[0.9]">Selected <br /><span className="italic font-light text-emerald-700">Love Stories</span></h2>
          <p className="text-neutral-500 text-sm font-light leading-relaxed mt-4 max-w-[85%] mx-auto">A curated collection of intimate moments, raw emotions, and timeless celebrations.</p>
        </div>
        <div className="space-y-16">
          <AnimatePresence>
            {albums.slice(0, visibleCount).map((album) => (
              <motion.div 
                key={album.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedAlbum(album)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm mb-4 shadow-lg bg-neutral-100">
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900 rounded-sm">Open</div>
                  <SmoothImage 
                    src={album.cover} 
                    alt={album.couple} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-neutral-900 italic">{album.couple}</h3>
                  <div className="w-12 h-[1px] bg-emerald-500/30 mt-2" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {visibleCount >= albums.length && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative p-8 mt-12 bg-neutral-50 border border-dashed border-emerald-200 text-center rounded-sm overflow-hidden">
               <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl" />
               <div className="relative z-10">
                 <Calendar className="w-8 h-8 mx-auto text-emerald-600 mb-4 opacity-80" strokeWidth={1} />
                 <h3 className="text-4xl font-serif text-neutral-900 italic mb-2">Your Story Next</h3>
                 <p className="text-neutral-500 text-xs font-light mb-6 leading-relaxed">The dates are filling up fast for the upcoming season.</p>
                 <button className="w-full py-4 bg-emerald-800 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-900 transition-colors">Book a Consultation</button>
               </div>
            </motion.div>
          )}
        </div>
        {visibleCount < albums.length && (
          <div className="mt-16 flex justify-center">
            <button onClick={handleLoadMore} className="flex flex-col items-center gap-2 text-neutral-400 hover:text-emerald-700 transition-colors duration-300">
              <span className="text-xs uppercase tracking-[0.2em] font-bold">Load More</span>
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedAlbum && (
          <FullAlbumDetail album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

const FullAlbumDetail = ({ album, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.5, ease: "circOut" }} className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      <button onClick={onClose} className="fixed top-6 right-6 z-[120] p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-neutral-100 text-neutral-900 hover:text-emerald-600 hover:scale-110 transition-all duration-300"><X size={24} strokeWidth={1.5} /></button>
      <div className="flex flex-col-reverse lg:flex-row min-h-screen">
        <div className="w-full lg:w-3/5 p-4 md:p-12 space-y-8 md:space-y-12">
          
          <div className="bg-neutral-50 rounded-sm max-w-3xl mx-auto">
            <SmoothImage src={album.cover} alt="Cover" className="w-full h-auto object-cover rounded-sm shadow-sm" />
          </div>

          {album.images.map((img, idx) => (
            <div key={idx} className="bg-neutral-50 rounded-sm max-w-3xl mx-auto">
               <SmoothImage src={img} alt={`Detail ${idx}`} className="w-full h-auto object-cover rounded-sm shadow-sm" />
            </div>
          ))}
          
          <div className="pt-12 md:pt-20 text-center pb-12"><button onClick={onClose} className="text-emerald-600 underline underline-offset-4 hover:text-emerald-800">Back to Gallery</button></div>
        </div>
        <div className="w-full lg:w-2/5 lg:sticky lg:top-0 lg:h-screen p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-neutral-50/50 border-l border-neutral-100">
          <h2 className="text-4xl md:text-7xl font-serif text-neutral-900 leading-[1.1] mb-6 md:mb-8">{album.couple}</h2>
          <p className="text-neutral-500 font-light leading-relaxed max-w-sm mb-8 md:mb-12 text-sm md:text-base">{album.description}</p>
          <div className="flex items-center gap-3 text-neutral-400 animate-bounce"><ArrowDown size={18} strokeWidth={1} /><span className="text-[9px] uppercase tracking-widest">Scroll to view</span></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Album;