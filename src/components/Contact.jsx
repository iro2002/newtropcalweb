import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Calendar, ExternalLink } from "lucide-react";

// Import your logo
import appLogo from "../images/app-logo.png"; 

const Contact = () => {
  // Use the specific Google Maps link for your business
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Tropical+Wedlock+Sri+Lanka";

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden min-h-[700px] flex items-center">
      
      {/* --- WATERMARK BACKGROUND --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src={appLogo} 
          alt="Watermark Background" 
          className="w-[120%] h-[120%] object-cover opacity-[0.05] pointer-events-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
                Get In Touch
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight mb-6">
                Let’s create <br />
                <span className="italic font-light text-emerald-800">Together</span>
              </h2>
              <p className="text-slate-600 font-medium max-w-md leading-relaxed">
                Whether you're planning an intimate ceremony or a grand celebration in Sri Lanka, we'd love to hear your story.
              </p>
            </div>

            {/* CONTACT DETAILS LIST */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-emerald-50/80 backdrop-blur-sm text-emerald-800 rounded-full group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500 shadow-sm border border-emerald-100">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Studio Location</h4>
                  <p className="text-slate-900 font-serif text-lg">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-emerald-50/80 backdrop-blur-sm text-emerald-800 rounded-full group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500 shadow-sm border border-emerald-100">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Direct Line</h4>
                  <p className="text-slate-900 font-serif text-lg">072 200 6206</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-emerald-50/80 backdrop-blur-sm text-emerald-800 rounded-full group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500 shadow-sm border border-emerald-100">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Email Inquiry</h4>
                  <p className="text-slate-900 font-serif text-lg">tropicalwedlock.info@gmail.com</p>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <a 
              href="mailto:tropicalwedlock.info@gmail.com"
              className="inline-flex bg-emerald-800 text-white font-bold uppercase tracking-widest text-xs py-4 px-8 hover:bg-emerald-900 transition-all duration-300 items-center justify-center gap-3 group shadow-lg shadow-emerald-900/20"
            >
              Message Us 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* --- RIGHT SIDE: MAP & AVAILABILITY --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Header for Right Side */}
            <div className="flex items-center gap-4 mb-8 lg:pl-4">
               <Calendar size={32} strokeWidth={1} className="text-emerald-800/80" />
               <div>
                  <h3 className="font-serif text-2xl text-slate-900">Find Us</h3>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Visit our studio</p>
               </div>
            </div>

            {/* --- CREATIVE MAP CONTAINER (Clickable) --- */}
            {/* We wrap the map in a relative container. The <a> tag is absolute and covers everything. */}
            <div className="relative w-full h-[400px] mt-2 group cursor-pointer">
                
                {/* 1. DECORATIVE OFFSET BORDER (Behind) */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-800/30 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 rounded-sm" />

                {/* 2. WHITE FRAME & MAP (Front) */}
                <div className="relative z-10 w-full h-full bg-white p-2 shadow-2xl rounded-sm overflow-hidden">
                    
                    {/* 3. CLICKABLE OVERLAY LINK (This makes the click open Google Maps) */}
                    <a 
                      href={googleMapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                      aria-label="Open in Google Maps"
                    >
                        {/* Optional: 'Open' Icon appears on hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full shadow-lg">
                            <ExternalLink size={24} className="text-emerald-800" />
                        </div>
                    </a>

                    {/* 4. THE MAP (Pointer events none so clicks pass to the link above) */}
                    <div className="w-full h-full overflow-hidden relative pointer-events-none">
                         <iframe 
                            /* Using a query embed to find 'Tropical Wedlock' automatically */
                            src="https://maps.google.com/maps?q=Tropical+Wedlock+Sri+Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tropical Wedlock Location"
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>
                </div>
            </div>

       
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;