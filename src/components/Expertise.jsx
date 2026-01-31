import React from 'react';

const Expertise = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]" id="expertise">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 lg:mb-20 gap-6 md:gap-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight">
            CORE <br />
            <span className="font-bold text-white/30">DISCIPLINES</span>
          </h2>
          <p className="text-white/50 max-w-sm text-xs md:text-sm tracking-wide">
            Our expertise is divided into three fundamental pillars, each essential
            for structural integrity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Card 1: Strategy */}
          <div className="group relative p-6 md:p-8 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-700 bg-black">
            <div className="h-32 md:h-40 mb-6 md:mb-8 flex items-center justify-start">
              {/* Abstract Shape: Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-stone-700 lg:group-hover:bg-[#2295f7] transition-colors duration-700"></div>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 lg:group-hover:text-[#2295f7] transition-colors duration-500">
              Strategy
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Foundational planning and structural logic. We lay the blueprints
              before a single line of code is written.
            </p>
          </div>
          
          {/* Card 2: Design */}
          <div className="group relative p-6 md:p-8 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-700 bg-black">
            <div className="h-32 md:h-40 mb-6 md:mb-8 flex items-center justify-start">
              {/* Abstract Shape: Square */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-none bg-slate-600 lg:group-hover:bg-[#2295f7] transition-colors duration-700"></div>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 lg:group-hover:text-[#2295f7] transition-colors duration-500">
              Design
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Aesthetics derived from function and form. Minimalist interfaces that
              respect the user's intelligence.
            </p>
          </div>
          
          {/* Card 3: Engineering */}
          <div className="group relative p-6 md:p-8 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-700 bg-black">
            <div className="h-32 md:h-40 mb-6 md:mb-8 flex items-center justify-start">
              {/* Abstract Shape: Triangle */}
              <div className="w-0 h-0 border-l-[40px] md:border-l-[50px] border-r-[40px] md:border-r-[50px] border-b-[69px] md:border-b-[86px] border-l-transparent border-r-transparent border-b-stone-500 lg:group-hover:border-b-[#2295f7] transition-colors duration-700"></div>
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 lg:group-hover:text-[#2295f7] transition-colors duration-500">
              Engineering
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Rigorous code architecture and performance. Building resilient systems
              that scale endlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;