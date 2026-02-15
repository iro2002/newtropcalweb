import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Optional icon for visual balance
import logopng from "../images/logo.png"; 

const HeroGreen = () => {
  // --- ANIMATION VARIANTS ---

  const blurReveal = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  // New variant for the boxes
  const boxVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] bg-[#022c22] text-[#ecfdf5] flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#064e3b] via-[#022c22] to-[#000000]" />

      {/* Floating Abstract Boxes (Decoration) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border border-emerald-500/10 rounded-full z-0 pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-32 h-32 border border-emerald-500/10 z-0 pointer-events-none" 
      />

      {/* Logo Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-overlay opacity-10">
        <img src={logopng} alt="" className="w-full h-full object-cover grayscale invert" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- MAIN LAYOUT --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        
        {/* LEFT SIDE: Typography */}
        <div className="relative pl-4 md:pl-10 border-l border-emerald-500/20">
          <motion.h1 
            variants={blurReveal}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-emerald-50 tracking-tight"
          >
            Tropical <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500 font-light">
              Wedlock
            </span>
          </motion.h1>

          <motion.div 
            variants={blurReveal}
            className="mt-8 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-emerald-500/50" />
            <p className="font-serif italic text-lg text-emerald-200/60">
              "Turning your special day into unforgettable memories."
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The "Boxes" */}
        <motion.div 
          variants={containerStagger}
          className="flex flex-col gap-4 w-full md:max-w-md ml-auto"
        >
          {/* Card 1 */}
          <motion.div 
            variants={boxVariant}
            whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(6, 78, 59, 0.4)" }}
            className="group relative overflow-hidden bg-[#064e3b]/20 backdrop-blur-sm border border-emerald-500/20 p-6 md:p-8 cursor-pointer rounded-sm"
          >
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight size={20} className="text-emerald-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-emerald-100 group-hover:text-white transition-colors">
              Natural Moments
            </h3>
            {/* Decorative bottom line in box */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 group-hover:w-full transition-all duration-500 ease-out" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={boxVariant}
            whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(6, 78, 59, 0.4)" }}
            className="group relative overflow-hidden bg-[#064e3b]/20 backdrop-blur-sm border border-emerald-500/20 p-6 md:p-8 cursor-pointer rounded-sm"
          >
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight size={20} className="text-emerald-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-emerald-100 group-hover:text-white transition-colors">
              Candid Emotions
            </h3>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 group-hover:w-full transition-all duration-500 ease-out" />
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={boxVariant}
            whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(6, 78, 59, 0.4)" }}
            className="group relative overflow-hidden bg-[#064e3b]/20 backdrop-blur-sm border border-emerald-500/20 p-6 md:p-8 cursor-pointer rounded-sm"
          >
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight size={20} className="text-emerald-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-emerald-100 group-hover:text-white transition-colors">
              Elegant Storytelling
            </h3>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 group-hover:w-full transition-all duration-500 ease-out" />
          </motion.div>

        </motion.div>

      </motion.div>

      {/* --- CINEMATIC FRAME BORDER (The "Big Box") --- */}
      <div className="absolute top-6 bottom-6 left-6 right-6 border border-emerald-500/10 pointer-events-none hidden md:block" />

    </section>
  );
};

export default HeroGreen;