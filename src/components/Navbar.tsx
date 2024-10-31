'use client';

import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import Logo from './Logo';
import { usePathname, useRouter } from 'next/navigation';
import { GithubIcon, LinkedInIcon, XIcon } from './Icons';
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

const CustomMobileLink = ({
  href,
  title,
  className,
  toggle
}: {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
   if (pathname !== href) {
    router.push(href);
   }
  };

  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? 'w-full' : 'w-0'
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar: FC = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full px-24 py-8 mt-2 font-semibold text-lg flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">

      <button className="flex-col justify-center items-center hidden lg:flex mt-2" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
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
          className="w-6 mr-3 mt-1"
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

        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-4 flex items-center justify-center rounded-full p-1 transition-all duration-300 transform
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} ${
            mode === 'light' ? 'rotate-0' : 'rotate-180'
          }
          `}
        >
          {mode === 'dark' ? (
            /* Sun Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-0 dark:rotate-180"
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-colors duration-300"
              />
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
      </div>

      {
        isOpen ?
<motion.div
initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
        <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick}/>
      </nav>

      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a
          href="https://twitter.com"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 text-light dark:text-dark sm:mx-1 mt-1"
        >
          <XIcon className="w-8 h-8 fill-dark" />
        </motion.a>
        <motion.a
          href="https://github.com/munaciella"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
        >
          <GithubIcon className="w-8 h-8 fill-dark" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/francesco-vurchio/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <LinkedInIcon className="w-8 h-8 fill-dark" />
        </motion.a>

        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-3 sm:ml-1.5 flex items-center justify-center rounded-full p-1 transition-all duration-300 transform
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'} ${
            mode === 'light' ? 'rotate-0' : 'rotate-180'
          }
          `}
        >
          {mode === 'dark' ? (
            /* Sun Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-0 dark:rotate-180"
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path
                d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-colors duration-300"
              />
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
      </motion.div>
        : null
      }

      <div className="absolute left-1/2 top-2 -translate-x-1/2 mt-1">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
