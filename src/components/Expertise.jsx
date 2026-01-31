import React from 'react';
import { motion } from 'framer-motion';

const Expertise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]" id="expertise">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 lg:mb-20 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight">
            CORE <br />
            <span className="font-bold text-white/30">DISCIPLINES</span>
          </h2>
          <p className="text-white/50 max-w-sm text-xs md:text-sm tracking-wide">
            Our expertise is divided into three fundamental pillars, each essential
            for structural integrity.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Strategy */}
          <motion.div 
            className="group relative p-6 md:p-8 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-700 bg-black"
            variants={cardVariants}
          >
            <div className="h-32 md:h-40 mb-6 md:mb-8 flex items-center justify-start">
              {/* Strategy Icon: Compass */}
              <svg className="w-20 h-20 md:w-24 md:h-24 stroke-stone-700 lg:group-hover:stroke-[#2295f7] transition-colors duration-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 lg:group-hover:text-[#2295f7] transition-colors duration-500">
              Strategy
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Foundational planning and structural logic. We lay the blueprints
              before a single line of code is written.
            </p>
          </motion.div>
          
          {/* Card 2: Design */}
          <motion.div 
            className="group relative p-6 md:p-8 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-700 bg-black"
            variants={cardVariants}
          >
            <div className="h-32 md:h-40 mb-6 md:mb-8 flex items-center justify-start">
              {/* Design Icon: Pen Tool */}
              <svg className="w-20 h-20 md:w-24 md:h-24 stroke-slate-600 lg:group-hover:stroke-[#2295f7] transition-colors duration-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 lg:group-hover:text-[#2295f7] transition-colors duration-500">
              Design
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Aesthetics derived from function and form. Minimalist interfaces that
              respect the user's intelligence.
            </p>
          </motion.div>
          
          {/* Card 3: Engineering */}
          <motion.div 
            className="group relative p-6 md:p-8 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-700 bg-black"
            variants={cardVariants}
          >
            <div className="h-32 md:h-40 mb-6 md:mb-8 flex items-center justify-start">
              {/* Engineering Icon: Code Brackets */}
              <svg className="w-20 h-20 md:w-24 md:h-24 stroke-stone-500 lg:group-hover:stroke-[#2295f7] transition-colors duration-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 lg:group-hover:text-[#2295f7] transition-colors duration-500">
              Engineering
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Rigorous code architecture and performance. Building resilient systems
              that scale endlessly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;