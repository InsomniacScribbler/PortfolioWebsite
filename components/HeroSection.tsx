import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { SOCIAL_LINKS, HERO_SUBTITLES, DownloadIcon, CV_DOWNLOAD_LINK } from '../constants';

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const typedSubtitle = useTypingEffect(HERO_SUBTITLES);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto w-full text-center">
        
        <AnimatedSection>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-cinzel font-black text-light-heading dark:text-parchment tracking-wider leading-tight text-magic-shadow">
            Nikhil Singh
          </h1>
        </AnimatedSection>
        
        <AnimatedSection className="mt-4">
          <p className="text-xl md:text-3xl font-cinzel text-light-accent dark:text-gold tracking-widest min-h-[56px] md:min-h-[72px] flex items-center justify-center">
            {typedSubtitle}
            <span className="typing-cursor"></span>
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="mt-6">
          <p className="max-w-3xl mx-auto text-lg text-light-text/80 dark:text-parchment/80 leading-relaxed">
            Results-driven Java developer passionate about building secure, scalable systems. Skilled in Java, Spring Boot, and full-stack solutions with a sprinkle of cryptographic charm.
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={CV_DOWNLOAD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-light-accent dark:bg-gold text-white dark:text-deep-navy font-bold font-cinzel py-3 px-8 rounded-md tracking-wider transition-all duration-300 hover:bg-light-accent-hover dark:hover:bg-dark-gold dark:hover:shadow-gold-glow transform hover:-translate-y-1"
              >
                <DownloadIcon />
                Download CV
              </a>
              <div className="flex items-center space-x-6">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.name}
                    className="text-light-text/70 dark:text-parchment/70 hover:text-light-accent dark:hover:text-gold hover:scale-110 transition-all duration-300 transform p-2"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default HeroSection;