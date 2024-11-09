import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  const [mode, setMode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(preferDarkQuery);

      const handleChange = (e: MediaQueryListEvent) => {
        const newMode = e.matches ? 'dark' : 'light';
        setMode(newMode);
      };

      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme) {
        setMode(savedTheme);
      } else {
        const currentTheme = mediaQuery.matches ? 'dark' : 'light';
        setMode(currentTheme);
      }

      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
