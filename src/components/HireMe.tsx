import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import circleText from '../../public/images/circular-text.png';

const HireMe = () => {
  return (
    <div className="absolute left-4 -bottom-32 xl:bottom-28 xl:left-0 flex items-center justify-center overflow-hidden md:right-2 md:left-auto md:top-2 md:bottom-auto md:absolute lg:right-2 lg:left-auto lg:top-2 lg:bottom-auto lg:absolute">
      <div className="w-48 md:w-24 lg:w-24 xl:w-40 h-auto flex items-center justify-center relative">
        <Image
          src={circleText}
          alt="Francesco Dev Circular Text"
          width={500}
          height={500}
          className="animate-spin-slow"
          priority
        />
        <Link
          href="mailto:francesco.vurchio82@gmail.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px] lg:w-12 lg:h-12 lg:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
