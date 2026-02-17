import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, MessageCircle, Plus, X } from "lucide-react";

const socials = [
  { 
    icon: MessageCircle, 
    url: "https://wa.me/94722006206", // Added your specific number
    label: "WhatsApp", 
    color: "text-emerald-600" 
  },
  { 
    icon: Instagram, 
    url: "https://www.instagram.com/tropicalwedlock_lk?igsh=MXRoeTExMnRqYjk5bA==", 
    label: "Instagram", 
    color: "text-pink-500" 
  },
  { 
    icon: Facebook, 
    url: "https://www.facebook.com/TropicalWedlock", 
    label: "Facebook", 
    color: "text-blue-600" 
  },
];

const LiquidMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      
      {/* Social Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-2 items-end"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {socials.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Label (Tooltip) */}
                <span className="bg-white text-slate-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </span>

                {/* Icon Circle */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 hover:scale-110 transition-transform duration-300">
                  <social.icon className={`w-5 h-5 ${social.color}`} strokeWidth={1.5} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-colors duration-300 ${
            isOpen ? "bg-slate-900 text-white" : "bg-emerald-800 text-white hover:bg-emerald-900"
        }`}
        whileTap={{ scale: 0.9 }}
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
              <X size={24} />
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