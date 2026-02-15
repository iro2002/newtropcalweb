import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Plus,
  X,
} from "lucide-react";

// Social media data with specific brand colors for text
const socials = [
  { 
    icon: Twitter, 
    url: "#", 
    label: "Twitter", 
    color: "text-sky-500" 
  },
  { 
    icon: Facebook, 
    url: "#", 
    label: "Facebook", 
    color: "text-blue-600" 
  },
  { 
    icon: Youtube, 
    url: "#", 
    label: "YouTube", 
    color: "text-red-500" 
  },
  { 
    icon: Instagram, 
    url: "#", 
    label: "Instagram", 
    color: "text-pink-600" 
  },
];

const LiquidMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-3">
      {/* Social Items List */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-2 mb-1">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                exit={{ opacity: 0, y: 10, scale: 0.8, transition: { duration: 0.15 } }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative flex h-10 w-10 items-center justify-center rounded-full 
                  border border-white/60 bg-white/80 shadow-md backdrop-blur-md
                  ${social.color}
                `}
              >
                {/* Subtle Reflection (Glass effect) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />
                
                <social.icon size={18} strokeWidth={2.5} />
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative flex h-12 w-12 items-center justify-center rounded-full 
          bg-black/80 text-white shadow-lg backdrop-blur-xl border border-white/10
          transition-colors duration-300 hover:bg-black
        `}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default LiquidMenu;