import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const FooterLuxury = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <footer className="relative bg-[#022c22] text-emerald-50 pt-24 pb-10 px-6 overflow-hidden">
      
      {/* Background Texture (Optional noise for consistency) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        
        {/* --- TOP SECTION: BIG CTA --- */}
        <div className="mb-24 border-b border-emerald-500/20 pb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8"
          >
            Let's Create <br />
            <span className="italic text-emerald-300 opacity-60">Timeless Magic.</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="text-emerald-200/60 max-w-md text-lg font-light">
              Ready to document your love story? We are currently booking for the upcoming wedding season in Sri Lanka and abroad.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ecfdf5", color: "#064e3b" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border border-emerald-500/30 rounded-full text-xs uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Book Consultation
            </motion.button>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS GRID --- */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 mb-24"
        >
          {/* Column 1: Brand */}
          <motion.div variants={linkVariant} className="space-y-6">
            <h3 className="font-serif text-2xl">Tropical Wedlock</h3>
            <div className="flex items-start gap-3 text-emerald-200/60 text-sm">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p>
                Colombo 07, <br />
                Western Province, <br />
                Sri Lanka.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Sitemap */}
          <motion.div variants={linkVariant} className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-4">Menu</h4>
            {["Home", "Gallery", "Films", "Packages", "Journal"].map((item) => (
              <a key={item} href="#" className="block text-emerald-100/70 hover:text-emerald-300 hover:translate-x-2 transition-all duration-300 text-sm">
                {item}
              </a>
            ))}
          </motion.div>

          {/* Column 3: Socials */}
          <motion.div variants={linkVariant} className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-4">Follow</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 text-emerald-100/70 hover:text-emerald-300 transition-colors text-sm group">
                <Instagram size={16} /> 
                <span className="group-hover:underline decoration-emerald-500/50 underline-offset-4">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-emerald-100/70 hover:text-emerald-300 transition-colors text-sm group">
                <Facebook size={16} /> 
                <span className="group-hover:underline decoration-emerald-500/50 underline-offset-4">Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={linkVariant} className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-4">Contact</h4>
            <a href="mailto:hello@tropicalwedlock.com" className="flex items-center gap-3 text-emerald-100/70 hover:text-emerald-300 transition-colors text-sm">
              <Mail size={16} /> hello@tropicalwedlock.com
            </a>
            <a href="tel:+94770000000" className="flex items-center gap-3 text-emerald-100/70 hover:text-emerald-300 transition-colors text-sm">
              <Phone size={16} /> +94 77 123 4567
            </a>
          </motion.div>
        </motion.div>

        {/* --- BOTTOM SECTION: COPYRIGHT & SCROLL --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-emerald-500/10">
          <p className="text-emerald-500/40 text-[10px] uppercase tracking-widest order-2 md:order-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} Tropical Wedlock. All Rights Reserved.
          </p>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="order-1 md:order-2 flex items-center gap-2 text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest"
          >
            Back to Top <ArrowUp size={14} />
          </motion.button>
        </div>

      </div>
      
      {/* Decorative large faint text at the very bottom (optional) */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h1 className="text-[15vw] font-serif whitespace-nowrap text-center leading-none">
          TROPICAL WEDLOCK
        </h1>
      </div>

    </footer>
  );
};

export default FooterLuxury;