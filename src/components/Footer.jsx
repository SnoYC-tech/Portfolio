import React from 'react';

const Footer = () => {
  return (
    <footer className="py-32 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <p className="text-white/40 text-sm tracking-widest uppercase mb-8">Next Phase</p>
        <h2 className="text-5xl md:text-8xl font-thin tracking-tight text-white mb-12">
          Ready to build?
        </h2>
        <a
          className="inline-block text-2xl md:text-3xl text-[#e6b319] border-b border-[#e6b319] pb-1 hover:text-white hover:border-white transition-colors duration-500 font-light"
          href="#"
        >
          Initiate Project
        </a>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-white/20 text-xs tracking-widest uppercase">
        <p>SnoYC © 2026</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a className="hover:text-[#e6b319] transition-colors" href="#">
            Instagram
          </a>
          <a className="hover:text-[#e6b319] transition-colors" href="#">
            LinkedIn
          </a>
          <a className="hover:text-[#e6b319] transition-colors" href="#">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;