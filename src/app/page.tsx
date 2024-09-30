'use client';
import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import type { NextPage } from 'next';
import Profile from '@/components/Profile';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

const HomePage: NextPage = () => {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Profile className="pt-2">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Image of developer"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left' />
            <p className="my-4 text-lg font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="/Francesco_Vurchio-CV.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                download={true}
                >
                Resume <LinkArrow className='w-6 ml-2' />

                </Link>
                <Link href="mailto:francesco.vurchio82@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >
                Contact Me
                </Link>
                </div>
            </div>
          </div>
        </Profile>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='Francesco Dev' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
};

export default HomePage;
