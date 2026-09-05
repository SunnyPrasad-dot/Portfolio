import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const typingRef = useRef(null);
    
    useEffect(() => {
        // GSAP Animations
        gsap.to(textRef.current, { 
            opacity: 1, 
            duration: 1, 
            scrollTrigger: { 
                trigger: '#hero', 
                start: 'top center', 
                toggleActions: 'play none none none' 
            } 
        });
        
        gsap.to(imageRef.current, { 
            opacity: 1, 
            duration: 1, 
            delay: 0.3, 
            scrollTrigger: { 
                trigger: '#hero', 
                start: 'top center', 
                toggleActions: 'play none none none' 
            } 
        });

        // Typing Effect
        const words = ['Web Developer', 'Mern Stack Dev', 'Frontend Developer', 'Backend Developer', 'Creative Coder'];
        let wi = 0, ci = 0, deleting = false, delay = 200;
        let typingTimeout;

        const type = () => {
            if (!typingRef.current) return;
            
            const w = words[wi];
            typingRef.current.textContent = deleting ? w.substring(0, ci - 1) : w.substring(0, ci + 1);
            deleting ? ci-- : ci++;
            
            if (!deleting && ci === w.length) { 
                deleting = true; 
                delay = 2000; 
            } else if (deleting && ci === 0) { 
                deleting = false; 
                wi = (wi + 1) % words.length; 
                delay = 500; 
            } else { 
                delay = deleting ? 80 : 180; 
            }
            
            typingTimeout = setTimeout(type, delay);
        };

        type();

        return () => clearTimeout(typingTimeout);
    }, []);

    // Generate random bubble sizes and positions based on original JS
    const generateBubbles = () => {
        return Array.from({ length: 6 }).map((_, i) => {
            const size = Math.random() * 70 + 30;
            const left = Math.random() * 80 + 10;
            const top = Math.random() * 80 + 10;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            return (
                <span 
                    key={`rand-${i}`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${left}%`,
                        top: `${top}%`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`
                    }}
                />
            );
        });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
            <div className="animated-bg">
                <span style={{ top: '10%', left: '20%', width: '150px', height: '150px', animationDuration: '15s' }}></span>
                <span style={{ top: '60%', left: '80%', width: '100px', height: '100px', animationDuration: '18s' }}></span>
                <span style={{ top: '30%', left: '60%', width: '80px', height: '80px', animationDuration: '12s' }}></span>
                <span style={{ top: '70%', left: '30%', width: '120px', height: '120px', animationDuration: '20s' }}></span>
                {generateBubbles()}
            </div>
            
            <div className="container mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                    <div className="w-full lg:w-1/2 opacity-0 text-left" ref={textRef} id="hero-text">
                        <div className="mb-6">
                            <span className="px-4 py-1.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium inline-block shadow-[0_0_15px_rgba(59,130,246,0.1)]">MERN Stack Developer</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight text-white tracking-tight">
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sunny Prasad</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center text-gray-300">
                            I'm a &nbsp;<span className="text-blue-400 border-r-2 border-blue-400 pr-[2px] animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" ref={typingRef}></span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            I Build Full Stack Web Applications &amp; Building responsive React frontends, scalable Node.js APIs, and MongoDB-powered applications.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                            <button onClick={() => document.querySelector('#projects').scrollIntoView({behavior: 'smooth'})} className="btn-primary">
                                <i className="fas fa-code mr-2"></i>View My Work
                            </button>
                            <button onClick={() => document.querySelector('#contact').scrollIntoView({behavior: 'smooth'})} className="btn-secondary">
                                <i className="fas fa-envelope mr-2"></i>Contact Me
                            </button>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <a href="https://github.com/SunnyPrasad-dot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sunny-prasad-dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 opacity-0 flex justify-center lg:justify-end mt-12 lg:mt-0" ref={imageRef} id="hero-image">
                        <div className="hero-showcase relative w-[min(24rem,calc(100vw-3rem))] sm:w-[30rem] lg:w-[34rem] aspect-square flex items-center justify-center group">
                            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-purple-600/20 blur-3xl"></div>
                            <div className="absolute inset-x-8 top-8 bottom-12 rounded-[2rem] border border-slate-700/80 bg-slate-950/70 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md rotate-[-4deg]"></div>
                            <div className="absolute inset-x-4 top-12 bottom-8 rounded-[2rem] border border-blue-400/20 bg-slate-900/80 shadow-[0_0_50px_rgba(59,130,246,0.2)] rotate-[3deg]"></div>

                            <div className="absolute left-4 right-4 top-14 sm:left-10 sm:right-10 sm:top-16 rounded-2xl border border-slate-700 bg-slate-950/95 overflow-hidden shadow-2xl rotate-[-2deg] hero-code-card">
                                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                                    <span className="ml-auto text-[11px] uppercase tracking-[0.2em] text-slate-500">app.jsx</span>
                                </div>
                                <div className="space-y-2 px-4 py-4 font-mono text-xs sm:text-sm">
                                    <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-500">=</span> <span className="text-emerald-300">'Sunny'</span>;</p>
                                    <p><span className="text-blue-300">stack</span>.<span className="text-yellow-300">build</span>(<span className="text-emerald-300">'MERN'</span>);</p>
                                    <p><span className="text-slate-500">// responsive, fast, clean</span></p>
                                </div>
                            </div>

                            <div className="relative z-10 w-[58%] aspect-square rounded-[2rem] bg-slate-950 p-3 border border-blue-400/30 shadow-[0_25px_70px_rgba(0,0,0,0.55)] group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="h-full w-full overflow-hidden rounded-[1.45rem] border border-slate-700 bg-gray-900">
                                    <img
                                        src="/Photo.3.jpg"
                                        alt="Sunny Prasad"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="hero-tech-pill hero-float absolute left-0 top-[42%] z-20 border-blue-400/40 text-blue-200">
                                <i className="fab fa-react text-blue-400"></i>
                                <span>React UI</span>
                            </div>
                            <div className="hero-tech-pill hero-float-delayed absolute right-0 top-[32%] z-20 border-emerald-400/40 text-emerald-200">
                                <i className="fab fa-node-js text-emerald-400"></i>
                                <span>Node API</span>
                            </div>
                            <div className="hero-tech-pill hero-float-slow absolute right-6 bottom-[20%] z-20 border-amber-300/40 text-amber-100">
                                <i className="fab fa-js-square text-amber-300"></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="absolute left-8 bottom-[17%] z-20 rounded-2xl border border-purple-400/30 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur-md hero-status-card">
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"></span>
                                    Available for projects
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                                    <i className="fas fa-code text-purple-300"></i>
                                    Full Stack Builds
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
