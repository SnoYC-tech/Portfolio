import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-20 lg:px-32 border-b border-white/5" id="philosophy">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="md:col-span-4">
          <h2 className="text-[#2295f7] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3 md:gap-4">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Philosophy
          </h2>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 md:mb-8">
            We do not merely build websites;<br />
            <span className="text-white/40">we construct digital edifices.</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 text-sm md:text-base text-white/60 leading-relaxed font-light">
            <p>
              Our approach is rooted in the principles of brutalist
              architecture—honesty of materials, structural clarity, and an
              uncompromising focus on function.
            </p>
            <p>
              In a world of digital noise, we offer silence and structure. Every
              pixel is placed with intent, every interaction calculated for weight
              and impact.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;