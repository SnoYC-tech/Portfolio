import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5" id="works">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-8 md:w-16 h-px bg-white/20"></span>
          <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
            Selected Works
          </h2>
        </motion.div>
        
        {/* Asymmetrical Grid of Works */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Project 1 */}
          <motion.div 
            className="group cursor-pointer"
            variants={projectVariants}
          >
            <div className="w-full aspect-[4/3] bg-neutral-800 relative overflow-hidden mb-6 rounded-lg">
              <div className="absolute inset-0 bg-slate-800 opacity-50 lg:group-hover:opacity-40 transition-opacity duration-700"></div>
              {/* Abstract Composition for Project Thumb */}
              <div
                className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-stone-600 rounded-full mix-blend-overlay"
                aria-label="Abstract geometric composition representing project 1"
              ></div>
              <div
                className="absolute bottom-[20%] right-[20%] w-[30%] h-[50%] bg-white/10 backdrop-blur-md"
                aria-label="Abstract geometric composition representing project 1"
              ></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-light text-white lg:group-hover:font-normal transition-all duration-700">
                VANTAGE TOWERS
              </h3>
              <p className="text-[#2295f7] text-xs tracking-widest uppercase mt-2">
                Real Estate / Web GL
              </p>
            </div>
          </motion.div>
          
          {/* Project 2 (Offset top only on desktop) */}
          <motion.div 
            className="group cursor-pointer mt-0 lg:mt-32"
            variants={projectVariants}
          >
            <div className="w-full aspect-[4/3] bg-neutral-800 relative overflow-hidden mb-6 rounded-lg">
              <div className="absolute inset-0 bg-stone-900 opacity-60 lg:group-hover:opacity-40 transition-opacity duration-700"></div>
              {/* Abstract Composition for Project Thumb */}
              <div
                className="absolute top-0 right-0 w-[60%] h-full bg-slate-700/50"
                aria-label="Abstract geometric composition representing project 2"
              ></div>
              <div
                className="absolute bottom-10 left-10 w-24 h-24 border border-[#2295f7]/40 rounded-full"
                aria-label="Abstract geometric composition representing project 2"
              ></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-light text-white lg:group-hover:font-normal transition-all duration-700">
                OAK & IRON
              </h3>
              <p className="text-[#2295f7] text-xs tracking-widest uppercase mt-2">
                Furniture / E-Commerce
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;