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
    <section id="faq" className="py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase block mb-3">
            Common Questions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900">
            Good to Know
          </h2>
        </div>

        {/* --- ACCORDION --- */}
        <div className="border-t border-slate-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
              >
                <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${activeIndex === index ? "text-emerald-800" : "text-slate-900 group-hover:text-emerald-700"}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-emerald-800" : "text-slate-400 group-hover:text-emerald-700"}`}>
                  {activeIndex === index ? <Minus size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-slate-500 leading-relaxed text-base md:text-lg max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- FOOTER NOTE (Social Media Policy) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-slate-50 border border-slate-100 rounded-sm text-center"
        >
            <h4 className="font-serif text-lg text-slate-900 mb-2">A Note on Social Media</h4>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
                We curate a limited number of weddings for our portfolio based on our artistic direction. 
                While we cherish every couple we work with, we kindly ask that you respect our editorial choice regarding which weddings are published on the Tropical Wedlock platforms.
            </p>
        </motion.div>

        {/* --- CONTACT CTA --- */}
        <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">Still have questions?</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-800 hover:text-emerald-600 transition-colors">
                Contact Us <ArrowRight size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;