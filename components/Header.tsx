import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { CandleIcon } from '../constants';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);
  
  const ThemeSwitcherIcon = () => {
    if (theme === 'light') return <MoonIcon />;
    if (theme === 'dark') return <CandleIcon />;
    return <SunIcon />; // for candle theme, shows sun to go back to light
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className="bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200/30 dark:border-gold/20 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <a href="#home" className="text-2xl font-cinzel font-bold text-light-accent dark:text-gold tracking-widest z-50" onClick={closeMenu}>
                  NS
                </a>
                <ul className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="font-cinzel text-light-heading dark:text-parchment hover:text-light-accent dark:hover:text-gold transition-colors duration-300 tracking-wider relative group"
                      >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-light-accent dark:bg-gold transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                   <li>
                    <button onClick={toggleTheme} aria-label="Toggle theme" className="text-light-heading dark:text-parchment hover:text-light-accent dark:hover:text-gold transition-colors duration-300">
                      <ThemeSwitcherIcon />
                    </button>
                  </li>
                </ul>
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} aria-label="Toggle theme" className="z-50 text-light-heading dark:text-parchment hover:text-light-accent dark:hover:text-gold focus:outline-none">
                         <ThemeSwitcherIcon />
                    </button>
                  <button
                      onClick={toggleMenu}
                      aria-label="Toggle menu"
                      className="z-50 text-light-heading dark:text-parchment hover:text-light-accent dark:hover:text-gold focus:outline-none"
                  >
                      {isMenuOpen ? (
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      ) : (
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      )}
                  </button>
                </div>
              </div>
            </nav>
        </div>
      </header>

      <div 
        className={`md:hidden fixed inset-0 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={closeMenu}
              className="font-cinzel text-3xl text-light-heading dark:text-parchment hover:text-light-accent dark:hover:text-gold transition-colors duration-300 tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;