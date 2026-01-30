import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
            className={`group flex items-center gap-4 transition-all duration-500 relative ${
              isActive('/') 
                ? 'text-[#2295f7]' 
                : 'text-white/80 hover:text-[#2295f7] hover:bg-white/5'
            } rounded-lg px-3 py-2 -mx-3`}
          >
            <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
              isActive('/') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
            }`}>
              01
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Home
            </span>
            {isActive('/') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
          </Link>
          <Link
            to="/about"
            className={`group flex items-center gap-4 transition-all duration-500 relative ${
              isActive('/about') 
                ? 'text-[#2295f7]' 
                : 'text-white/80 hover:text-[#2295f7] hover:bg-white/5'
            } rounded-lg px-3 py-2 -mx-3`}
          >
            <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
              isActive('/about') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
            }`}>
              02
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              About
            </span>
            {isActive('/about') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
          </Link>
          <Link
            to="/services"
            className={`group flex items-center gap-4 transition-all duration-500 relative ${
              isActive('/services') 
                ? 'text-[#2295f7]' 
                : 'text-white/80 hover:text-[#2295f7] hover:bg-white/5'
            } rounded-lg px-3 py-2 -mx-3`}
          >
            <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
              isActive('/services') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
            }`}>
              03
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Services
            </span>
            {isActive('/services') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
          </Link>
          <Link
            to="/contact"
            className={`group flex items-center gap-4 transition-all duration-500 relative ${
              isActive('/contact') 
                ? 'text-[#2295f7]' 
                : 'text-white/80 hover:text-[#2295f7] hover:bg-white/5'
            } rounded-lg px-3 py-2 -mx-3`}
          >
            <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
              isActive('/contact') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
            }`}>
              04
            </span>
            <span className="text-sm tracking-widest uppercase group-hover:pl-2 transition-all duration-500">
              Contact
            </span>
            {isActive('/contact') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
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