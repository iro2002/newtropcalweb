import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// ✅ Import your logo
import logoBg from "../images/logo2.png";

// --- TESTIMONIALS DATA (6 Reviews) ---
const testimonials = [
  {
    id: 1,
    quote: "Thank you Aiya for the pictures, and all the time it took for you to catch those precious moments. Highly recommended. Tropical Wedlock is the best!",
    name: "Kalhara Samarakoon",
    image: "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/605830690_3998790273765306_7850183845845122017_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YwETe7VOnIsQ7kNvwEBbWDu&_nc_oc=Adn-MKiePBMy5BFUkhwNttzTmFsldLKDlNhy8gVO4yD-QY52OmJJp8D81rnyfA5_ybc&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=2zp6AzI9_e9JWqzkpKTs_g&oh=00_AfvRE1mMlhsZ2yxtKzzBImFMFTslsAHxDXH5ND1tmWs9SA&oe=69964F9B",
    title: "Wedding Client",
  },
  {
    id: 2,
    quote: "Wow! You totally nailed the shoot day—the photos are amazing! You captured everything so perfectly, and I loved how you made the whole process so smooth and fun. Can’t wait to work together again!",
    name: "Karan Karthik",
    image: "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/605780218_122268465152078393_4722315383577545063_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=u28DIUW2XK0Q7kNvwGrVoAx&_nc_oc=AdmOPWl2lc_9SJoIr96y-l-vW8EQteBfcWvbZXeWVuczq4U0kqYnn6rxVYHrLHqGBt0&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=DH9pPLasAeEfeMlEwyFtaw&oh=00_AfvHKOt8kZyGqwZo6pPX6uwGTcTl9MC_pNoaj3f6zWTbHA&oe=69963490",
    title: "Wedding Client",
  },
  {
    id: 3,
    quote: "A heartfelt thank you to Tropical Wedlock for beautifully capturing the essence of our love story. Your work was nothing short of amazing, and we’re so grateful for the magic you brought to our special day.",
    name: "Samudra Mihirani",
    image: "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/595899133_2008517416595352_960541707471129745_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Dqy30mJ80DoQ7kNvwHzOlPJ&_nc_oc=AdmRKXyvtDxL7WNI87G-37o1kTwCu4slx8FRU8Yn48pamO6cZO8GGLTnKlUxY3lIlx8&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=CMZs16C1G0Bl7piKPkpiGg&oh=00_AftdegztUc7pAlroZpimfPpiHV8-sRrZEjymcmbdq9VoeQ&oe=6996402F",
    title: "Wedding Client",
  },
  {
    id: 4,
    quote: "Thank you so much for making our day so special! You were so friendly and made us feel so comfortable throughout. The photos are absolutely stunning...Thank you again for capturing our moments so beautifully.Highly recommend you to anyone looking for a photographer who truly cares...",
    name: "Inoshi Rajapaksha ",
    image: "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/475479839_583089907954141_6209622937666385155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sInn1fx4n-8Q7kNvwEm9eEz&_nc_oc=Admqa1fMGoalakZTJGyQg7kQSINWg5c6zeHiGZPKV0vwzQ7n1EyKGrFbFIA4I-31uPY&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=I8E1RAXFWZVFAseWz6e99A&oh=00_AftFXm39ZJHlBb25VQSOLjx5BqPKYzZpytw4QxZp0xbW6g&oe=6999C1A4", // Placeholder or Replace with real URL
    title: "Wedding Client",
  },
  {
    id: 5,
    quote: "We had an amazing experience with Asela during our photoshoot. He made us feel so comfortable, which helped him capture our natural looks perfectly. The photos are genuine and truly reflect who we are. Thank you, Asela, for these beautiful memories!",
    name: "Yohan Pieris",
    image: "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/198742358_4213923708695108_6115057144563537130_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gJNUbcqtKIUQ7kNvwE4m8xP&_nc_oc=AdkDRDIp4z7OryNiT5U-v-VRDd0Fa7ZckWxDwGUfIr5_FaMOXbW0AeeyzsiYfDwOQS8&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=oWxwD3aI5qMSgnz5B2TYkw&oh=00_Afs93PsegrDAT5Ugfnp9I_JVprzGY305FVrxXEUD93ODMg&oe=6999B956", // Placeholder or Replace with real URL
    title: "Wedding Client",
  },
  {
    id: 6,
    quote: "The best photographer. I was very lucky to selected the tropical wedlock for my wedding day & Home coming photography.. Actually you have more quick, unique and very responsible service. I know one day Asela aiya can become the top talented photographer in Sri Lanka. I wish you and ur crew. ",
    name: "Sandika Dulanjali Hewavitharana",
    image: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/473191892_1172797934414375_7966428110381331160_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Fz1gSIxS0P0Q7kNvwHUCSaD&_nc_oc=AdnifolzJ5rM6wZVv9aYUnDLtjDeHnnwpLf1RX46zXSfNc216NPYneFStqm_0MtPZBQ&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=3P44hiSkpguv-7lLukmbcA&oh=00_Afsa5fHY_nWvbB24qqGm5mBJmzmDdvepDKlD-8Ivs71NVQ&oe=6999AA8F", // Placeholder or Replace with real URL
    title: "Wedding Client",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const AUTOPLAY_DELAY = 6000;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  const current = testimonials[currentIndex];

  return (
    <section id="reviews" section className="relative py-20 bg-white overflow-hidden text-neutral-900">
      
      {/* --- FULL SCREEN LOGO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.img
          src={logoBg}
          alt=""
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            opacity: 0.08, 
            scale: 1.05,
          }}
          transition={{
            opacity: { duration: 2 },
            scale: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 leading-[0.9]">
            Kind 
            <span className="italic font-light text-emerald-700">Words</span>
          </h2>
          <div className="h-[1px] w-12 bg-emerald-500/30 mx-auto mt-6 mb-4" />
          <p className="text-neutral-500 text-xs uppercase tracking-[0.2em] font-medium">
              Stories from our couples
          </p>
        </div>

        {/* --- MAIN SLIDER AREA --- */}
        <div className="relative flex items-center justify-between">
          
          {/* LEFT BUTTON (Desktop) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex w-12 h-12 rounded-full border border-emerald-100 items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 group bg-white/50 backdrop-blur-sm z-20 shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-emerald-500 group-hover:text-emerald-700" />
          </button>

          {/* SLIDER CONTENT CONTAINER */}
          {/* Fixed 'min-h' prevents overlap by reserving space for long text */}
          <div className="relative flex-1 px-0 md:px-12 w-full min-h-[600px] md:min-h-[450px] flex items-center justify-center">
            
            {/* 'mode="wait"' prevents two slides from existing at the same time */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full flex flex-col items-center text-center top-0 md:top-auto"
              >
                
                {/* Client Image */}
                <div className="relative mb-8 md:mb-10 group">
                  <div className="absolute inset-0 rounded-full border border-emerald-500/20 scale-110 group-hover:scale-125 transition-transform duration-700" />
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-50 p-2 rounded-full text-emerald-600 shadow-sm">
                    <Quote size={12} fill="currentColor" />
                  </div>
                </div>

                {/* Quote (Responsive Text Size) */}
                <blockquote className="text-xl md:text-3xl font-serif font-light leading-relaxed mb-8 md:mb-10 max-w-2xl text-neutral-800 italic px-2">
                  “{current.quote}”
                </blockquote>

                {/* Client Info */}
                <div className="space-y-1 md:space-y-2">
                  <p className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-emerald-900">
                    {current.name}
                  </p>
                  {current.title && (
                    <p className="font-serif text-sm text-neutral-400 italic">
                      — {current.title}
                    </p>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON (Desktop) */}
          <div className="hidden md:flex relative w-12 h-12 items-center justify-center z-20 shrink-0">
             {/* Timer Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle cx="24" cy="24" r="23" stroke="#ecfdf5" strokeWidth="2" fill="none" />
              <motion.circle
                key={currentIndex}
                cx="24" cy="24" r="23"
                stroke="#059669"
                strokeWidth="2"
                fill="none"
                strokeDasharray="145"
                strokeDashoffset="145"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
              />
            </svg>
            <button
              onClick={nextSlide}
              className="w-full h-full rounded-full flex items-center justify-center hover:bg-emerald-50 transition-colors duration-300 group bg-white/50 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-emerald-500 group-hover:text-emerald-700" />
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION BUTTONS */}
        <div className="flex md:hidden justify-center gap-6 mt-[-60px] relative z-30">
          <button onClick={prevSlide} className="p-3 bg-white shadow-md rounded-full text-emerald-800 border border-slate-100"><ChevronLeft size={20}/></button>
          <button onClick={nextSlide} className="p-3 bg-white shadow-md rounded-full text-emerald-800 border border-slate-100"><ChevronRight size={20}/></button>
        </div>

        {/* BOTTOM DOTS */}
        <div className="flex justify-center gap-2 mt-12 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                index === currentIndex ? "w-8 bg-emerald-800" : "w-1.5 bg-emerald-200 hover:bg-emerald-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;