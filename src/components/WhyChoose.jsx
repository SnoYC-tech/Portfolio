import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  const reasons = [
    {
      number: "01",
      title: "Lightning Fast Delivery",
      description: "We move quickly without compromising quality. Your project launches faster than traditional agencies."
    },
    {
      number: "02",
      title: "Cost-Effective Solutions",
      description: "No overhead bloat. Direct access to top-tier talent at competitive rates that fit your budget."
    },
    {
      number: "03",
      title: "Personalized Attention",
      description: "Small team means you're not just another ticket. Every client gets our full focus and dedication."
    },
    {
      number: "04",
      title: "Modern Technology Stack",
      description: "We build with cutting-edge tools and frameworks ensuring your site is fast, scalable, and future-proof."
    },
    {
      number: "05",
      title: "End-to-End Service",
      description: "From concept to launch and beyond. Design, development, hosting, and maintenance—all under one roof."
    },
    {
      number: "06",
      title: "Results-Driven Approach",
      description: "We don't just build websites. We create digital experiences that drive conversions and grow your business."
    }
  ];

  return (
    <section id="why-choose" className="min-h-screen flex flex-col justify-center relative py-16 md:py-20 lg:py-24 px-6 md:px-20 lg:px-32 border-b border-white/5">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-8 md:w-12 h-px bg-primary"></span>
            <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin leading-[0.9] tracking-tight mb-6 md:mb-8">
            WHY CHOOSE <br />
            <span className="font-normal text-white">SnoYC</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light max-w-2xl leading-relaxed border-l border-primary/30 pl-4 md:pl-6">
            We're not your typical web agency. Here's what sets us apart and why clients choose to partner with us.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <div className="flex flex-col gap-4 border-l-2 border-white/10 pl-6 lg:hover:border-primary transition-colors duration-500">
                <span className="text-5xl md:text-6xl font-thin text-white/10 lg:group-hover:text-primary/20 transition-colors duration-500">
                  {reason.number}
                </span>
                <h3 className="text-xl md:text-2xl font-light text-white lg:group-hover:text-primary transition-colors duration-500">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
