import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import circleTextLight from '../../public/images/Web_Developer_Software_Engineer-transformed.png';
import circleTextDark from '../../public/images/Web_Developer_Software_Engineer-removebg-white.png';
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const HireMe = () => {
  const [mode] = useThemeSwitcher();

  const imageSrc = mode === 'dark' ? circleTextDark : circleTextLight;

  return (
    <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <Image 
          src={imageSrc}
          alt='Francesco Dev Circular Text' 
          className='animate-spin-slow' 
          priority
        />
        <Link 
          href="mailto:francesco.vurchio82@gmail.com" 
          target="_blank" 
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;