import React from 'react';
import type { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, rootMargin: '0px' });
  const transitionDelay = `${index * 150}ms`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay }}
      className={`bg-light-bg/80 dark:bg-deep-navy/80 border border-gray-200 dark:border-gold/30 rounded-lg shadow-lg flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gold-glow-lg hover:border-gray-300 dark:hover:border-gold ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-cinzel font-bold text-light-accent dark:text-gold">{project.title}</h3>
        <p className="mt-2 text-sm font-semibold text-light-text/80 dark:text-parchment/80 italic">{project.stack}</p>
        <p className="mt-4 text-light-text/90 dark:text-parchment/90"><strong className="font-medium text-light-heading dark:text-gold/90">Role:</strong> {project.role}</p>
        <p className="mt-2 text-light-text/90 dark:text-parchment/90 leading-relaxed flex-grow">{project.features}</p>
        
        <div className="mt-auto pt-6 flex items-center gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gray-500/10 dark:bg-gold/10 border border-gray-400/50 dark:border-gold/50 text-light-accent dark:text-gold font-bold font-cinzel py-2 px-4 rounded-md tracking-wider transition-all duration-300 hover:bg-gray-500/20 dark:hover:bg-gold/20 hover:border-gray-500 dark:hover:border-gold">
                Source Code
            </a>
            {project.liveUrl && project.liveUrl !== '#' && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-light-accent dark:bg-gold text-white dark:text-deep-navy font-bold font-cinzel py-2 px-4 rounded-md tracking-wider transition-all duration-300 hover:bg-light-accent-hover dark:hover:bg-dark-gold hover:shadow-lg dark:hover:shadow-gold-glow">
                    Live Demo
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;