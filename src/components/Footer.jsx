const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
                    <div className="md:col-span-2">
                        <a href="#hero" className="text-3xl font-bold tracking-tight mb-5 inline-block group" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                            <span className="text-blue-500 group-hover:text-blue-400 transition-colors">&lt;</span>
                            <span className="text-white group-hover:text-gray-200 transition-colors">Dev</span>
                            <span className="text-blue-500 group-hover:text-blue-400 transition-colors">/&gt;</span>
                        </a>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
                            A professional web developer specializing in creating engaging digital experiences with modern technologies and user-centered design. Built with React and Tailwind CSS.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/SunnyPrasad-dot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-gray-700">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sunny-prasad-dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-gray-700">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-gray-700">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-links">
                        <h4 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase text-sm">Quick Links</h4>
                        <ul className="space-y-3 pt-1">
                            <li><a href="#about" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>About Me</a></li>
                            <li><a href="#skills" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>Skills</a></li>
                            <li><a href="#education" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>Education</a></li>
                            <li><a href="#experience" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>Experience</a></li>
                            <li><a href="#projects" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>Projects</a></li>
                            <li><a href="#services" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>Services</a></li>
                            <li><a href="#contact" className="group"><i className="fas fa-chevron-right text-[10px] text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase text-sm">Contact Info</h4>
                        <ul className="space-y-4 text-gray-400 text-sm mt-1">
                            <li className="flex items-start gap-3 hover:text-gray-300 transition-colors cursor-default"><div className="mt-0.5 text-blue-500"><i className="fas fa-map-marker-alt"></i></div> Gujarat, Bharuch</li>
                            <li className="flex items-start gap-3 hover:text-gray-300 transition-colors cursor-default"><div className="mt-0.5 text-blue-500"><i className="fas fa-envelope"></i></div> prasadsunny.connect@gmail.com</li>
                            <li className="flex items-start gap-3 hover:text-gray-300 transition-colors cursor-default"><div className="mt-0.5 text-blue-500"><i className="fas fa-phone"></i></div> +91 7984431659</li>
                        </ul>
                    </div>
                </div>
                
                <div className="text-center flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Sunny Prasad. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm font-medium flex items-center">
                        Crafted with <i className="fas fa-heart text-red-500 mx-1.5 animate-pulse"></i> for the web.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
