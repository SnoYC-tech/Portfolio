import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt- pb-16 md:py-20 lg:py-24 px-6 md:px-20 lg:px-32 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-6 md:gap-8 lg:pr-12 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-8 md:w-12 h-px bg-primary"></span>
            <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Architecture of the Web
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight text-white mix-blend-difference"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            BUILDING <br />
            <span className="font-normal text-white">DIGITAL</span> <br />
            <span className="text-white/40">EXCELLENCE</span>
          </motion.h1>
          <motion.p
            className="text-white/60 text-base md:text-lg font-light max-w-lg leading-relaxed mt-2 md:mt-4 border-l border-primary/30 pl-4 md:pl-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            We craft high-quality, fast, and affordable websites that elevate your business’s online presence and deliver real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
              {/* <a
                href="#works"
                className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 lg:hover:bg-[#1a75c7] lg:hover:shadow-lg lg:hover:shadow-primary/30 lg:hover:scale-[1.02]"
              >
                <span className="relative z-10">View Work</span>
                <svg className="w-5 h-5 relative z-10 transition-transform duration-500 lg:group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-linear-to-r from-primary to-[#1a75c7] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              </a> */}

            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 text-white font-medium text-sm tracking-wider uppercase transition-all duration-500 lg:hover:border-primary lg:hover:bg-primary/10 lg:hover:scale-[1.02]"
            >
              <span className="relative z-10">Get in Touch</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-500 lg:group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Abstract Geometric Composition */}
        <motion.div
          className="hidden lg:flex lg:col-span-5 relative lg:h-[500px] w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Abstract Background Decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80">
            {/* Large Slate Circle */}
            <div className="w-96 h-96 rounded-full bg-slate-700/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          </div>

          {/* Solid Shapes (Architecture) */}
          <div className="relative w-full h-full">
            {/* Rectangle (Slate) */}
            <div
              className="absolute top-10 right-10 w-64 h-80 bg-slate-600 shadow-2xl z-10 lg:hover:scale-[1.02] lg:hover:bg-slate-500 transition-all duration-700 rounded-sm"
              aria-label="Abstract slate colored vertical rectangle representing structure"
            ></div>
            {/* Circle (Clay) */}
            <div
              className="absolute bottom-20 left-0 w-56 h-56 bg-stone-600 rounded-full shadow-2xl z-20 mix-blend-hard-light lg:hover:scale-105 transition-all duration-700"
              aria-label="Abstract clay colored circle representing wholeness"
            ></div>
            {/* Small Accent (Blue Line) */}
            <div className="absolute top-[40%] right-[30%] w-32 h-0.5 bg-primary z-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;