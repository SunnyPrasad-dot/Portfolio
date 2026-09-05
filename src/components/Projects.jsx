import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const getProjectTypeClass = (type) => {
        switch (type) {
            case 'Frontend':
                return 'bg-orange-500 border-orange-600 text-white';
            case 'Fullstack':
                return 'bg-emerald-500 border-emerald-600 text-white';
            case 'Mobile App':
                return 'bg-yellow-500 border-yellow-600 text-slate-900';
            default:
                return 'bg-blue-500 border-blue-600 text-white';
        }
    };

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category?.toLowerCase() === filter);

    return (
        <section id="projects" className="py-20 bg-gray-800 border-t border-gray-700/50">
            <div className="container mx-auto max-w-7xl px-6">
                <h2 className="section-heading text-center mx-auto mb-4" data-aos="fade-up">My Projects</h2>
                <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">Check out some of my latest work and personal projects.</p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    <button 
                        className={`filter-btn shadow-sm ${filter === 'all' ? 'active bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'hover:bg-gray-700'}`} 
                        onClick={() => setFilter('all')}
                    >All</button>
                    <button 
                        className={`filter-btn shadow-sm ${filter === 'professional' ? 'active bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'hover:bg-gray-700'}`} 
                        onClick={() => setFilter('professional')}
                    >Professional</button>
                    <button 
                        className={`filter-btn shadow-sm ${filter === 'innovative' ? 'active bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'hover:bg-gray-700'}`} 
                        onClick={() => setFilter('innovative')}
                    >Innovative</button>
                    <button 
                        className={`filter-btn shadow-sm ${filter === 'collaborative' ? 'active bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'hover:bg-gray-700'}`} 
                        onClick={() => setFilter('collaborative')}
                    >Collaborative</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid" data-aos="fade-up">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card flex flex-col h-full max-h-[520px] bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] group relative overflow-hidden cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="project-image relative overflow-hidden h-44">
                                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                            </div>
                            <div className="project-content p-4 flex flex-col flex-grow relative z-10 -mt-4 bg-gray-900/95 backdrop-blur-sm rounded-t-2xl mx-1 pt-4 border-t border-blue-500/20">
                                <div className="project-tags flex flex-wrap gap-2 mb-2">
                                    {project.projectType && (
                                        <span className={`project-type-label text-[0.7rem] px-3 py-1 rounded-full border font-medium ${getProjectTypeClass(project.projectType)}`}>
                                            {project.projectType}
                                        </span>
                                    )}
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag bg-gray-800 text-blue-400 text-[0.7rem] px-3 py-1 rounded-full border border-gray-700 font-medium">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title text-xl font-bold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors">{project.title}</h3>
                                <p className="project-desc text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-4">{project.description}</p>
                                <div className="project-links flex justify-between items-center pt-3 border-t border-gray-800 mt-auto">
                                    <button 
                                        className="view-project text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center transition-colors bg-transparent border-none p-0 cursor-pointer group-hover:translate-x-1 duration-300" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProject(project);
                                        }}
                                    >
                                        <i className="fas fa-eye mr-2"></i> View Details
                                    </button>
                                    {project.liveDemo ? (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white font-medium text-sm flex items-center transition-colors no-underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                                        </a>
                                    ) : (
                                        <span className="text-gray-500 font-medium text-sm flex items-center">
                                            <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default Projects;
