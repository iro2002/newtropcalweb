import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight, Calendar } from "lucide-react";

// Import your logo
import appLogo from "../images/app-logo.png"; 

const Contact = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
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
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-emerald-50/80 backdrop-blur-sm text-emerald-800 rounded-full group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500 shadow-sm border border-emerald-100">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Studio Location</h4>
                  <p className="text-slate-900 font-serif text-lg">Colombo, Sri Lanka</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-emerald-50/80 backdrop-blur-sm text-emerald-800 rounded-full group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500 shadow-sm border border-emerald-100">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Direct Line</h4>
                  <p className="text-slate-900 font-serif text-lg">072 200 6206</p>
                </div>
              </div>

              {/* Email */}
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

    
          </motion.div>

          {/* --- RIGHT SIDE: CALL TO ACTION (Sharp Edges) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-10"
          >
            {/* Decorative Icon */}
            <div className="mb-6">
               <Calendar size={48} strokeWidth={1} className="text-emerald-800/80" />
            </div>

            <h3 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
              Details & <br/> Availability
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-10 max-w-sm">
              We take on a limited number of weddings each year to ensure every couple receives our full attention. 
              Reach out to check availability for your date.
            </p>

            <div className="space-y-4 w-full max-w-sm">
              {/* Sharp Button */}
              <a 
                href="mailto:tropicalwedlock.info@gmail.com"
                className="w-full bg-emerald-800 text-white font-bold uppercase tracking-widest text-xs py-5 px-8 hover:bg-emerald-900 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-emerald-900/20"
              >
                Message Us 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[10px] uppercase tracking-widest text-slate-400 text-center">
                Typically replies within 24 hours
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;