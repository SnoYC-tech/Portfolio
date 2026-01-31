import React from 'react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Strategy',
      tagline: 'Foundation & Vision',
      description: 'Before a single pixel is designed or line of code is written, we establish the strategic foundation that will guide every decision.',
      capabilities: [
        'Digital Strategy & Planning',
        'Brand Positioning',
        'User Research & Analysis',
        'Competitive Analysis',
        'Technical Architecture Planning',
        'Roadmap Development'
      ],
      deliverables: [
        'Strategic Brief',
        'User Personas',
        'Information Architecture',
        'Technical Specifications',
        'Project Roadmap'
      ]
    },
    {
      id: '02',
      title: 'Design',
      tagline: 'Form Meets Function',
      description: 'We craft digital experiences that are both visually striking and intuitively functional, where aesthetics serve purpose.',
      capabilities: [
        'UI/UX Design',
        'Visual Identity Systems',
        'Interaction Design',
        'Responsive Design',
        'Design Systems',
        'Motion & Animation'
      ],
      deliverables: [
        'Wireframes & Prototypes',
        'High-Fidelity Mockups',
        'Design System Documentation',
        'Interactive Prototypes',
        'Style Guides'
      ]
    },
    {
      id: '03',
      title: 'Engineering',
      tagline: 'Building to Last',
      description: 'We engineer robust, scalable systems with clean code architecture that performs flawlessly and stands the test of time.',
      capabilities: [
        'Frontend Development',
        'Backend Development',
        'API Integration',
        'Performance Optimization',
        'Cloud Infrastructure',
        'DevOps & Deployment'
      ],
      deliverables: [
        'Production-Ready Code',
        'Technical Documentation',
        'Testing & Quality Assurance',
        'Deployment & Hosting',
        'Ongoing Support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center relative py-16 md:py-24 lg:pt-32 lg:pb-20 px-6 md:px-20 lg:px-32 border-b border-white/5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-8 md:w-12 h-px bg-[#2295f7]"></span>
            <span className="text-[#2295f7] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight mb-8 md:mb-12">
            COMPREHENSIVE<br />
            <span className="font-normal">DIGITAL</span><br />
            <span className="text-white/40">SERVICES</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg lg:text-xl font-light max-w-3xl leading-relaxed border-l border-[#2295f7]/30 pl-4 md:pl-6">
            Three core disciplines working in harmony. Each service is designed to complement 
            the others, creating a seamless workflow from concept to launch.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          className={`py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5 ${index % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Service Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-thin text-[#2295f7]">{service.id}</span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight">{service.title}</h2>
                </div>
                <p className="text-[#2295f7] text-xs md:text-sm tracking-[0.2em] uppercase">{service.tagline}</p>
              </div>
            </div>

            {/* Service Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/80">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-8 md:space-y-12">
                {/* Capabilities */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-6 md:w-8 h-px bg-white/20"></span>
                    Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {service.capabilities.map((capability, idx) => (
                      <div 
                        key={idx}
                        className="group flex items-start gap-3 p-3 md:p-4 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-500"
                      >
                        <span className="text-[#2295f7] mt-1">→</span>
                        <span className="text-sm md:text-base text-white/70 font-light lg:group-hover:text-white transition-colors duration-500">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-6 md:w-8 h-px bg-white/20"></span>
                    Deliverables
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {service.deliverables.map((deliverable, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-3 text-sm md:text-base text-white/60 font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-[#2295f7] rounded-full"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight mb-12 md:mb-16 lg:mb-20">
            OUR <span className="text-white/40">PROCESS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your vision, goals, and requirements. We align on objectives and success metrics.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Strategic roadmap creation with clear milestones, timelines, and deliverables defined.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Iterative development with regular check-ins, ensuring quality and alignment at every stage.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Smooth deployment with comprehensive testing, followed by ongoing support and optimization.'
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-4xl md:text-5xl font-thin text-[#2295f7]/20 mb-3 md:mb-4">{phase.step}</div>
                <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-white">{phase.title}</h3>
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">{phase.description}</p>
                
                {/* Connecting line (except for last item) - hidden on mobile */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight mb-4 md:mb-6">
              TECHNOLOGY <span className="text-white/40">STACK</span>
            </h2>
            <p className="text-sm md:text-base text-white/60 font-light max-w-2xl mx-auto px-4">
              We work with modern, battle-tested technologies that deliver performance, 
              scalability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              'React', 'Next.js', 'Vue.js', 'TypeScript',
              'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
              'AWS', 'Vercel', 'Docker', 'Git',
              'Figma', 'Tailwind CSS', 'Framer Motion', 'WebGL'
            ].map((tech, index) => (
              <div 
                key={index}
                className="group p-4 md:p-6 border border-white/10 lg:hover:border-[#2295f7]/50 transition-colors duration-500 text-center"
              >
                <span className="text-sm md:text-base text-white/70 font-light tracking-wide lg:group-hover:text-white transition-colors duration-500">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-6 md:mb-8">Ready to Start?</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-white mb-8 md:mb-12">
            Let's discuss your project
          </h2>
          <a
            href="/contact"
            className="inline-block text-xl md:text-2xl lg:text-3xl text-[#2295f7] border-b border-[#2295f7] pb-1 lg:hover:text-white lg:hover:border-white transition-colors duration-500 font-light"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
