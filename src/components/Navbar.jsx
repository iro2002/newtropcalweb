import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../images/hero.jpg";

const BACKGROUND_IMAGE = heroImage; 

const Hero = () => {
  // 1. Add state to track when the image finishes downloading
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="w-full h-full bg-[#1a1a1a]" // Added a slightly lighter dark fallback color
        >
          {/* 2. Changed to motion.img to animate the opacity on load */}
          <motion.img
            src={BACKGROUND_IMAGE}
            alt="Tropical Wedlock Background"
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }} // Remains 0 until downloaded
            transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth 1.5s fade
            onLoad={() => setIsLoaded(true)} // 3. Trigger state change when ready
          />
          
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* --- CENTER CONTENT --- */}
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
          Photography
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