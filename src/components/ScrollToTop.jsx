import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            id="scroll-to-top"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer z-[100] shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 border-none hover:bg-blue-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up text-lg"></i>
        </button>
    );
};

export default ScrollToTop;
