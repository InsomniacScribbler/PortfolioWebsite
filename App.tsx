import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import LanguagesSection from './components/LanguagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FloatingParticles from './components/FloatingParticles';
import SpotlightEffect from './components/SpotlightEffect';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const preloaderEl = document.getElementById('preloader');
    const rootEl = document.getElementById('root');

    if (!preloaderEl || !rootEl) return;

    if (loading) {
      rootEl.style.opacity = '0';
      preloaderEl.style.display = 'flex';
      preloaderEl.classList.remove('fade-out');
    } else {
      rootEl.style.opacity = '1';
      preloaderEl.classList.add('fade-out');
      const handleTransitionEnd = () => {
        preloaderEl.style.display = 'none';
        preloaderEl.removeEventListener('transitionend', handleTransitionEnd);
      };
      preloaderEl.addEventListener('transitionend', handleTransitionEnd);
    }
  }, [loading]);

  return (
    <div className="font-lora relative antialiased overflow-x-hidden transition-colors duration-500">
      <SpotlightEffect />
      <FloatingParticles count={20} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificationsSection />
        <LanguagesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 bg-light-secondary/80 dark:bg-deep-navy/50 backdrop-blur-sm border-t border-gray-200 dark:border-gold/20">
        <p className="text-sm text-gray-500 dark:text-parchment/60">&copy; {new Date().getFullYear()} Nikhil Singh. Crafted with code and a touch of magic.</p>
      </footer>
    </div>
  );
}

export default App;