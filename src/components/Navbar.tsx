import React from "react";
import { motion } from "framer-motion";
import heroImage from "../images/hero.jpg";

const BACKGROUND_IMAGE = heroImage; 

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }} // Reduced zoom amount to keep more of the image visible
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="w-full h-full"
        >
          <img
            src={BACKGROUND_IMAGE}
            alt="Tropical Wedlock Background"
            // CHANGE 1: 'object-cover' fills the screen. 
            // If you want to see the WHOLE image with black bars, change to 'object-contain'
            // CHANGE 2: Removed 'opacity-80' so it is fully bright
            className="w-full h-full object-cover object-center opacity-100"
          />
          
          {/* CHANGE 3: Made overlay much lighter (black/10 instead of black/30) 
              so the image looks "fuller" and clearer */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* --- CENTER CONTENT --- */}
      {/* Added a slight text shadow so text is readable even on a bright 'full' image */}
      <div className="relative z-10 text-center px-6 drop-shadow-lg">
        
        {/* 'Tropical' */}
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-9xl font-light italic tracking-tight text-white mix-blend-overlay"
        >
          Tropical
        </motion.h1>

        {/* 'Wedlock' */}
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0em", filter: "blur(10px)" }}
          animate={{ opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)" }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          className="font-sans text-xl md:text-3xl lg:text-4xl font-light uppercase mt-2 md:mt-4 text-white"
        >
          Wedlock
        </motion.h2>

        {/* Separator Line */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
          className="w-24 h-[1px] bg-white mx-auto my-8"
        />

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white"
        >
          Fine Art Photography
        </motion.p>

      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-[10px] tracking-widest uppercase mb-2">Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white to-white/0"
        />
      </motion.div>

    </div>
  );
};

export default Hero;