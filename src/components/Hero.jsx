import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 pb-20 px-6 md:px-20 lg:px-32 border-b border-white/5">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:pr-12 relative z-20">
          <div className="inline-flex items-center gap-3">
            <span className="w-12 h-px bg-primary"></span>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Architecture of the Web
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight text-white mix-blend-difference">
            BUILDING <br />
            <span className="font-normal text-white">DIGITAL</span> <br />
            <span className="text-white/40">MONUMENTS</span>
          </h1>
          <p className="text-white/60 text-lg font-light max-w-lg leading-relaxed mt-4 border-l border-primary/30 pl-6">
            We architect digital experiences that stand the test of time. Precision
            engineering meets avant-garde aesthetics in a world of noise.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="#works"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:bg-[#1a75c7] hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
            >
              <span className="relative z-10">View Work</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-linear-to-r from-primary to-[#1a75c7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            
            <Link 
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-medium text-sm tracking-wider uppercase transition-all duration-500 hover:border-primary hover:bg-primary/10 hover:scale-[1.02]"
            >
              <span className="relative z-10">Get in Touch</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Abstract Geometric Composition */}
        <div className="lg:col-span-5 relative h-100 md:h-150 w-full flex items-center justify-center">
          {/* Abstract Background Decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80">
            {/* Large Slate Circle */}
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-slate-700/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          </div>
          
          {/* Solid Shapes (Architecture) */}
          <div className="relative w-full h-full">
            {/* Rectangle (Slate) */}
            <div
              className="absolute top-10 right-10 w-48 h-64 md:w-64 md:h-80 bg-slate-600 shadow-2xl z-10 slow-hover hover:scale-[1.02] hover:bg-slate-500 rounded-sm"
              aria-label="Abstract slate colored vertical rectangle representing structure"
            ></div>
            {/* Circle (Clay) */}
            <div
              className="absolute bottom-20 left-10 md:left-0 w-40 h-40 md:w-56 md:h-56 bg-stone-600 rounded-full shadow-2xl z-20 mix-blend-hard-light slow-hover hover:scale-105"
              aria-label="Abstract clay colored circle representing wholeness"
            ></div>
            {/* Small Accent (Blue Line) */}
            <div className="absolute top-[40%] right-[30%] w-32 h-0.5 bg-primary z-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;