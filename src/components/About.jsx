import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const teamMembers = [
        {
            name: "Shubham",
            role: "CEO",
            bio: "Visionary leader driving digital excellence. Founded the studio to transform businesses through strategic web solutions and innovative technology.",
            expertise: ["Digital Strategy", "Business Development", "Web Architecture"],
            image: "/Team/Shubham.webp"
        },
        {
            name: "Atharva",
            role: "CFO",
            bio: "Strategic financial leader ensuring sustainable growth and operational excellence. Drives business efficiency while maintaining quality standards.",
            expertise: ["Financial Strategy", "Business Operations", "Project Management"],
            image: "/Team/Atharv.webp"
        },
        {
            name: "Devendra",
            role: "Senior Developer",
            bio: "Full-stack architect with a passion for performance. Builds systems that scale seamlessly and elegantly.",
            expertise: ["React", "Node.js", "Cloud Architecture"],
            image: "/Team/Devendra.webp"
        },
        {
            name: "Ajinkya",
            role: "Developer",
            bio: "Innovative problem solver with a keen eye for detail. Transforms complex challenges into elegant solutions.",
            expertise: ["JavaScript", "React", "API Development"],
            image: "/Team/Ajinkya.webp"
        },
        {
            name: "Saleel",
            role: "Developer",
            bio: "Creative developer passionate about building seamless user experiences. Brings ideas to life with clean code.",
            expertise: ["Frontend", "UI/UX", "Performance"],
            image: "/Team/Saleel.webp"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */ }
            <section className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center relative py-16 md:py-24 lg:pt-32 lg:pb-20 px-6 md:px-20 lg:px-32 border-b border-white/5">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
                        <span className="w-8 md:w-12 h-px bg-[#2295f7]"></span>
                        <span className="text-[#2295f7] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                            About Us
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight mb-8 md:mb-12">
                        SMALL TEAM,<br />
                        <span className="font-normal">BIG IDEAS</span>
                    </h1>
                    <p className="text-white/60 text-base md:text-lg lg:text-xl font-light max-w-3xl leading-relaxed border-l border-[#2295f7]/30 pl-4 md:pl-6">
                        We're a tight-knit collective of three specialists who believe in quality over quantity.
                        Every project receives our undivided attention, strategic thinking, and meticulous execution.
                    </p>
                </div>
            </section>

            {/* Mission Statement */ }
            <section className="py-16 md:py-20 lg:py-24 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                            Our Mission
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6 md:mb-8 text-white/90">
                            To build digital products that don't just exist, but <span className="text-[#2295f7]">matter</span>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-sm md:text-base text-white/60 leading-relaxed font-light">
                            <p>
                                We reject the agency model of endless meetings and bloated teams.
                                Instead, we operate as a lean, focused unit where every member brings
                                exceptional expertise to the table.
                            </p>
                            <p>
                                Our size is our strength. It allows us to move fast, think deeply,
                                and maintain the highest standards of craft without compromise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */ }
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="flex items-center gap-4 mb-12 md:mb-16 lg:mb-20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="w-8 md:w-16 h-px bg-white/20"></span>
                        <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                            The Team
                        </h2>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        { teamMembers.map((member, index) => (
                            <motion.div 
                                key={ index } 
                                className="group"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6 }
                                    }
                                }}
                            >
                                {/* Member Info */ }
                                <div className="flex flex-col gap-2 md:gap-3">
                                    <h3 className="text-xl md:text-2xl font-light lg:group-hover:text-[#2295f7] transition-colors duration-500">
                                        { member.name }
                                    </h3>
                                    <p className="text-[#2295f7] text-xs tracking-widest uppercase">
                                        { member.role }
                                    </p>
                                    <p className="text-white/60 text-sm font-light leading-relaxed mt-1 md:mt-2">
                                        { member.bio }
                                    </p>

                                    {/* Expertise Tags */ }
                                    <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                                        { member.expertise.map((skill, skillIndex) => (
                                            <span
                                                key={ skillIndex }
                                                className="text-[10px] tracking-wider uppercase px-2 md:px-3 py-1 border border-white/20 text-white/50 lg:hover:border-[#2295f7]/50 lg:hover:text-[#2295f7] transition-colors duration-500"
                                            >
                                                { skill }
                                            </span>
                                        )) }
                                    </div>
                                </div>
                            </motion.div>
                        )) }
                    </motion.div>
                </div>
            </section>

            {/* Values Section */ }
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="text-3xl md:text-5xl lg:text-6xl font-thin tracking-tight mb-12 md:mb-16 lg:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        CORE <span className="text-white/40">VALUES</span>
                    </motion.h2>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        <motion.div 
                            className="border-l border-[#2295f7]/30 pl-6 md:pl-8"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6 }
                                }
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-white">Craftsmanship</h3>
                            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                                We treat every project as a craft, not a commodity. Attention to detail
                                isn't optional—it's the foundation of everything we build.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="border-l border-white/20 pl-6 md:pl-8"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6 }
                                }
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-white">Clarity</h3>
                            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                                Complex problems deserve simple solutions. We cut through noise to
                                deliver experiences that are intuitive and purposeful.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="border-l border-white/20 pl-6 md:pl-8"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6 }
                                }
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-white">Collaboration</h3>
                            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                                Your vision is our blueprint. We work alongside you as partners,
                                not vendors, ensuring alignment at every stage.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="border-l border-white/20 pl-6 md:pl-8"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6 }
                                }
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-white">Commitment</h3>
                            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                                We take on fewer projects to deliver more value. When we commit,
                                we see it through with unwavering dedication.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
