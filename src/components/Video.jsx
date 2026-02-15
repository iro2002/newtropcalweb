import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* --- LEFT: TYPOGRAPHY --- */}
            <div className="w-full lg:w-5/12 text-left">
                
                {/* Minimal Accent Line */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-[2px] bg-emerald-800 mb-8"
                />

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-7xl font-serif text-slate-900 leading-[1.1] mb-8"
                >
                    Motion <br />
                    <span className="italic text-emerald-800 font-light">Pictures</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 font-light text-base leading-loose"
                >
                    A wedding is not a single moment, but a collection of movements. 
                    The glance, the touch, the dance. We capture the rhythm of your celebration 
                    with cinematic precision.
                </motion.p>
            </div>

            {/* --- RIGHT: THE VIDEO WITH BACK BOX --- */}
            <div className="w-full lg:w-7/12 relative">
                
                {/* THE BACK BOX (Emerald Green) */}
                <div className="absolute top-6 right-6 w-full h-full bg-emerald-900 rounded-sm -z-10 transform translate-x-1 translate-y-1" />

                {/* Main Video Frame */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white p-2 shadow-2xl"
                >
                    {/* 16:9 Aspect Ratio Container */}
                    <div className="relative w-full aspect-video bg-slate-50 overflow-hidden">
                        <iframe 
                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1247521860806840%2F&show_text=false&width=560&t=0"
                            width="100%"
                            height="100%"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            title="Highlight Film"
                            className="absolute inset-0 w-full h-full object-cover"
                        ></iframe>
                    </div>
                </motion.div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default Video;