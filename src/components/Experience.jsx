const responsibilities = [
    'Developed responsive user interfaces using React.js.',
    'Built and integrated RESTful APIs using Node.js and Express.js.',
    'Worked with MongoDB databases and data management.',
    'Implemented CRUD operations and authentication features.',
    'Collaborated with team members during live project development.',
    'Used Git and GitHub for version control and project collaboration.',
    'Participated in debugging, testing, and deployment processes.',
    'Built multiple frontend and full-stack practice projects to strengthen development skills.',
];

const projectHighlights = [
    { value: '01', label: 'Live team project completed' },
    { value: '02', label: 'Second live project near completion' },
    { value: '03+', label: 'Personal full-stack builds' },
];

const skillsUsed = [
    'React.js',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Git',
    'GitHub',
    'REST APIs',
    'Tailwind CSS',
    'Responsive Design',
];

const workflow = [
    { icon: 'fas fa-pen-ruler', title: 'Build UI', text: 'Convert layouts into clean, responsive React interfaces.' },
    { icon: 'fas fa-server', title: 'Connect APIs', text: 'Wire frontend flows to Express routes and server logic.' },
    { icon: 'fas fa-database', title: 'Manage Data', text: 'Model, store, and retrieve application data with MongoDB.' },
    { icon: 'fas fa-bug-slash', title: 'Ship & Fix', text: 'Debug, test, review, and improve project features with the team.' },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-800 border-t border-gray-700/50 relative overflow-hidden">
            <div className="absolute right-0 top-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <h2 className="section-heading text-center mx-auto mb-4 text-white" data-aos="fade-up">Experience</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="80">
                    Hands-on work across live projects, team collaboration, and full-stack application development.
                </p>

                <div className="experience-board max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="120">
                    <div className="experience-hero">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
                                <i className="fas fa-briefcase"></i>
                                2025 - Present
                            </span>
                            <h3 className="mt-5 text-3xl md:text-4xl font-bold text-white leading-tight">MERN Stack Developer</h3>
                            <p className="mt-2 text-blue-300 font-medium">Live Projects & Team Collaboration</p>
                            <p className="mt-5 text-gray-400 leading-relaxed max-w-3xl">
                                Worked collaboratively on real-world web applications, contributing to frontend development, backend integration, database management, API development, debugging, testing, and team-based project workflows.
                            </p>
                        </div>

                        <div className="experience-signal">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]"></span>
                            Project Experience
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 mt-8">
                        <div className="space-y-4">
                            {projectHighlights.map((item) => (
                                <div key={item.label} className="experience-metric">
                                    <span>{item.value}</span>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {workflow.map((item) => (
                                <div key={item.title} className="experience-workflow">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300 border border-blue-400/20">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 mt-6">
                        <div className="experience-list">
                            <h4>
                                <i className="fas fa-list-check text-blue-400"></i>
                                What I worked on
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {responsibilities.map((item) => (
                                    <div key={item} className="experience-task">
                                        <span></span>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="experience-stack">
                            <h4>
                                <i className="fas fa-code text-purple-300"></i>
                                Stack Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillsUsed.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
