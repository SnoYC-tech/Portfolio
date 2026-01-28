import React from 'react';

const About = () => {
    const teamMembers = [
        {
            name: "Shubham",
            role: "CEO",
            bio: "Visual storyteller merging art and function. Crafts interfaces that speak louder than words.",
            expertise: ["UI Design", "Motion Graphics", "3D Visualization"],
            image: "/Team/Shubham.webp"
        },
        {
            name: "Atharv",
            role: "CFO",
            bio: "10+ years shaping digital experiences. Previously led design at major tech firms before founding the studio.",
            expertise: ["Strategy", "Brand Identity", "User Experience"],
            image: "/Team/Atharv.webp"
        },
        {
            name: "Devendra",
            role: "Senior Developer",
            bio: "Full-stack architect with a passion for performance. Builds systems that scale seamlessly and elegantly.",
            expertise: ["React", "Node.js", "Cloud Architecture"],
            image: "/Team/Devendra.webp"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */ }
            <section className="min-h-[60vh] flex flex-col justify-center relative pt-32 pb-20 px-6 md:px-20 lg:px-32 border-b border-white/5">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="inline-flex items-center gap-3 mb-8">
                        <span className="w-12 h-px bg-[#2295f7]"></span>
                        <span className="text-[#2295f7] text-xs font-bold tracking-[0.2em] uppercase">
                            About Us
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight mb-12">
                        SMALL TEAM,<br />
                        <span className="font-normal">BIG IDEAS</span>
                    </h1>
                    <p className="text-white/60 text-xl font-light max-w-3xl leading-relaxed border-l border-[#2295f7]/30 pl-6">
                        We're a tight-knit collective of three specialists who believe in quality over quantity.
                        Every project receives our undivided attention, strategic thinking, and meticulous execution.
                    </p>
                </div>
            </section>

            {/* Mission Statement */ }
            <section className="py-24 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                            Our Mission
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-3xl md:text-4xl font-light leading-tight mb-8 text-white/90">
                            To build digital products that don't just exist, but <span className="text-[#2295f7]">matter</span>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/60 leading-relaxed font-light">
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
            <section className="py-32 px-6 md:px-20 lg:px-32 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-20">
                        <span className="w-16 h-px bg-white/20"></span>
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                            The Team
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        { teamMembers.map((member, index) => (
                            <div key={ index } className="group">
                                {/* Profile Image */ }
                                <div className="w-full aspect-square bg-neutral-900 relative overflow-hidden mb-6 border border-white/10 group-hover:border-[#2295f7]/50 transition-colors duration-700">
                                    <img
                                        src={ member.image }
                                        alt={ member.name }
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Overlay on hover */ }
                                    <div className="absolute inset-0 bg-[#2295f7]/0 group-hover:bg-[#2295f7]/10 transition-all duration-700"></div>
                                </div>

                                {/* Member Info */ }
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-light group-hover:text-[#2295f7] transition-colors duration-500">
                                        { member.name }
                                    </h3>
                                    <p className="text-[#2295f7] text-xs tracking-widest uppercase">
                                        { member.role }
                                    </p>
                                    <p className="text-white/60 text-sm font-light leading-relaxed mt-2">
                                        { member.bio }
                                    </p>

                                    {/* Expertise Tags */ }
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        { member.expertise.map((skill, skillIndex) => (
                                            <span
                                                key={ skillIndex }
                                                className="text-[10px] tracking-wider uppercase px-3 py-1 border border-white/20 text-white/50 hover:border-[#2295f7]/50 hover:text-[#2295f7] transition-colors duration-500"
                                            >
                                                { skill }
                                            </span>
                                        )) }
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            {/* Values Section */ }
            <section className="py-32 px-6 md:px-20 lg:px-32 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-20">
                        CORE <span className="text-white/40">VALUES</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="border-l border-[#2295f7]/30 pl-8">
                            <h3 className="text-2xl font-light mb-4 text-white">Craftsmanship</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                We treat every project as a craft, not a commodity. Attention to detail
                                isn't optional—it's the foundation of everything we build.
                            </p>
                        </div>

                        <div className="border-l border-white/20 pl-8">
                            <h3 className="text-2xl font-light mb-4 text-white">Clarity</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                Complex problems deserve simple solutions. We cut through noise to
                                deliver experiences that are intuitive and purposeful.
                            </p>
                        </div>

                        <div className="border-l border-white/20 pl-8">
                            <h3 className="text-2xl font-light mb-4 text-white">Collaboration</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                Your vision is our blueprint. We work alongside you as partners,
                                not vendors, ensuring alignment at every stage.
                            </p>
                        </div>

                        <div className="border-l border-white/20 pl-8">
                            <h3 className="text-2xl font-light mb-4 text-white">Commitment</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                We take on fewer projects to deliver more value. When we commit,
                                we see it through with unwavering dedication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */ }
            <section className="py-32 px-6 md:px-20 lg:px-32">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-white/40 text-sm tracking-widest uppercase mb-8">Let's Work Together</p>
                    <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-12">
                        Have a project in mind?
                    </h2>
                    <a
                        className="inline-block text-2xl md:text-3xl text-[#2295f7] border-b border-[#2295f7] pb-1 hover:text-white hover:border-white transition-colors duration-500 font-light"
                        href="#contact"
                    >
                        Start a Conversation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
