'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/Logo.png';

const MotionLink = motion.a;

const Logo: FC = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink href="/" className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
  whileHover={{
    backgroundColor: [
      "#121212", 
      "rgba(131,58,180,1)",
      "rgba(253,29,29,1)",
      "rgba(252,176,69,1)",
      "rgba(131,58,180,1)", 
      "#121212"
    ],
    transition: { duration: 1, repeat: Infinity },
  }}
>
  <Image src={logo} alt="Logo" width={32} height={32} />
</MotionLink>
    </div>
  );
};

export default Logo;
