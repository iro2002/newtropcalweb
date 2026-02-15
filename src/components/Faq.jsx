import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "I'm ready to book! What next?",
      answer: "Wonderful! To secure your date, you can either schedule an appointment to meet us and discuss your plans in person or simply make a bank transfer of 20% of your chosen package price as a deposit. This ensures your date is reserved exclusively for you. Feel free to reach out, and we'll guide you through the next steps!"
    },
    {
      question: "Can I customize my package?",
      answer: "Absolutely! I'd love to create a package that perfectly suits your needs. Simply share your requirements, and we'll work together to tailor a package that captures everything you envision for your special day."
    },
    {
      question: "How long does it take to edit the pictures?",
      answer: "Editing your wedding photos is a thoughtful process where I perfect the colors, lighting, and details to tell your story beautifully. It typically takes 4-6 weeks to deliver the full collection, ensuring each image is of the highest quality. To keep the excitement alive, I'll share a sneak peek of a few photos within a week of your big day!"
    },
    {
      question: "When should I make the final payment?",
      answer: "The final payment is due one month before your event date. This ensures everything is finalized and allows us to focus entirely on capturing your special day without any distractions."
    },
    {
      question: "Do you offer videography?",
      answer: "While we don't offer videography services ourselves, we'd be happy to recommend some professional videographers who share our passion for capturing unforgettable moments. Let us know, and we'll connect you with trusted experts!"
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- ENHANCED HEADER --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-[1px] w-8 bg-emerald-800/30"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-emerald-800 uppercase">
              Investment & Logistics
            </span>
            <span className="h-[1px] w-8 bg-emerald-800/30"></span>
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
            Curated <span className="italic font-light text-emerald-800">Details</span>
          </h2>
        </div>

        {/* --- ACCORDION --- */}
        <div className="border-t border-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-10 flex items-center justify-between text-left group focus:outline-none"
              >
                <span className={`font-serif text-xl md:text-2xl transition-all duration-500 ${activeIndex === index ? "text-emerald-800 translate-x-2" : "text-slate-900 group-hover:text-emerald-700"}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-500 ${activeIndex === index ? "rotate-180 text-emerald-800" : "text-slate-300 group-hover:text-emerald-700"}`}>
                  {activeIndex === index ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-slate-500 leading-relaxed text-base md:text-lg max-w-2xl border-l-2 border-emerald-50 pl-6 ml-1">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- CONTACT CTA --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
        >
            <p className="text-slate-400 text-xs italic mb-6">Still have questions regarding your legacy?</p>
            <a href="#contact" className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-900 transition-all">
                <span className="border-b border-emerald-900/20 pb-1 group-hover:border-emerald-900 transition-all">Start a Conversation</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;