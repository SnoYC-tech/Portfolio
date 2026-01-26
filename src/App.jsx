import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative bg-black text-white font-['Manrope',sans-serif] overflow-x-hidden">
      {/* Architectural Grid Lines (Background decoration) */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <div className="w-full h-full max-w-[1400px] mx-auto relative border-l border-r border-white/5">
          <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/5"></div>
          <div className="absolute left-[60%] top-0 bottom-0 w-px bg-white/5"></div>
        </div>
      </div>
      
      <Sidebar />
      
      <main className="flex-1 md:ml-64 relative z-10 w-full overflow-hidden">
        <Hero />
        <Philosophy />
        <Expertise />
        <Works />
        <Footer />
      </main>
    </div>
  );
};

export default App;
