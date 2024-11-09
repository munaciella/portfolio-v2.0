'use client';

import '@/styles/globals.css';
import React, { useEffect } from 'react';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import TransitionEffect from '@/components/TransitionEffect';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <html lang="en">
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