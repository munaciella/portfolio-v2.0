'use client';

import '@/styles/globals.css';
import React, { useEffect } from 'react';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Francesco_Dev</title>
        <meta name="description" content="A portfolio website for Francesco showcasing skills, projects, and experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        style={{
          fontFamily: montserrat.style.fontFamily,
        }}
        className="bg-light dark:bg-dark w-full min-h-screen"
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div key={pathname} initial="initial" animate="animate" exit="exit">
            <TransitionEffect />
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}