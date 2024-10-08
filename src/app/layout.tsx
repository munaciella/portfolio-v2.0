import '@/styles/globals.css';
import React from 'react';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata = {
  title: 'Portfolio v2.0',
  description: 'Generated by Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: montserrat.style.fontFamily,
        }}
        className="bg-light w-full min-h-screen"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
