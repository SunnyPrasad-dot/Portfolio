const skillGroups = [
    {
        title: 'Frontend Craft',
        icon: 'fas fa-laptop-code',
        accent: 'blue',
        summary: 'Interfaces that feel sharp, responsive, and easy to use.',
        focus: ['Component architecture', 'Responsive layouts', 'Stateful experiences'],
        skills: [
            { icon: 'fab fa-react', label: 'React' },
            { icon: 'fab fa-js-square', label: 'JavaScript' },
            { icon: 'fab fa-html5', label: 'HTML5' },
            { icon: 'fab fa-css3-alt', label: 'CSS3' },
            { icon: 'fab fa-bootstrap', label: 'Bootstrap' },
            { icon: 'fas fa-wind', label: 'Tailwind CSS' },
        ],
    },
    {
        title: 'Backend Logic',
        icon: 'fas fa-server',
        accent: 'emerald',
        summary: 'APIs, auth flows, and server-side structure for real products.',
        focus: ['REST endpoints', 'Authentication', 'Realtime features'],
        skills: [
            { icon: 'fab fa-node-js', label: 'Node.js' },
            { icon: 'fas fa-route', label: 'Express.js' },
            { icon: 'fas fa-lock', label: 'Auth' },
            { icon: 'fas fa-exchange-alt', label: 'REST APIs' },
            { icon: 'fas fa-bolt', label: 'GraphQL' },
            { icon: 'fas fa-plug', label: 'WebSockets' },
        ],
    },
    {
        title: 'Data Layer',
        icon: 'fas fa-database',
        accent: 'amber',
        summary: 'Schemas, storage, and data access patterns for MERN apps.',
        focus: ['Document models', 'Relational queries', 'Cloud data'],
        skills: [
            { icon: 'fas fa-leaf', label: 'MongoDB' },
            { icon: 'fas fa-database', label: 'MySQL' },
            { icon: 'fas fa-fire', label: 'Firebase' },
            { icon: 'fas fa-table', label: 'Redis' },
            { icon: 'fas fa-project-diagram', label: 'Mongoose' },
        ],
    },
    {
        title: 'Developer Tools',
        icon: 'fas fa-tools',
        accent: 'purple',
        summary: 'Daily tooling for shipping, testing, debugging, and collaboration.',
        focus: ['Version control', 'API testing', 'Deployment flow'],
        skills: [
            { icon: 'fab fa-git-alt', label: 'Git' },
            { icon: 'fab fa-github', label: 'GitHub' },
            { icon: 'fas fa-code-branch', label: 'CI/CD' },
            { icon: 'fas fa-laptop-code', label: 'VS Code' },
            { icon: 'fas fa-terminal', label: 'Command Line' },
            { icon: 'fas fa-paper-plane', label: 'Postman' },
        ],
    },
];

const accentStyles = {
    blue: {
        icon: 'bg-blue-600/15 text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.12)]',
        border: 'hover:border-blue-400/50',
        chip: 'border-blue-400/20 bg-blue-400/10 text-blue-100',
        line: 'from-blue-400/70',
    },
    emerald: {
        icon: 'bg-emerald-600/15 text-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.12)]',
        border: 'hover:border-emerald-400/50',
        chip: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100',
        line: 'from-emerald-400/70',
    },
    amber: {
        icon: 'bg-amber-600/15 text-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.12)]',
        border: 'hover:border-amber-400/50',
        chip: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
        line: 'from-amber-300/70',
    },
    purple: {
        icon: 'bg-purple-600/15 text-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.12)]',
        border: 'hover:border-purple-400/50',
        chip: 'border-purple-400/20 bg-purple-400/10 text-purple-100',
        line: 'from-purple-400/70',
    },
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 border-t border-gray-800 relative">
            <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <h2 className="section-heading text-center mx-auto mb-5 text-white" data-aos="fade-up">My Skills</h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14" data-aos="fade-up" data-aos-delay="80">
                    A practical toolkit organized around how I build full-stack web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {skillGroups.map((group, groupIndex) => {
                        const style = accentStyles[group.accent];

                        return (
                            <article
                                key={group.title}
                                className={`skill-card bg-slate-800/90 p-6 rounded-xl shadow-xl border border-slate-700/50 ${style.border} transition-all duration-300 hover:-translate-y-2 group`}
                                data-aos="fade-up"
                                data-aos-delay={groupIndex * 100}
                            >
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <div className={`w-12 h-12 rounded-lg ${style.icon} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <i className={`${group.icon} text-xl`}></i>
                                        </div>
                                        <h3 className="mt-4 text-xl font-semibold text-white tracking-wide">{group.title}</h3>
                                    </div>
                                    <span className="text-xs uppercase tracking-[0.22em] text-slate-500">Toolkit</span>
                                </div>

                                <p className="text-sm leading-relaxed text-gray-400 mb-5">{group.summary}</p>

                                <div className="space-y-3 mb-6">
                                    {group.focus.map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className={`h-px w-8 bg-gradient-to-r ${style.line} to-transparent`}></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span key={skill.label} className={`skill-chip ${style.chip}`}>
                                            <i className={skill.icon}></i>
                                            {skill.label}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
