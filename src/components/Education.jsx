const educationItems = [
    {
        title: 'Diploma in Computer Engineering',
        label: 'Academic Foundation',
        meta: 'Completed',
        icon: 'fas fa-graduation-cap',
        accent: 'blue',
        description: 'Built a strong base in programming, software development, database management, networking, and computer science fundamentals.',
        highlights: ['Programming Fundamentals', 'Database Management Systems', 'Computer Networks', 'Operating Systems', 'Software Engineering', 'Web Technologies'],
    },
    {
        title: 'Full Stack Development Program',
        institute: 'Red & White Multimedia Education',
        label: 'Professional Training',
        meta: 'Completed Training',
        icon: 'fas fa-code',
        accent: 'purple',
        description: 'Completed intensive full-stack training focused on frontend development, backend APIs, databases, version control, and real-world project development.',
        highlights: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git & GitHub', 'REST APIs', 'Responsive Web Design'],
    },
];

const accentStyles = {
    blue: {
        badge: 'border-blue-400/30 bg-blue-400/10 text-blue-200',
        icon: 'from-blue-500 to-cyan-400 text-white shadow-[0_0_28px_rgba(59,130,246,0.24)]',
        glow: 'bg-blue-500/20',
    },
    purple: {
        badge: 'border-purple-400/30 bg-purple-400/10 text-purple-200',
        icon: 'from-purple-500 to-pink-400 text-white shadow-[0_0_28px_rgba(168,85,247,0.24)]',
        glow: 'bg-purple-500/20',
    },
};

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
            <div className="absolute left-0 top-1/3 -ml-24 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <h2 className="section-heading text-center mx-auto mb-4 text-white" data-aos="fade-up">Education</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="80">
                    My learning path, from computer engineering fundamentals to full-stack product development.
                </p>

                <div className="education-path max-w-6xl mx-auto">
                    {educationItems.map((education, index) => {
                        const style = accentStyles[education.accent];

                        return (
                            <article
                                key={education.title}
                                className="education-node"
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                <div className="education-marker">
                                    <span className={`absolute inset-0 rounded-2xl blur-xl ${style.glow}`}></span>
                                    <span className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${style.icon}`}>
                                        <i className={`${education.icon} text-2xl`}></i>
                                    </span>
                                </div>

                                <div className="education-panel">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                                        <div>
                                            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${style.badge}`}>
                                                {education.label}
                                            </span>
                                            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white leading-tight">{education.title}</h3>
                                            {education.institute && (
                                                <p className="mt-2 text-blue-300 font-medium">{education.institute}</p>
                                            )}
                                        </div>
                                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                                            <i className="fas fa-check-circle text-emerald-300"></i>
                                            {education.meta}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed mb-6">{education.description}</p>

                                    <div className="education-strip">
                                        {education.highlights.map((item) => (
                                            <span key={item} className="education-token">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
