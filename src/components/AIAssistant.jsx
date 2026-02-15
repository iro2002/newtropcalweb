import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, Facebook, MessageCircle, Plus, X } from "lucide-react";

const socials = [
  { icon: MessageCircle, url: "#", label: "WhatsApp", color: "text-emerald-600" },
  { icon: Instagram, url: "#", label: "Instagram", color: "text-pink-500" },
  { icon: Facebook, url: "#", label: "Facebook", color: "text-blue-600" },
  { icon: Youtube, url: "#", label: "YouTube", color: "text-red-500" },
];

const LiquidMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      
      {/* Social Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3 mb-2 items-end"
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
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 300 }}
              >
                {/* Tooltip */}
                <span className="bg-white text-neutral-800 text-xs px-3 py-1 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none uppercase tracking-wide font-semibold">
                  {social.label}
                </span>

                {/* Icon Button */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-neutral-200 transition-transform transform hover:scale-110`}>
                  <social.icon className={`w-5 h-5 ${social.color}`} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 text-white shadow-2xl border border-neutral-800 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
              <X size={28} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus size={28} strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default LiquidMenu;
