import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: Ensure this path matches your project structure
import logoImage from '../images/app-logo.png'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED LINKS: Lowercase IDs to match standard HTML IDs
  const links = [
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  // --- FIXED: Robust Smooth Scroll Handler ---
  const handleLinkClick = (e, href) => {
    e.preventDefault(); // 1. Stop default jump
    const targetId = href.replace('#', ''); // 2. Get ID string
    const element = document.getElementById(targetId); // 3. Find element
    
    if (element) {
      const headerOffset = 80; // Offset for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false); // 4. Close mobile menu
    } else {
        console.warn(`Element with id "${targetId}" not found!`);
    }
  };

  const textColorClass = (isScrolled || isMobileMenuOpen) ? "text-emerald-950" : "text-white";
  const burgerColorClass = (isScrolled || isMobileMenuOpen) ? "bg-emerald-950" : "bg-white";

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible || isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 flex justify-between items-center ${
          (isScrolled || isMobileMenuOpen) 
            ? 'bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        {/* --- LOGO --- */}
        <a href="#" onClick={(e) => handleLinkClick(e, '#home')} className="relative z-50 block">
          <img 
            src={logoImage} 
            alt="Logo" 
            className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'brightness-0 opacity-80' : 'brightness-100 drop-shadow-md'
            }`}
          />
        </a>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative group py-2"
            >
              <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${textColorClass}`}>
                {link.name}
              </span>
              <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-emerald-800" : "bg-white"
              }`} />
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`ml-4 px-6 py-2.5 border text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm cursor-pointer ${
                (isScrolled || isMobileMenuOpen)
                ? "border-emerald-900/50 text-emerald-950 hover:bg-emerald-900 hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-emerald-950 backdrop-blur-sm"
            }`}
          >
            Book Now
          </a>
        </nav>

        {/* --- MOBILE BURGER --- */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? 45 : 0, 
              y: isMobileMenuOpen ? 9 : 0,
              backgroundColor: (isScrolled || isMobileMenuOpen) ? "#022c22" : "#ffffff"
            }} 
            className="w-6 h-[2px] block transition-all duration-300 origin-center"
          />
          <motion.span 
            animate={{ 
              opacity: isMobileMenuOpen ? 0 : 1, 
              width: isMobileMenuOpen ? 0 : "1rem",
              backgroundColor: (isScrolled || isMobileMenuOpen) ? "#022c22" : "#ffffff"
            }} 
            className="h-[2px] block transition-all duration-300 group-hover:w-6"
          />
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? -45 : 0, 
              y: isMobileMenuOpen ? -9 : 0,
              backgroundColor: (isScrolled || isMobileMenuOpen) ? "#022c22" : "#ffffff"
            }} 
            className="w-6 h-[2px] block transition-all duration-300 origin-center"
          />
        </button>
      </motion.header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="text-3xl font-serif text-emerald-950 hover:text-emerald-700 transition-colors duration-300 tracking-tight cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                 <a 
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="px-10 py-4 border border-emerald-900/30 text-xs font-bold uppercase tracking-[0.2em] text-emerald-950 hover:bg-emerald-950 hover:text-white transition-colors cursor-pointer"
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