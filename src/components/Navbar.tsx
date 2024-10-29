'use client';

import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import {
  GithubIcon,
  LinkedInIcon,
  // MoonIcon,
  // SunIcon,
  XIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar: FC = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after client-side rendering
  }, []);

  if (!mounted) return null; // Skip rendering until client-side

  return (
    <header className="w-full px-32 py-8 mt-2 font-semibold text-lg flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <XIcon className="w-8 h-8 fill-dark" />
        </motion.a>
        <motion.a
          href="https://github.com/munaciella"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon className="w-8 h-8 fill-dark" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/francesco-vurchio/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon className="w-8 h-8 fill-dark" />
        </motion.a>
        
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`ml-4 flex items-center justify-center rounded-full p-1 transition-all duration-300 transform
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          } ${mode === 'light' ? 'rotate-0' : 'rotate-180'}
          `} 
          >
          {mode === 'dark' ? (
            /* Sun Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                d="M12 3V1m6.36 4.64l1.42-1.42M21 12h2M17.66 19.36l-1.42 1.42M12 21v2m-6.36-4.64l-1.42 1.42M3 12H1m4.64-6.36L4.22 4.22"
                className="stroke-current"
              />
              <circle cx="12" cy="12" r="5" fill="currentColor" />
            </svg>
          ) : (
            /* Moon Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 1021 12.79z" />
            </svg>
          )}
        </button>
      </nav>
      <div className="absolute left-1/2 top-2 -translate-x-1/2 mt-1">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
