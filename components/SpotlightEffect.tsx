import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SpotlightEffect = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'candle') return;

    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${ev.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${ev.clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [theme]);

  if (theme !== 'candle') {
    return null;
  }

  return <div className="spotlight"></div>;
};

export default SpotlightEffect;