const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <h2 className="section-heading text-center mx-auto mb-16 text-white" data-aos="fade-up">About Me</h2>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3" data-aos="fade-right">
                        <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                            {/* Assuming Photo.1.jpg is copied to public/ */}
                            <img src="/Photo.1.jpg" alt="Sunny Prasad" className="rounded-lg shadow-2xl object-cover h-96 w-full object-center relative border-2 border-gray-800" />
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3 text-left" data-aos="fade-left">
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">My Journey</h3>
                        <p className="text-gray-400 mb-5 leading-relaxed text-lg">
                           I'm a passionate MERN Stack Developer focused on building modern web applications using React, Node.js, Express.js and MongoDB.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            I enjoy solving real-world problems through clean code, responsive design, and scalable backend architecture. Currently improving my skills through personal projects and full-stack application development.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors border border-transparent hover:border-gray-700">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                    <i className="fas fa-code text-blue-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Clean Code</h4>
                                    <p className="text-sm text-gray-500">Maintainable &amp; efficient</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors border border-transparent hover:border-gray-700">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                    <i className="fas fa-users text-green-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Collaborative</h4>
                                    <p className="text-sm text-gray-500">Team player &amp; communicator</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors border border-transparent hover:border-gray-700">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                    <i className="fas fa-lightbulb text-purple-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Problem Solver</h4>
                                    <p className="text-sm text-gray-500">Analytical &amp; creative</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors border border-transparent hover:border-gray-700">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                                    <i className="fas fa-rocket text-amber-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Fast Learner</h4>
                                    <p className="text-sm text-gray-500">Adaptable &amp; curious</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-6">
                            {/* <a href="javascript:void(0)" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group transition-colors">
                                <span className="bg-blue-500/10 p-2 rounded-full group-hover:bg-blue-500/20 transition-colors"><i className="fas fa-file-alt"></i></span> Download Resume
                            </a> */}

                        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download="SunnyPrasad-Resume.pdf" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group transition-colors" >
                        <span className="bg-blue-500/10 p-2 rounded-full group-hover:bg-blue-500/20 transition-colors">
                            <i className="fas fa-file-alt"></i>
                        </span>
                        Download Resume
                        </a>

                            <a href="#contact" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium group transition-colors">
                                <span className="bg-purple-500/10 p-2 rounded-full group-hover:bg-purple-500/20 transition-colors"><i className="fas fa-envelope"></i></span> Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
