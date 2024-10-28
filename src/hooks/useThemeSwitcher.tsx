// import React, { useEffect, useState } from 'react';

// const useThemeSwitcher = () => {
//   const preferDarkQuery = '(prefers-color-scheme: dark)';
//   const [mode, setMode] = useState('');

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = window.localStorage.getItem('theme');

//     const handleChange = () => {
//       if (userPref) {
//         let check = userPref === 'dark' ? 'dark' : 'light';
//         setMode(check);
//         if (check === 'dark') {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       } else {
//         let check = mediaQuery.matches ? 'dark' : 'light';
//         setMode(check);
//         if (check === 'dark') {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       }
//     };

//     handleChange();

//     mediaQuery.addEventListener('change', handleChange);

//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   useEffect(() => {
//     if (mode === 'dark') {
//       window.localStorage.setItem('theme', 'dark');
//       document.documentElement.classList.add('dark');
//     }

//     if (mode === 'light') {
//       window.localStorage.setItem('theme', 'light');
//       document.documentElement.classList.remove('dark');
//     }
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;



// import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

// const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
//   const preferDarkQuery = '(prefers-color-scheme: dark)';
//   const [mode, setMode] = useState<string>(() => {
//     return window.localStorage.getItem('theme') || 'light';
//   });

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const handleChange = (e: MediaQueryListEvent) => {
//       const newMode = e.matches ? 'dark' : 'light';
//       setMode(newMode);
//     };

//     if (!window.localStorage.getItem('theme')) {
//       const currentTheme = mediaQuery.matches ? 'dark' : 'light';
//       setMode(currentTheme);
//     } else {
//       document.documentElement.classList.toggle('dark', mode === 'dark');
//     }

//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, [mode]);

//   useEffect(() => {
//     window.localStorage.setItem('theme', mode);
//     document.documentElement.classList.toggle('dark', mode === 'dark');
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;



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
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = (e: MediaQueryListEvent) => {
      const newMode = e.matches ? 'dark' : 'light';
      setMode(newMode);
    };

    if (!window.localStorage.getItem('theme')) {
      const currentTheme = mediaQuery.matches ? 'dark' : 'light';
      setMode(currentTheme);
    } else {
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;