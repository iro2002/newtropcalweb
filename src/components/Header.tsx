import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: Ensure this path is correct
import logoImage from '../images/logo.png'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Detect scroll direction and depth
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Set background solid/scrolled state
      setIsScrolled(currentScrollY > 50);

      // 2. Hide on scroll down, show on scroll up logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling Down - Hide
        setIsVisible(false);
      } else {
        // Scrolling Up - Show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Journal", href: "#journal" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        // Combined visibility and scroll logic
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible || isMobileMenuOpen ? 0 : -100,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ease-in-out px-6 md:px-12 flex justify-between items-center ${
          (isScrolled || isMobileMenuOpen) 
            ? 'bg-[#022c22]/20 backdrop-blur-lg border-b border-white/5 py-3 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        {/* --- LOGO IMAGE --- */}
        <a href="#" className="relative z-50 block">
          <img 
            src={logoImage} 
            alt="Tropical Wedlock Logo" 
            className="h-10 md:h-12 w-auto object-contain drop-shadow-lg"
          />
        </a>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex gap-10 items-center">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="relative group py-2"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white group-hover:text-emerald-300 transition-all duration-300 drop-shadow-md">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a 
            href="#book" 
            className="px-6 py-2 border border-white/30 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-[#022c22] transition-all duration-300 rounded-sm shadow-sm backdrop-blur-sm"
          >
            Book Now
          </a>
        </nav>

        {/* --- MOBILE MENU BUTTON --- */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? 45 : 0, 
              y: isMobileMenuOpen ? 6 : 0,
            }} 
            className="w-8 h-[2px] bg-white block transition-transform duration-300 shadow-md"
          />
          <motion.span 
            animate={{ 
              opacity: isMobileMenuOpen ? 0 : 1,
              width: isMobileMenuOpen ? 0 : "1.25rem", 
            }} 
            className="h-[2px] bg-white block transition-all duration-300 group-hover:w-8 shadow-md"
          />
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? -45 : 0, 
              y: isMobileMenuOpen ? -6 : 0,
            }} 
            className="w-8 h-[2px] bg-white block transition-transform duration-300 shadow-md"
          />
        </button>
      </motion.header>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#022c22]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-emerald-300 transition-colors duration-300 tracking-wide drop-shadow-md"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                 <a 
                  href="#book"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="px-8 py-3 border border-white/20 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-[#022c22] transition-colors"
                >
                  Book Your Date
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;