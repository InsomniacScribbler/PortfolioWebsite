import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CERTIFICATIONS_DATA } from '../constants';
import type { Certificate } from '../types';

const CertificationCard = ({ cert, index }: { cert: Certificate; index: number }) => {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const transitionDelay = `${index * 150}ms`;

    return (
        <div
            ref={ref}
            style={{ transitionDelay }}
            className={`bg-light-bg/80 dark:bg-deep-navy/80 backdrop-blur-sm border border-gray-200 dark:border-gold/30 rounded-lg shadow-lg p-6 flex items-center space-x-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gold-glow hover:border-gray-300 dark:hover:border-gold ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="text-light-accent dark:text-gold flex-shrink-0">
                {cert.icon}
            </div>
            <div>
                <h3 className="text-xl font-cinzel font-bold text-light-heading dark:text-parchment">{cert.name}</h3>
                <p className="text-light-text/80 dark:text-parchment/80">{cert.issuer}</p>
            </div>
        </div>
    );
};

const CertificationsSection = () => {
    const [titleRef, isTitleIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  return (
    <section id="certs" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className={`transition-opacity duration-1000 ${isTitleIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center text-light-heading dark:text-parchment text-magic-shadow">
              Seals of Approval
            </h2>
            <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;