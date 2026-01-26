import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <aside className="w-full md:w-64 md:h-screen md:fixed md:left-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between p-8 shrink-0">
      <div className="flex flex-col gap-8">
        <div>
          <img src="/logo.webp" alt="ARCH Logo" className="h-12 w-auto object-contain" />
          <p className="text-white/40 text-[10px] tracking-[0.4em] mt-1 uppercase">SnoYC</p>
        </div>
        <nav className="hidden md:flex flex-col gap-6 mt-12">
          <a
            className="group flex items-center gap-4 text-white/50 hover:text-[#e6b319] transition-colors duration-500"
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              01
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Index
            </span>
          </a>
          <a
            className="group flex items-center gap-4 text-white/50 hover:text-[#e6b319] transition-colors duration-500"
            href="#philosophy"
            onClick={(e) => handleSmoothScroll(e, '#philosophy')}
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              02
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Philosophy
            </span>
          </a>
          <a
            className="group flex items-center gap-4 text-white/50 hover:text-[#e6b319] transition-colors duration-500"
            href="#expertise"
            onClick={(e) => handleSmoothScroll(e, '#expertise')}
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              03
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Expertise
            </span>
          </a>
          <a
            className="group flex items-center gap-4 text-white/50 hover:text-[#e6b319] transition-colors duration-500"
            href="#works"
            onClick={(e) => handleSmoothScroll(e, '#works')}
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              04
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Works
            </span>
          </a>
        </nav>
      </div>
      
      {/* Mobile Menu Icon */}
      <button
        className="md:hidden absolute top-8 right-8 text-[#e6b319]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div className="hidden md:flex flex-col gap-2">
        <div className="w-8 h-px bg-[#e6b319]/30"></div>
        <p className="text-white/30 text-[10px] tracking-wider uppercase">© 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;