import { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setWidth(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            id="progress-bar" 
            className="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-150 ease-out"
            style={{ width: `${width}%` }}
        ></div>
    );
};

export default ProgressBar;
