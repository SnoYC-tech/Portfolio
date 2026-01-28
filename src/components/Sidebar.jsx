import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full md:w-64 md:h-screen md:fixed md:left-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between p-8 shrink-0">
      <div className="flex flex-col gap-8">
        <Link to="/">
          <img src="/logo.webp" alt="ARCH Logo" className="h-12 w-auto object-contain" />
          <p className="text-white/40 text-[10px] tracking-[0.4em] mt-1 uppercase">SnoYC</p>
        </Link>
        <nav className="hidden md:flex flex-col gap-6 mt-12">
          <Link
            to="/"
            className="group flex items-center gap-4 text-white/50 hover:text-[#2295f7] transition-colors duration-500"
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              01
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Home
            </span>
          </Link>
          <Link
            to="/about"
            className="group flex items-center gap-4 text-white/50 hover:text-[#2295f7] transition-colors duration-500"
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              02
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              About
            </span>
          </Link>
          <Link
            to="/services"
            className="group flex items-center gap-4 text-white/50 hover:text-[#2295f7] transition-colors duration-500"
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              03
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Services
            </span>
          </Link>
          <Link
            to="/contact"
            className="group flex items-center gap-4 text-white/50 hover:text-[#2295f7] transition-colors duration-500"
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              04
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Contact
            </span>
          </Link>
        </nav>
      </div>
      
      {/* Mobile Menu Icon */}
      <button
        className="md:hidden absolute top-8 right-8 text-[#2295f7]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div className="hidden md:flex flex-col gap-2">
        <div className="w-8 h-px bg-[#2295f7]/30"></div>
        <p className="text-white/30 text-[10px] tracking-wider uppercase">© 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;