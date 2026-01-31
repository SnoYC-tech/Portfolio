import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <header className="md:hidden w-full fixed top-0 left-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/logo.webp" alt="ARCH Logo" className="h-10 w-auto object-contain" />
          </Link>
          <button
            className="text-[#2295f7] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Drawer */}
        <div className={`absolute top-[65px] left-0 right-0 bottom-0 bg-black border-t border-white/10 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="flex flex-col p-6 gap-2">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`flex items-center gap-4 px-4 py-4 transition-all duration-300 ${
                isActive('/') 
                  ? 'text-[#2295f7] bg-white/5' 
                  : 'text-white/80'
              }`}
            >
              <span className="text-xs font-medium tracking-widest uppercase">01</span>
              <span className="text-base tracking-widest uppercase">Home</span>
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={`flex items-center gap-4 px-4 py-4 transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-[#2295f7] bg-white/5' 
                  : 'text-white/80'
              }`}
            >
              <span className="text-xs font-medium tracking-widest uppercase">02</span>
              <span className="text-base tracking-widest uppercase">About</span>
            </Link>
            <Link
              to="/services"
              onClick={handleLinkClick}
              className={`flex items-center gap-4 px-4 py-4 transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-[#2295f7] bg-white/5' 
                  : 'text-white/80'
              }`}
            >
              <span className="text-xs font-medium tracking-widest uppercase">02</span>
              <span className="text-base tracking-widest uppercase">Services</span>
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`flex items-center gap-4 px-4 py-4 transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-[#2295f7] bg-white/5' 
                  : 'text-white/80'
              }`}
            >
              <span className="text-xs font-medium tracking-widest uppercase">03</span>
              <span className="text-base tracking-widest uppercase">Contact</span>
            </Link>
          </nav>
          
          <div className="absolute bottom-8 left-6 flex flex-col gap-2">
            <div className="w-8 h-px bg-[#2295f7]/30"></div>
            <p className="text-white/30 text-[10px] tracking-wider uppercase">© 2026</p>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 h-screen fixed left-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-r border-white/10 flex-col justify-between p-8 shrink-0">
        <div className="flex flex-col gap-8">
          <Link to="/">
            <img src="/logo.webp" alt="ARCH Logo" className="h-12 w-auto object-contain" />
            <p className="text-white/40 text-[10px] tracking-[0.4em] mt-1 uppercase">SnoYC</p>
          </Link>
          <nav className="flex flex-col gap-6 mt-12">
            <Link
              to="/"
              className={`group flex items-center gap-4 transition-all duration-500 relative ${
                isActive('/') 
                  ? 'text-[#2295f7]' 
                  : 'text-white/80 lg:hover:text-[#2295f7] lg:hover:bg-white/5'
              } rounded-lg px-3 py-2 -mx-3`}
            >
              <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                isActive('/') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 lg:group-hover:opacity-100 -translate-x-2 lg:group-hover:translate-x-0'
              }`}>
                01
              </span>
              <span className="text-sm tracking-widest uppercase lg:group-hover:pl-2 transition-all duration-500">
                Home
              </span>
              {isActive('/') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
            </Link>
            <Link
              to="/about"
              className={`group flex items-center gap-4 transition-all duration-500 relative ${
                isActive('/about') 
                  ? 'text-[#2295f7]' 
                  : 'text-white/80 lg:hover:text-[#2295f7] lg:hover:bg-white/5'
              } rounded-lg px-3 py-2 -mx-3`}
            >
              <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                isActive('/about') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 lg:group-hover:opacity-100 -translate-x-2 lg:group-hover:translate-x-0'
              }`}>
                02
              </span>
              <span className="text-sm tracking-widest uppercase lg:group-hover:pl-2 transition-all duration-500">
                About
              </span>
              {isActive('/about') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
            </Link>
            <Link
              to="/services"
              className={`group flex items-center gap-4 transition-all duration-500 relative ${
                isActive('/services') 
                  ? 'text-[#2295f7]' 
                  : 'text-white/80 lg:hover:text-[#2295f7] lg:hover:bg-white/5'
              } rounded-lg px-3 py-2 -mx-3`}
            >
              <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                isActive('/services') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 lg:group-hover:opacity-100 -translate-x-2 lg:group-hover:translate-x-0'
              }`}>
                03
              </span>
              <span className="text-sm tracking-widest uppercase lg:group-hover:pl-2 transition-all duration-500">
                Services
              </span>
              {isActive('/services') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
            </Link>
            <Link
              to="/contact"
              className={`group flex items-center gap-4 transition-all duration-500 relative ${
                isActive('/contact') 
                  ? 'text-[#2295f7]' 
                  : 'text-white/80 lg:hover:text-[#2295f7] lg:hover:bg-white/5'
              } rounded-lg px-3 py-2 -mx-3`}
            >
              <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                isActive('/contact') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 lg:group-hover:opacity-100 -translate-x-2 lg:group-hover:translate-x-0'
              }`}>
                04
              </span>
              <span className="text-sm tracking-widest uppercase lg:group-hover:pl-2 transition-all duration-500">
                Contact
              </span>
              {isActive('/contact') && <span className="absolute left-0 w-1 h-full bg-[#2295f7] rounded-r"></span>}
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="w-8 h-px bg-[#2295f7]/30"></div>
          <p className="text-white/30 text-[10px] tracking-wider uppercase">© 2026</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;