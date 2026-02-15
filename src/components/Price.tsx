import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Minus } from 'lucide-react';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPremium?: boolean;
}

const tiers: PricingTier[] = [
  {
    title: "The Highlight",
    price: "Rs. 25,000",
    description: "Ideal for intimate ceremonies or Homecomings focusing on the core narrative.",
    features: [
      "08 Hours of Coverage",
      "Lead Cinematographer",
      "04-Minute Cinematic Highlight",
      "Edited Full Ceremony Film",
      "Online Gallery Access"
    ]
  },
  {
    title: "The Heirloom",
    price: "Rs. 45,000",
    description: "Our signature collection covering both the Wedding and Homecoming events.",
    isPremium: true,
    features: [
      "Comprehensive Two-Day Coverage",
      "Three Multi-angle Cinematographers",
      "08-Minute Feature Film",
      "4K Drone Aerials (Subject to SLCASL)",
      "Same-Day Edit (SDE) Teaser",
      "Pre-Shoot Cinematic Session"
    ]
  },
  {
    title: "Grand Editorial",
    price: "Rs. 75,000",
    description: "An elite production for grand multi-day celebrations and destination weddings.",
    features: [
      "Unlimited Multi-day Coverage",
      "Director & Full Creative Team",
      "15-Minute Documentary Film",
      "Pre-Wedding Storyboarded Film",
      "Raw Footage on High-Speed Drive",
      "Premium Handcrafted Keepsake Box"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="bg-[#fcfcfc] py-8 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[15rem] font-serif italic">Invest</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-neutral-900 tracking-tight">
              Preserve Your<br/><span className="italic font-light">island story</span>
            </h2>
            <p className="text-neutral-500 max-w-sm font-light leading-relaxed text-sm">
              A curated approach to Sri Lankan weddings—capturing the vibrant colors of the Poruwa and the timeless elegance of the ballroom.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-12 lg:p-16 bg-[#fcfcfc] flex flex-col h-full group ${
                tier.isPremium ? 'z-10' : ''
              }`}
            >
              {tier.isPremium && (
                <div className="absolute top-0 left-0 w-full h-1 bg-neutral-900" />
              )}
              
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-neutral-400 mb-8">
                  {tier.title}
                </h3>
                <div className="flex flex-col mb-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 italic mb-1">Investment starts at</span>
                  <span className="text-3xl md:text-4xl font-serif text-neutral-900">{tier.price}</span>
                </div>
                <p className="text-neutral-500 font-serif italic leading-relaxed text-sm">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-[11px] uppercase tracking-widest text-neutral-600 leading-tight">
                      <Minus size={14} className="text-neutral-300 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-16">
                <button className={`w-full py-6 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 flex items-center justify-center gap-3 border ${
                  tier.isPremium 
                  ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800' 
                  : 'bg-transparent text-neutral-900 border-neutral-200 hover:border-neutral-900'
                }`}>
                  Check Availability
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
     
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;