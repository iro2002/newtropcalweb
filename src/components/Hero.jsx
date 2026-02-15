import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import hero2Image from "../images/hero2.jpg";

const Hero2 = () => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax (disable if user prefers reduced motion)
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-3%", "3%"]
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col md:flex-row-reverse overflow-hidden bg-[#fafafa]"
    >
      {/* --- TEXT SECTION (Top on Mobile) --- */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center px-8 py-20 md:py-0 md:px-20 bg-[#fafafa] z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.14 }}
          className="max-w-lg mx-auto md:mx-0"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-8"
          >
            Our Philosophy
          </motion.p>

          {/* Text Content */}
          <div className="text-neutral-800 font-serif text-lg md:text-xl leading-relaxed space-y-8">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              We believe every person's life has something untold as well as wondering,
              and must say that is worth being preserved.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              We are professionals who have a great passion towards capturing all those
              beautiful memories. At last, memories keep our souls alive.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 14, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-medium text-neutral-600 italic border-l-2 border-neutral-300 pl-4"
            >
              "We manage to reveal your untold fabulous stories to the entire world loud & clear."
            </motion.p>
          </div>

          {/* Signature */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-neutral-200"
          >
            <p className="font-serif italic text-neutral-400 text-lg">With Love,</p>
            <p className="font-sans font-bold text-neutral-900 uppercase tracking-[0.2em] mt-2 text-sm">
              Tropical Wedlock 🍃
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* --- IMAGE SECTION (Bottom on Mobile) --- */}
      <div className="relative w-full md:w-1/2 h-[52vh] md:h-auto overflow-hidden">
        {/* Soft overlay reveal (simple fade, no heavy effects) */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[#fafafa] z-20 pointer-events-none"
        />

        {/* Parallax container */}
        <motion.div
          style={{ y: yParallax, willChange: "transform" }}
          className="absolute inset-0 w-full h-[112%] -top-[6%] transform-gpu"
        >
          <motion.img
            initial={reduceMotion ? { scale: 1 } : { scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src={hero2Image}
            alt="Tropical Wedlock Couple"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Subtle vignette for calm look */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Hero2;
