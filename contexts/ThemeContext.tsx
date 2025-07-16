import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

type Theme = 'light' | 'dark' | 'candle';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) return savedTheme;
    }
    return 'dark'; // Default to dark mode
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('dark', 'theme-candle');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'candle') {
      root.classList.add('dark', 'theme-candle');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'candle';
      return 'light'; // from 'candle' back to 'light'
    });
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};