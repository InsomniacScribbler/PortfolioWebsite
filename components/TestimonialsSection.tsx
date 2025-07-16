import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialsSection = () => {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section id="testimonials" ref={ref} className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-light-heading dark:text-parchment text-magic-shadow">
                        Whispers of Praise
                    </h2>
                    <div className="w-24 h-0.5 bg-light-accent dark:bg-gold mx-auto mt-4"></div>
                </div>

                <div className="mt-16">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div key={index} className="bg-light-secondary/50 dark:bg-deep-navy/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-gold/30 shadow-lg max-w-2xl mx-auto text-center">
                            <p className="text-xl italic text-light-text/90 dark:text-parchment/90 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <p className="mt-6 font-cinzel font-bold text-light-accent dark:text-gold text-lg">
                                - {testimonial.author}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-parchment/60 tracking-widest">
                                {testimonial.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;