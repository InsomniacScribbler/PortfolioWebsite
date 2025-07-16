import React, { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ContactSection = () => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        
        const subject = `Portfolio Contact from ${name}`;
        const body = `Message from: ${name} (${email})\n\n${message}`;
        
        const mailtoLink = `mailto:singhnikhilsingh21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    };


  return (
    <section id="contact" ref={ref} className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-light-heading dark:text-parchment text-magic-shadow">Owl Post</h2>
            <p className="mt-3 text-lg text-light-text/80 dark:text-parchment/80">Have a quest or a query? Send a message.</p>
            <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8 lg:pr-8">
                {CONTACT_INFO.map(item => (
                    <div key={item.name} className="flex items-start space-x-5 group">
                        <div className="flex-shrink-0 text-light-accent dark:text-gold border-2 border-light-accent/40 dark:border-gold/40 rounded-full p-3 transition-all duration-300 group-hover:bg-light-accent dark:group-hover:bg-gold group-hover:text-white dark:group-hover:text-dark-bg group-hover:scale-110 group-hover:shadow-lg dark:group-hover:shadow-gold-glow mt-1">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-cinzel text-light-heading dark:text-parchment">{item.name}</h3>
                            <a href={item.href} className="text-light-text/80 dark:text-parchment/80 hover:text-light-accent dark:hover:text-gold transition-colors break-words">{item.value}</a>
                        </div>
                    </div>
                ))}
                 <div className="flex items-center space-x-4 pt-4">
                     <h3 className="text-lg font-bold font-cinzel text-light-heading dark:text-parchment shrink-0">Connect:</h3>
                     <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {SOCIAL_LINKS.map((link) => (
                          <a 
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={link.name}
                            className="text-light-text/70 dark:text-parchment/70 hover:text-light-accent dark:hover:text-gold hover:scale-110 transition-all duration-300 transform"
                          >
                            {link.icon}
                          </a>
                        ))}
                    </div>
                 </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-light-secondary/50 dark:bg-deep-navy/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-gray-200 dark:border-gold/30 shadow-lg">
                <div>
                    <label htmlFor="name" className="block text-sm font-cinzel text-light-text/80 dark:text-parchment/80 mb-2">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-white/50 dark:bg-dark-bg/50 border-b-2 border-gray-300 dark:border-gold/40 focus:border-light-accent dark:focus:border-gold outline-none p-3 rounded-t-md transition-colors text-light-text dark:text-parchment" placeholder="Albus Dumbledore" />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-cinzel text-light-text/80 dark:text-parchment/80 mb-2">Your Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-white/50 dark:bg-dark-bg/50 border-b-2 border-gray-300 dark:border-gold/40 focus:border-light-accent dark:focus:border-gold outline-none p-3 rounded-t-md transition-colors text-light-text dark:text-parchment" placeholder="headmaster@hogwarts.edu" />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-cinzel text-light-text/80 dark:text-parchment/80 mb-2">Your Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full bg-white/50 dark:bg-dark-bg/50 border-b-2 border-gray-300 dark:border-gold/40 focus:border-light-accent dark:focus:border-gold outline-none p-3 rounded-t-md transition-colors text-light-text dark:text-parchment" placeholder="Regarding the Philosopher's Stone..."></textarea>
                </div>
                <button type="submit" className="w-full bg-light-accent dark:bg-gold text-white dark:text-deep-navy font-bold font-cinzel py-3 px-6 rounded-md tracking-wider transition-all duration-300 hover:bg-light-accent-hover dark:hover:bg-dark-gold dark:hover:shadow-gold-glow transform hover:-translate-y-1">
                    Send Scroll
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;