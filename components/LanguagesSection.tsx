import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { LANGUAGES_DATA } from '../constants';

const LanguagesSection = () => {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

    return (
        <section id="languages" ref={ref} className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-light-secondary/80 dark:bg-deep-navy/50 backdrop-blur-sm relative z-10">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-light-heading dark:text-parchment text-magic-shadow">
                            Lingual Prowess
                        </h2>
                        <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto lg:mx-0 mt-4"></div>
                    </div>

                    <div className="lg:col-span-2 flex flex-wrap justify-center lg:justify-start items-center gap-4">
                        {LANGUAGES_DATA.map((lang, index) => (
                            <div 
                                key={lang.name} 
                                style={{ transitionDelay: `${index * 100}ms`}}
                                className={`bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gold/40 rounded-full px-5 py-2 transition-all duration-500 hover:bg-light-secondary dark:hover:bg-gold/10 hover:border-gray-400 dark:hover:border-gold ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            >
                                <span className="text-lg font-lora font-semibold text-light-heading dark:text-parchment">{lang.name}</span>
                                <span className="text-sm text-light-accent dark:text-gold/80 ml-2">({lang.level})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LanguagesSection;