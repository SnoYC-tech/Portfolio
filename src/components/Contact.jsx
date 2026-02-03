import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured. Please try again later.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
          to_name: 'SnoYC Team'
        },
        publicKey
      );

      console.log('EmailJS Response:', response);
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: error.text || 'Sorry, something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center relative py-16 md:py-24 lg:pt-32 lg:pb-20 px-6 md:px-20 lg:px-32 border-b border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-8 md:w-12 h-px bg-[#2295f7]"></span>
            <span className="text-[#2295f7] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight mb-8 md:mb-12">
            LET'S BUILD<br />
            <span className="font-normal">SOMETHING</span><br />
            <span className="text-white/40">REMARKABLE</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg lg:text-xl font-light max-w-3xl leading-relaxed border-l border-[#2295f7]/30 pl-4 md:pl-6">
            Have a project in mind? We're always interested in hearing about new opportunities 
            and collaborations. Let's start a conversation.
          </p>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section id='#form' className="py-16 md:py-20 lg:py-24 px-6 md:px-20 lg:px-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-14 lg:gap-16">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12">Contact Information</h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="group">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Email</h3>
                <a 
                  href="mailto:snoyc.tech@gmail.com" 
                  className="text-lg md:text-xl font-light text-white lg:hover:text-[#2295f7] transition-colors duration-500 inline-block break-all"
                >
                  snoyc.tech@gmail.com
                </a>
              </div>

              {/* <div className="group">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-lg md:text-xl font-light text-white lg:hover:text-[#2295f7] transition-colors duration-500 inline-block"
                >
                  +1 (234) 567-890
                </a>
              </div> */}

              <div className="group">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">Location</h3>
                <p className="text-lg md:text-xl font-light text-white/80">
                  Pune<br />
                  <span className="text-sm md:text-base text-white/50">Working Globally</span>
                </p>
              </div>

              <div className="pt-6 md:pt-8 border-t border-white/10">
                <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <a 
                    href="https://www.instagram.com/snoyc.tech/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 lg:hover:text-[#2295f7] transition-colors duration-500 text-sm tracking-widest uppercase"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/snoyc/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 lg:hover:text-[#2295f7] transition-colors duration-500 text-sm tracking-widest uppercase"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
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
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 md:py-4 text-white text-base md:text-lg font-light outline-none transition-colors duration-500"
                  style={{ fontSize: '16px' }}
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
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 md:py-4 text-white text-base md:text-lg font-light outline-none transition-colors duration-500"
                  style={{ fontSize: '16px' }}
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
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 md:py-4 text-white text-base md:text-lg font-light outline-none transition-colors duration-500"
                  style={{ fontSize: '16px' }}
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
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#2295f7] py-3 md:py-4 text-white text-base md:text-lg font-light outline-none transition-colors duration-500 resize-none"
                  placeholder="Tell us about your project..."
                  style={{ fontSize: '16px' }}
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-4 px-6 md:px-8 py-4 md:py-5 border border-[#2295f7] text-[#2295f7] lg:hover:bg-[#2295f7] lg:hover:text-black transition-all duration-500 text-sm tracking-[0.2em] uppercase font-medium w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <svg 
                    className="w-5 h-5 lg:group-hover:translate-x-1 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                {status.message && (
                  <p
                    className={`mt-4 text-sm font-light ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Response Time Section */}
      <motion.section 
        className="py-16 md:py-20 lg:py-24 px-6 md:px-20 lg:px-32 bg-white/[0.02]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-thin text-[#2295f7] mb-3 md:mb-4">1h</div>
            <p className="text-sm md:text-base text-white/60 font-light">
              Average response time for all inquiries
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-thin text-[#2295f7] mb-3 md:mb-4">100%</div>
            <p className="text-sm md:text-base text-white/60 font-light">
              Client satisfaction and project success rate
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-thin text-[#2295f7] mb-3 md:mb-4">3</div>
            <p className="text-sm md:text-base text-white/60 font-light">
              Dedicated experts working on your project
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
