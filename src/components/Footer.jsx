import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ hideCTA = false }) => {
  return (
    <footer className={hideCTA ? "py-16 px-6 md:px-20 lg:px-32" : "py-32 px-6 md:px-20 lg:px-32"}>
      {!hideCTA && (
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-8">Next Phase</p>
          <h2 className="text-5xl md:text-8xl font-thin tracking-tight text-white mb-12">
            Ready to build?
          </h2>
          <Link
            className="inline-block text-2xl md:text-3xl text-[#2295f7] border-b border-[#2295f7] pb-1 hover:text-white hover:border-white transition-colors duration-500 font-light"
            to="/contact"
          >
            Initiate Project
          </Link>
        </div>
      )}
      
      <div className={`max-w-7xl mx-auto ${!hideCTA ? 'mt-32' : ''} pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-white/20 text-xs tracking-widest uppercase`}>
        <p>SnoYC © 2026</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a className="hover:text-[#2295f7] transition-colors" href="https://www.instagram.com/snoyc.tech/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="hover:text-[#2295f7] transition-colors" href="https://www.linkedin.com/in/snoyc/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;