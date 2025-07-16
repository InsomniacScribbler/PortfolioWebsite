import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutSection = () => {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-light-secondary/80 dark:bg-deep-navy/50 backdrop-blur-sm relative z-10">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center text-light-heading dark:text-parchment text-magic-shadow">
              The Scribe's Story
            </h2>
            <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
        </div>

        <div className="mt-12 text-lg text-light-text/90 dark:text-parchment/80 leading-relaxed space-y-6 md:grid md:grid-cols-2 md:gap-x-12 md:space-y-0 md:text-left">
            <div className="space-y-6">
                <p>
                    My journey into technology began with a deep fascination for how complex systems work. This curiosity led me to the world of backend development, where I found my passion for crafting robust, efficient, and scalable server-side applications.
                </p>
                <p>
                    I thrive on the logic of Java and the power of the Spring Boot ecosystem to build secure and high-performing systems. While my core expertise lies in the backend, I am also deeply interested in creating seamless user experiences.
                </p>
            </div>
             <div className="space-y-6">
                <p>
                    This has driven me to explore Android development with Kotlin and Jetpack Compose. I believe a great application is a symphony of powerful backend architecture and an intuitive, responsive frontend.
                </p>
                <p>
                    To round out my skill set, I've delved into cybersecurity, understanding that building secure software is not an afterthought but a foundational principle. My learning path is a continuous quest for knowledge.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;