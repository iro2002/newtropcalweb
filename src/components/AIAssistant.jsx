import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  MessageCircle, // Used for WhatsApp
  Plus,
  X,
  Share2
} from "lucide-react";

const socials = [
  { 
    icon: MessageCircle, 
    url: "#", 
    label: "WhatsApp", 
    color: "group-hover:text-emerald-600" 
  },
  { 
    icon: Instagram, 
    url: "#", 
    label: "Instagram", 
    color: "group-hover:text-pink-700" 
  },
  { 
    icon: Facebook, 
    url: "#", 
    label: "Facebook", 
    color: "group-hover:text-blue-700" 
  },
  { 
    icon: Youtube, 
    url: "#", 
    label: "YouTube", 
    color: "group-hover:text-red-600" 
  },
];

const LiquidMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      
      {/* --- Social Items List --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="flex flex-col gap-3 mb-2 items-end"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {socials.map((social, index) => (
              <div key={social.label} className="relative flex items-center gap-3">
                
                {/* Tooltip Label (Slides in) */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white text-neutral-800 px-3 py-1 rounded-sm shadow-sm text-xs font-serif uppercase tracking-widest pointer-events-none"
                >
                  {social.label}
                </motion.span>

                {/* Circular Button */}
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.5 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    group relative flex h-12 w-12 items-center justify-center rounded-full 
                    bg-white shadow-xl shadow-neutral-200 border border-neutral-100
                    transition-colors duration-300 text-neutral-600
                  `}
                >
                  <social.icon 
                    size={20} 
                    strokeWidth={1.5} 
                    className={`transition-colors duration-300 ${social.color}`} 
                  />
                </motion.a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Trigger Button --- */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative flex h-16 w-16 items-center justify-center rounded-full 
          bg-neutral-900 text-white shadow-2xl shadow-neutral-900/30
          border border-neutral-800 z-50 overflow-hidden
        `}
      >
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {/* Using Share icon instead of Plus for a more "Connect" feel, or stick to Plus */}
              <Share2 size={24} strokeWidth={1.5} className="ml-[-2px] mt-[2px]" /> 
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default LiquidMenu;