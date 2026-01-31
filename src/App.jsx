import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col md:flex-row relative bg-black text-white font-['Manrope',sans-serif] overflow-x-hidden">
        {/* Architectural Grid Lines (Background decoration) - Hidden on mobile */}
        <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
          <div className="w-full h-full max-w-[1400px] mx-auto relative border-l border-r border-white/5">
            <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/5"></div>
            <div className="absolute left-[60%] top-0 bottom-0 w-px bg-white/5"></div>
          </div>
        </div>
        
        <Sidebar />
        
        <main className="flex-1 pt-[65px] md:pt-0 md:ml-64 relative z-10 w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
