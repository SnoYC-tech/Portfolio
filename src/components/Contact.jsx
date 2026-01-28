import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center relative pt-32 pb-20 px-6 md:px-20 lg:px-32 border-b border-white/5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-[#2295f7]"></span>
            <span className="text-[#2295f7] text-xs font-bold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight mb-12">
            LET'S BUILD<br />
            <span className="font-normal">SOMETHING</span><br />
            <span className="text-white/40">REMARKABLE</span>
          </h1>
          <p className="text-white/60 text-xl font-light max-w-3xl leading-relaxed border-l border-[#2295f7]/30 pl-6">
            Have a project in mind? We're always interested in hearing about new opportunities 
            and collaborations. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-6 md:px-20 lg:px-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-light mb-12">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Email</h3>
                <a 
                  href="mailto:snoyc.tech@gmail.com" 
                  className="text-xl font-light text-white hover:text-[#2295f7] transition-colors duration-500 inline-block"
                >
                  snoyc.tech@gmail.com
                </a>
              </div>

              {/* <div className="group">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-xl font-light text-white hover:text-[#2295f7] transition-colors duration-500 inline-block"
                >
                  +1 (234) 567-890
                </a>
              </div> */}

              <div className="group">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Location</h3>
                <p className="text-xl font-light text-white/80">
                  Pune<br />
                  <span className="text-base text-white/50">Working Globally</span>
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">Follow Us</h3>
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="text-white/50 hover:text-[#2295f7] transition-colors duration-500 text-sm tracking-widest uppercase"
                  >
                    Instagram
                  </a>
                  <a 
                    href="#" 
                    className="text-white/50 hover:text-[#2295f7] transition-colors duration-500 text-sm tracking-widest uppercase"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="#" 
                    className="text-white/50 hover:text-[#2295f7] transition-colors duration-500 text-sm tracking-widest uppercase"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-white/50 mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 text-white text-lg font-light outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-white/50 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 text-white text-lg font-light outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs tracking-[0.2em] uppercase text-white/50 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 text-white text-lg font-light outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-white/50 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 text-white text-lg font-light outline-none transition-colors duration-500 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-4 px-8 py-4 border border-[#2295f7] text-[#2295f7] hover:bg-[#2295f7] hover:text-black transition-all duration-500 text-sm tracking-[0.2em] uppercase font-medium"
                >
                  Send Message
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-24 px-6 md:px-20 lg:px-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <div className="text-5xl font-thin text-[#2295f7] mb-4">1h</div>
            <p className="text-white/60 font-light">
              Average response time for all inquiries
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl font-thin text-[#2295f7] mb-4">100%</div>
            <p className="text-white/60 font-light">
              Client satisfaction and project success rate
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-5xl font-thin text-[#2295f7] mb-4">3</div>
            <p className="text-white/60 font-light">
              Dedicated experts working on your project
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
