import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="fixed w-full top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.18)] border-b border-gray-800/70 py-3 transition-all duration-300" id="header">
            <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6">
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-bold tracking-tight shrink-0">
                    <span className="text-blue-500">&lt;</span>
                    <span className="text-white hover:text-blue-400 transition-colors duration-300">Dev</span>
                    <span className="text-blue-500">/&gt;</span>
                </a>
                
                <nav className="hidden xl:flex items-center space-x-1">
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="nav-link text-gray-300">About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="nav-link text-gray-300">Skills</a>
                    <a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="nav-link text-gray-300">Education</a>
                    <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="nav-link text-gray-300">Experience</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="nav-link text-gray-300">Projects</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-link text-gray-300">Services</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link text-gray-300">Contact</a>
                </nav>
                
                <div className="flex items-center space-x-3">
                    <button 
                        onClick={toggleMobileMenu} 
                        className="xl:hidden w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-gray-200 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                        aria-label="Toggle Menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="xl:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-slate-800/95 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                    <div className="px-3 py-3 space-y-1">
                        <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block nav-link text-gray-300">About</a>
                        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="block nav-link text-gray-300">Skills</a>
                        <a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="block nav-link text-gray-300">Education</a>
                        <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="block nav-link text-gray-300">Experience</a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="block nav-link text-gray-300">Projects</a>
                        <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block nav-link text-gray-300">Services</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block nav-link text-gray-300">Contact</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
