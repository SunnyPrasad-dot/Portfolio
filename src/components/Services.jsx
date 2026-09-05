const services = [
    {
        icon: 'fas fa-layer-group',
        title: 'Frontend Web Apps',
        description: 'Responsive React interfaces with clean layouts, reusable components, and smooth user flows.',
        accent: 'blue',
        deliverables: ['React UI', 'Responsive screens', 'Reusable sections'],
    },
    {
        icon: 'fas fa-server',
        title: 'Backend & APIs',
        description: 'Node.js and Express APIs with auth, validation, database integration, and business logic.',
        accent: 'emerald',
        deliverables: ['REST APIs', 'Auth flows', 'MongoDB models'],
    },
    {
        icon: 'fas fa-gauge-high',
        title: 'Performance Cleanup',
        description: 'Improve slow pages, broken layouts, mobile spacing, and details that make an app feel unfinished.',
        accent: 'amber',
        deliverables: ['Speed fixes', 'Bug cleanup', 'Mobile polish'],
    },
    {
        icon: 'fas fa-wand-magic-sparkles',
        title: 'Portfolio & UI Polish',
        description: 'Modern dark UI, sharper sections, better spacing, and clearer presentation for your work.',
        accent: 'purple',
        deliverables: ['Visual refresh', 'Section redesign', 'Interaction polish'],
    },
];

const accentStyles = {
    blue: 'border-blue-400/25 bg-blue-400/10 text-blue-200',
    emerald: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
    amber: 'border-amber-300/25 bg-amber-300/10 text-amber-100',
    purple: 'border-purple-400/25 bg-purple-400/10 text-purple-200',
};

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-900 relative border-t border-gray-800">
            <div className="absolute right-0 top-1/2 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="services-board" data-aos="fade-up">
                    <div className="services-intro">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                            <i className="fas fa-cubes"></i>
                            Build Menu
                        </span>
                        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white leading-tight">What I Can Build</h2>
                        <p className="mt-4 text-gray-400 leading-relaxed">
                            Focused web development work for portfolios, dashboards, full-stack apps, and existing projects that need a cleaner finish.
                        </p>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="services-mini-stat">
                                <strong>UI</strong>
                                <span>React</span>
                            </div>
                            <div className="services-mini-stat">
                                <strong>API</strong>
                                <span>Node</span>
                            </div>
                            <div className="services-mini-stat">
                                <strong>DB</strong>
                                <span>Mongo</span>
                            </div>
                        </div>

                        <a href="#contact" className="btn-primary mt-7 justify-center">
                            <i className="fas fa-paper-plane mr-2"></i>Start a Project
                        </a>
                    </div>

                    <div className="services-list">
                        {services.map((service, index) => (
                            <article key={service.title} className="service-row group" data-aos="fade-up" data-aos-delay={index * 80}>
                                <div className={`service-icon ${accentStyles[service.accent]}`}>
                                    <i className={service.icon}></i>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                        <i className="fas fa-arrow-right text-slate-600 transition-colors duration-300 group-hover:text-blue-300"></i>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {service.deliverables.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
