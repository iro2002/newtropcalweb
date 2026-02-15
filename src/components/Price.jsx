import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Plus, ChevronLeft, ChevronRight, Download } from "lucide-react";

const PriceProfessional = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // --- DATA: Main Wedding Packages ---
  const weddingPackages = [
    {
      title: "Digital Collection",
      price: "Rs. 75,000",
      description: "A perfect starting point covering the essentials of your day.",
      features: [
        "2 Photographers",
        "Bride & Groom Prep",
        "Ceremony & Reception",
        "Couple & Family Session",
        "Up to 10 hours coverage",
        "800-1000 High-Res Images",
        "Digital Download Delivery",
      ],
      highlight: false,
    },
    {
      title: "Bronze Collection",
      price: "Rs. 119,000",
      description: "Capturing the essence of your love story with fine art details.",
      features: [
        "Everything in Digital Collection",
        "Fine Art Album (12x24, 50 Pages)",
        "1 Framed Enlargement (16x24)",
        "Online Proofing Gallery",
        "Home Selection Process",
        "Retouched Downloads",
      ],
      highlight: false,
    },
    {
      title: "Platinum Collection",
      price: "Rs. 149,000",
      description: "The premier package with pre-wedding documentation.",
      features: [
        "PRE-WEDDING SHOOT (4 Hours)",
        "75 Retouched Pre-shoot images",
        "Wedding Day Slideshow",
        "2 Photographers (Wedding Day)",
        "Up to 10 Hours Coverage",
        "Fine Art Album (12x24, 50 Pages)",
        "1 Framed Enlargement (16x24)",
        "100 Thank You Cards",
      ],
      highlight: false,
    },
    {
      title: "Tropical Collection",
      price: "Rs. 179,000",
      description: "The elite experience. Complete, romantic, and non-intrusive.",
      features: [
        "PRE-WEDDING SHOOT (Casual)",
        "75 Retouched Pre-shoot images",
        "Wedding Day Slideshow",
        "2 Photographers (Wedding Day)",
        "Up to 10 Hours Coverage",
        "Fine Art Album (12x24, 60 Pages)",
        "Family Album (10x20, 30 Pages)",
        "2 Framed Enlargements (16x24)",
        "1 Framed Enlargement (12x18)",
        "100 Thank You Cards",
      ],
      highlight: true,
    },
  ];

  const otherServices = [
    {
      title: "Homecoming Collection",
      price: "Rs. 95,000",
      features: ["2 Photographers", "8 Hours Coverage", "Couple & Family Session", "1 Framed Enlargement (16x24)", "600-800 Final Images"],
    },
    {
      title: "Engagement Collection",
      price: "Rs. 70,000",
      features: ["2 Photographers", "5 Hours Coverage", "Couple & Family Session", "1 Framed Enlargement (12x18)", "200 Post-Processed Images"],
    },
    {
      title: "Casual Session",
      price: "Rs. 50,000",
      features: ["3 Hours Exclusive Coverage", "75 Post-Processed Images", "Online Proofing Gallery", "Slideshow (On Request)", "Digital Delivery"],
    },
  ];

  // --- LOGIC: Handle Mobile Swap ---
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % weddingPackages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + weddingPackages.length) % weddingPackages.length);
  };

  // --- ANIMATION: Mobile Slide Effect ---
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      position: "absolute",
    }),
  };

  // Helper component to render a single card
  const PackageCard = ({ pkg, isMobile = false }) => (
    <div className={`
      relative flex flex-col p-8 transition-all duration-300 h-full w-full bg-white
      ${pkg.highlight 
        ? "border-2 border-emerald-800 shadow-2xl z-10" 
        : "border-2 border-slate-100"
      }
      ${!isMobile && !pkg.highlight ? "hover:border-emerald-600 hover:shadow-xl" : ""}
    `}>
      {pkg.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-[11px] font-medium px-4 py-1.5 uppercase tracking-widest shadow-md whitespace-nowrap">
          Most Popular
        </div>
      )}

      <h3 className="font-serif text-2xl text-slate-900 mb-2 font-normal">{pkg.title}</h3>
      <div className="text-xl font-medium text-emerald-800 mb-4">{pkg.price}</div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed border-b border-slate-100 pb-6 min-h-[80px]">
        {pkg.description}
      </p>

      <ul className="flex-1 space-y-4 mb-8">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
            <Check size={16} className="mt-0.5 text-emerald-700 shrink-0" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`
        w-full py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 border-2
        ${pkg.highlight 
          ? "bg-emerald-800 text-white border-emerald-800 hover:bg-emerald-900" 
          : "bg-white text-slate-700 border-slate-200 hover:bg-emerald-700 hover:text-white hover:border-emerald-700"
        }
      `}>
        Book Package
      </button>
    </div>
  );

  return (
    <section id="book" className="relative py-24 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif text-neutral-900 leading-[0.9]">
            Pricing
            <span className="italic font-light text-emerald-700">Guide</span>
          </h2>
          
          <p className="text-neutral-500 text-sm font-light leading-relaxed mt-6 max-w-[85%] md:max-w-2xl mx-auto">
            Transparent investments for your legacy. Choose the perfect collection to preserve the intimate moments, raw emotions, and timeless details of your celebration.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW --- */}
        <div className="block lg:hidden mb-24">
            <div className="relative min-h-[600px]"> 
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <PackageCard pkg={weddingPackages[activeIndex]} isMobile={true} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between mt-8 px-4">
                <button 
                    onClick={handlePrev}
                    className="p-4 rounded-full border border-slate-200 text-emerald-800 bg-white hover:bg-emerald-50 active:scale-95 transition-all shadow-sm"
                    aria-label="Previous Package"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2">
                    {weddingPackages.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-emerald-800" : "w-1.5 bg-slate-300"}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={handleNext}
                    className="p-4 rounded-full border border-slate-200 text-emerald-800 bg-white hover:bg-emerald-50 active:scale-95 transition-all shadow-sm"
                    aria-label="Next Package"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8 mb-24 items-start">
          {weddingPackages.map((pkg, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
            >
                <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        {/* --- DIVIDER --- */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="w-full h-[1px] bg-slate-200 absolute z-0" />
          <div className="bg-white px-8 z-10">
             <h3 className="font-serif text-3xl text-slate-900 font-normal">Additional Coverage</h3>
          </div>
        </div>

        {/* --- ADDITIONAL COVERAGE --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {otherServices.map((svc, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white border-2 border-slate-100 p-8 hover:border-emerald-600 hover:shadow-xl transition-all duration-300 group"
                >
                    <div className="text-center mb-6">
                        <h4 className="font-serif text-2xl text-slate-900 font-normal mb-2 group-hover:text-emerald-800 transition-colors">{svc.title}</h4>
                        <span className="text-lg font-medium text-slate-500">{svc.price}</span>
                        <div className="w-12 h-[1px] bg-emerald-600 mx-auto mt-4 opacity-50" />
                    </div>
                    <ul className="flex-1 space-y-3 mb-8">
                        {svc.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 justify-center text-center">
                                <span className="leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-auto">
                        <button className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-800 inline-flex items-center gap-2 transition-colors border-b border-transparent group-hover:border-emerald-800 pb-0.5">
                            Inquire Now
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* ================================================== */}
        {/* --- NEW SECTION: DOWNLOAD PDF BUTTON (GREEN) --- */}
        {/* ================================================== */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16"
        >
            <p className="text-slate-400 text-xs italic mb-4">Prefer a printed copy?</p>
            
            <a 
                href="/pricing.pdf" 
                download="Pricing_Guide.pdf"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-emerald-800 text-white overflow-hidden transition-all shadow-lg hover:shadow-emerald-900/30 rounded-sm"
            >
                {/* Background Hover Effect: Darker Green Slide Up */}
                <div className="absolute inset-0 bg-emerald-950 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Download Full Guide (PDF)</span>
                </span>
            </a>
        </motion.div>

        {/* --- BOTTOM INFO BOX --- */}
        <div className="max-w-5xl mx-auto border-t border-slate-200 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-6 p-8 bg-white border-2 border-slate-100 hover:border-emerald-600 transition-colors duration-300">
                    <div className="p-4 bg-emerald-50 text-emerald-800 rounded-full">
                    <Clock size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                    <h4 className="font-medium text-slate-900 uppercase tracking-widest text-xs mb-2">
                        Extended Hours
                    </h4>
                    <p className="text-slate-500 text-sm">
                        Available at <span className="text-emerald-800 font-medium">Rs. 5,000/hr</span>.
                    </p>
                    </div>
                </div>
                <div className="flex items-center gap-6 p-8 bg-white border-2 border-slate-100 hover:border-emerald-600 transition-colors duration-300">
                    <div className="p-4 bg-emerald-50 text-emerald-800 rounded-full">
                    <Plus size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                    <h4 className="font-medium text-slate-900 uppercase tracking-widest text-xs mb-2">
                        Custom Requests
                    </h4>
                    <p className="text-slate-500 text-sm">
                        Contact us for a <span className="text-emerald-800 font-medium underline decoration-1 underline-offset-2">custom quote</span>.
                    </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PriceProfessional;