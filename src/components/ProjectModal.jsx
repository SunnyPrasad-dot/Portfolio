import { useState, useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Reset slide when project changes
    useEffect(() => {
        // Prevent body scroll when modal is open
        if (project) {
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [project]);

    if (!project) return null;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % project.images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div 
            className="fixed top-0 left-0 w-full h-full bg-black/85 z-[2000] flex justify-center items-center opacity-100 transition-opacity duration-300 pointer-events-auto"
            onClick={onClose}
        >
            <div 
                className="modal-content w-[90%] max-w-[900px] bg-gray-800 rounded-xl overflow-hidden relative max-h-[90vh] flex flex-col shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header px-6 py-5 border-b border-gray-700 flex justify-between items-center bg-gray-800 z-10 w-full">
                    <h2 className="text-2xl font-semibold text-gray-50 font-poppins">{project.title}</h2>
                    <button 
                        className="bg-transparent border-none text-2xl cursor-pointer text-gray-400 hover:text-white transition-colors p-1"
                        onClick={onClose}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="p-4 sm:p-6 overflow-y-auto w-full custom-scrollbar">
                    <div className="mb-6 w-full">
                        <div className="overflow-hidden rounded-lg w-full bg-gray-900 border border-gray-700">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {project.images.map((img, idx) => (
                                    <img 
                                        key={idx} 
                                        src={img} 
                                        alt={`${project.title} - ${idx + 1}`} 
                                        className="w-full h-[220px] sm:h-[280px] md:h-[400px] object-cover flex-shrink-0" 
                                    />
                                ))}
                            </div>
                        </div>
                        
                        {project.images.length > 1 && (
                            <div className="relative w-full flex justify-between mt-3 px-2">
                                <button className="bg-blue-500/15 border-none w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer text-blue-300 hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50" onClick={prevSlide}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <span className="text-gray-400 text-sm font-medium self-center">
                                    {currentSlide + 1} / {project.images.length}
                                </span>
                                <button className="bg-blue-500/15 border-none w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer text-blue-300 hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50" onClick={nextSlide}>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <div className="project-details text-left w-full">
                        <h3 className="text-lg font-semibold mb-2 text-gray-200">Project Overview</h3>
                        <p className="mb-4 text-gray-400 text-sm leading-relaxed">{project.description}</p>
                        
                        <h3 className="text-lg font-semibold mb-2 text-gray-200 mt-6">Technologies Used</h3>
                        <p className="mb-4 text-gray-400 text-sm leading-relaxed font-mono bg-gray-900/50 p-3 rounded-lg border border-gray-700">{project.technologies}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700 w-full">
                            <div><span className="text-[0.8rem] text-gray-500 block mb-1">Client</span><span className="font-medium text-gray-200 text-[0.9rem] flex items-center gap-2"><i className="fas fa-building text-blue-400"></i>{project.client}</span></div>
                            <div><span className="text-[0.8rem] text-gray-500 block mb-1">Date</span><span className="font-medium text-gray-200 text-[0.9rem] flex items-center gap-2"><i className="far fa-calendar-alt text-green-400"></i>{project.date}</span></div>
                            <div><span className="text-[0.8rem] text-gray-500 block mb-1">Role</span><span className="font-medium text-gray-200 text-[0.9rem] flex items-center gap-2"><i className="fas fa-user-tag text-purple-400"></i>{project.role}</span></div>
                            <div><span className="text-[0.8rem] text-gray-500 block mb-1">Category</span><span className="font-medium text-gray-200 text-[0.9rem] flex items-center gap-2"><i className="fas fa-folder-open text-orange-400"></i>{project.categoryLabel}</span></div>
                        </div>
                    </div>
                </div>
                
                <div className="modal-footer px-6 py-4 border-t border-gray-700 flex justify-end gap-3 bg-gray-800 z-10 w-full mt-auto">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary px-4 py-2 rounded-lg text-sm bg-gray-700 text-white hover:bg-gray-600 transition flex items-center"
                        >
                            <i className="fab fa-github mr-2 text-lg"></i> View Code
                        </a>
                    ) : (
                        <span className="btn-secondary px-4 py-2 rounded-lg text-sm bg-gray-700/50 text-gray-400 transition flex items-center cursor-not-allowed">
                            <i className="fab fa-github mr-2 text-lg"></i> View Code
                        </span>
                    )}
                    {project.liveDemo ? (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-4 py-2 rounded-lg text-sm flex items-center bg-blue-500 text-white hover:bg-blue-400 transition"
                        >
                            <i className="fas fa-external-link-alt mr-2 text-sm"></i> Live Demo
                        </a>
                    ) : (
                        <span className="btn-primary px-4 py-2 rounded-lg text-sm flex items-center bg-blue-500/50 text-gray-300 cursor-not-allowed">
                            <i className="fas fa-external-link-alt mr-2 text-sm"></i> Live Demo
                        </span>
                    )}
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent; 
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #4b5563; 
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b7280; 
                }
            `}</style>
        </div>
    );
};

export default ProjectModal;
