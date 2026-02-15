import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Plus } from "lucide-react";

const PriceProfessional = () => {
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

  // --- DATA: Additional Services ---
  const otherServices = [
    {
      title: "Homecoming Collection",
      price: "Rs. 95,000",
      features: [
        "2 Photographers", 
        "8 Hours Coverage", 
        "Couple & Family Session", 
        "1 Framed Enlargement (16x24)",
        "600-800 Final Images"
      ],
    },
    {
      title: "Engagement Collection",
      price: "Rs. 70,000",
      features: [
        "2 Photographers", 
        "5 Hours Coverage", 
        "Couple & Family Session", 
        "1 Framed Enlargement (12x18)",
        "200 Post-Processed Images"
      ],
    },
    {
      title: "Casual Session",
      price: "Rs. 50,000",
      features: [
        "3 Hours Exclusive Coverage", 
        "75 Post-Processed Images", 
        "Online Proofing Gallery", 
        "Slideshow (On Request)",
        "Digital Delivery"
      ],
    },
  ];

  return (
    <section id="book" className="relative py-24 bg-white text-slate-800">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.25em] text-emerald-800 uppercase"
          >
            Investment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 font-serif text-4xl md:text-6xl text-slate-900 font-normal"
          >
            Wedding Collections
          </motion.h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mt-6" />
        </div>

        {/* --- MAIN WEDDING GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-24">
          {weddingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative flex flex-col p-8 transition-all duration-300
                ${pkg.highlight 
                  ? "bg-white border-2 border-emerald-800 shadow-2xl scale-[1.02] z-10" 
                  : "bg-white border-2 border-slate-200 hover:border-emerald-600 hover:shadow-xl"
                }
              `}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-[11px] font-medium px-4 py-1.5 uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-2xl text-slate-900 mb-2 font-normal">{pkg.title}</h3>
              <div className="text-xl font-medium text-emerald-800 mb-4">{pkg.price}</div>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed border-b border-slate-100 pb-6 min-h-[100px]">
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
                w-full py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 border-2
                ${pkg.highlight 
                  ? "bg-emerald-800 text-white border-emerald-800 hover:bg-emerald-900 hover:border-emerald-900" 
                  : "bg-white text-slate-700 border-slate-200 hover:bg-emerald-700 hover:text-white hover:border-emerald-700"
                }
              `}>
                Book Package
              </button>
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
                    className="flex flex-col bg-white border-2 border-slate-200 p-8 hover:border-emerald-600 hover:shadow-xl transition-all duration-300 group"
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

        {/* --- BOTTOM INFO BOX --- */}
        <div className="max-w-5xl mx-auto border-t border-slate-200 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Extended Hours */}
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

            {/* Custom Requests */}
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