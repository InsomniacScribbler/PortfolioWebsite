import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ACHIEVEMENTS_DATA } from '../constants';
import type { Achievement } from '../types';

const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const transitionDelay = `${index * 150}ms`;

    return (
        <div
            ref={ref}
            style={{ transitionDelay }}
            className={`bg-light-bg/80 dark:bg-deep-navy/80 backdrop-blur-sm border border-gray-200 dark:border-gold/30 rounded-lg shadow-lg p-6 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gold-glow hover:border-gray-300 dark:hover:border-gold ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="flex items-start space-x-5">
                <div className="text-light-accent dark:text-gold flex-shrink-0 mt-1">
                    {achievement.icon}
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-cinzel font-bold text-light-heading dark:text-parchment">{achievement.title}</h3>
                    <p className="text-sm font-semibold text-light-text/70 dark:text-parchment/70 italic">{achievement.issuer}</p>
                </div>
            </div>
            <p className="mt-4 text-light-text/90 dark:text-parchment/90 leading-relaxed flex-grow">
                {achievement.description}
            </p>
        </div>
    );
};

const AchievementsSection = () => {
    const [titleRef, isTitleIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  return (
    <section id="achievements" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-light-secondary/80 dark:bg-deep-navy/50 backdrop-blur-sm relative z-10">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className={`transition-opacity duration-1000 ${isTitleIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center text-light-heading dark:text-parchment text-magic-shadow">
              Scrolls of Triumph
            </h2>
            <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;