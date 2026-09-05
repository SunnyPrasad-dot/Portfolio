import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: null }); // clear error as user types
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {};

    // Validation
    if (!formData.name.trim()) {
        newErrors.name = 'Please enter your name';
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
        valid = false;
    }

    if (!formData.message.trim()) {
        newErrors.message = 'Please enter your message';
        valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    // Show sending status
    setStatus({
        type: 'success',
        message: 'Sending message...'
    });

    try {
        // Send email to you
        // Auto-Reply is handled automatically by EmailJS
        // through the linked Auto-Reply template.
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                title: formData.subject || 'Portfolio Contact',
                message: formData.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        // Success
        setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
        });

        // Clear form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setStatus({
                type: '',
                message: ''
            });
        }, 5000);

    } catch (error) {
        console.error('EmailJS Error:', error);

        setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again.'
        });
    }
};

    return (
        <section id="contact" className="py-20 bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto max-w-7xl px-6">
                <h2 className="section-heading text-center mx-auto mb-4 text-white" data-aos="fade-up">Get In Touch</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Let's talk!</p>
                
                <div className="flex flex-col lg:flex-row gap-12" data-aos="fade-up">
                    <div className="lg:w-1/3 flex flex-col gap-8">
                        <div className="flex gap-4 items-start group">
                            <div className="contact-icon bg-gray-900/50 border border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"><i className="fas fa-map-marker-alt group-hover:scale-110 transition-transform"></i></div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Location</h3>
                                <p className="text-gray-400">Gujarat, Bharuch</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-start group">
                            <div className="contact-icon bg-gray-900/50 border border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"><i className="fas fa-envelope group-hover:scale-110 transition-transform"></i></div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Email</h3>
                                <a href="mailto:hello@sunnyprasad.dev" className="text-gray-400 hover:text-blue-400 transition-colors block">prasadsunny.connect@gmail.com</a>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-start group">
                            <div className="contact-icon bg-gray-900/50 border border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"><i className="fas fa-phone group-hover:scale-110 transition-transform"></i></div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Phone</h3>
                                <a href="tel:+14155552671" className="text-gray-400 hover:text-blue-400 transition-colors block">+91 7984431659</a>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-start pt-2 border-t border-gray-700/50">
                            <div className="w-full">
                                <h3 className="font-semibold text-white mb-4">Social Media</h3>
                                <div className="flex gap-3">
                                    <a href="https://github.com/SunnyPrasad-dot" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-900/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white hover:-translate-y-1 transition-all"><i className="fab fa-github text-lg"></i></a>
                                    <a href="https://www.linkedin.com/in/sunny-prasad-dev" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-900/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 hover:-translate-y-1 transition-all"><i className="fab fa-linkedin text-lg"></i></a>
                                    <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-900/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-400/20 hover:border-blue-400/50 hover:text-blue-400 hover:-translate-y-1 transition-all"><i className="fab fa-twitter text-lg"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-3 items-center text-green-400 font-medium mt-4 bg-green-900/10 px-4 py-3 rounded-xl w-fit border border-green-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <span>Available for new projects</span>
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50 w-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                            
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">Full Name</label>
                                        <input 
                                            type="text" id="name" name="name" placeholder="John Doe"
                                            value={formData.name} onChange={handleChange} 
                                            className={`w-full px-4 py-3.5 border border-gray-700 rounded-lg bg-gray-800 text-gray-50 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-gray-600 ${errors.name ? 'border-red-500 bg-red-500/5' : ''}`} 
                                        />
                                        {errors.name && <div className="text-red-400 text-xs mt-1.5">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email Address</label>
                                        <input 
                                            type="email" id="email" name="email" placeholder="john@example.com"
                                            value={formData.email} onChange={handleChange} 
                                            className={`w-full px-4 py-3.5 border border-gray-700 rounded-lg bg-gray-800 text-gray-50 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-gray-600 ${errors.email ? 'border-red-500 bg-red-500/5' : ''}`} 
                                        />
                                        {errors.email && <div className="text-red-400 text-xs mt-1.5">{errors.email}</div>}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="subject">Subject</label>
                                    <input 
                                        type="text" id="subject" name="subject" placeholder="How can I help you?"
                                        value={formData.subject} onChange={handleChange} 
                                        className="w-full px-4 py-3.5 border border-gray-700 rounded-lg bg-gray-800 text-gray-50 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-gray-600" 
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="message">Message</label>
                                    <textarea 
                                        id="message" name="message" rows="5" placeholder="Write your message here..."
                                        value={formData.message} onChange={handleChange} 
                                        className={`w-full px-4 py-3.5 border border-gray-700 rounded-lg bg-gray-800 text-gray-50 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-gray-600 resize-y min-h-[140px] ${errors.message ? 'border-red-500 bg-red-500/5' : ''}`}
                                    ></textarea>
                                    {errors.message && <div className="text-red-400 text-xs mt-1.5">{errors.message}</div>}
                                </div>
                                
                                <button type="submit" className="w-full relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg transition-all duration-300 font-medium no-underline shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-1 text-lg group overflow-hidden">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                                    <i className="far fa-paper-plane mr-2 relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i> 
                                    <span className="relative z-10">Send Message</span>
                                </button>
                                
                                {status.message && (
                                    <div className={`p-4 mt-4 rounded-lg text-center font-medium border ${status.type === 'success' ? 'bg-green-900/20 text-green-400 border-green-500/30' : 'bg-red-900/20 text-red-400 border-red-500/30'}`}>
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
