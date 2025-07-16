import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import type { TimelineItem } from '../types';

type Tab = 'experience' | 'education';

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    
    return (
        <div ref={ref} className="relative mb-8">
            <div className={`transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-x-0' : `opacity-0 -translate-x-8`}`}>
                <div className="absolute w-5 h-5 bg-light-accent dark:bg-gold rounded-full -left-2.5 mt-1.5 border-4 border-light-secondary dark:border-deep-navy/70 shadow-lg dark:shadow-gold-glow z-10"></div>
                <div className="ml-8 bg-light-bg/80 dark:bg-deep-navy/60 backdrop-blur-sm border border-gray-200 dark:border-gold/30 p-6 rounded-lg shadow-lg">
                    <span className="text-sm font-semibold text-light-accent/80 dark:text-gold/80">{item.date}</span>
                    <h3 className="text-xl font-cinzel font-bold text-light-heading dark:text-parchment mt-1">{item.title}</h3>
                    <p className="text-md font-semibold text-light-text/80 dark:text-parchment/80 mt-1">{item.location}</p>
                    <p className="mt-3 text-light-text/70 dark:text-parchment/70 leading-relaxed">{item.description}</p>
                </div>
            </div>
        </div>
    );
};


const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState<Tab>('experience');
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

    const data = activeTab === 'experience' ? EXPERIENCE_DATA : EDUCATION_DATA;

    const TabButton = ({ tab, label }: { tab: Tab; label: string }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`font-cinzel text-xl tracking-wider px-6 py-2 rounded-t-lg transition-all duration-300 border-b-2 ${
                activeTab === tab 
                ? 'text-light-accent dark:text-gold border-light-accent dark:border-gold bg-light-secondary/50 dark:bg-deep-navy/50' 
                : 'text-gray-500 dark:text-parchment/60 border-transparent hover:text-light-accent dark:hover:text-gold'
            }`}
        >
            {label}
        </button>
    );

    return (
        <section id="journey" ref={ref} className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
             <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-light-heading dark:text-parchment text-magic-shadow">
                        My Journey
                    </h2>
                    <p className="mt-3 text-lg text-light-text/80 dark:text-parchment/80">A timeline of my professional and academic chronicles.</p>
                    <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
                </div>

                <div className="flex justify-center border-b border-gray-300 dark:border-gold/20 mb-12">
                    <TabButton tab="experience" label="Experience" />
                    <TabButton tab="education" label="Education" />
                </div>
                
                <div className="relative border-l-2 border-gray-300 dark:border-gold/30 ml-4">
                    {data.map((item, index) => (
                        <TimelineCard key={`${activeTab}-${index}`} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;