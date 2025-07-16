import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProjectsSection = () => {
    const [titleRef, isTitleIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  return (
    <section id="projects" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-light-secondary/80 dark:bg-deep-navy/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`transition-opacity duration-1000 ${isTitleIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center text-light-heading dark:text-parchment text-magic-shadow">
              Codex of Creations
            </h2>
            <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;