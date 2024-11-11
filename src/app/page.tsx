/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile/Fran-abstract.png';
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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Profile className="pt-16 xl:pt-0 md:pt-16 sm:pt-16 sm:mb-2">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Image of developer"
                className="w-full h-auto lg:inline-block md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mt-4 ml-3">
              <AnimatedText
                text="Transforming Vision Into Reality Through Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-lg font-medium md:text-sm sm:text-sm">
              I’m a junior software developer with a passion for front-end development and a solid foundation in full-stack skills. As a trained software engineer, I’ve built innovative web applications that blend user-centered design with efficient functionality. Check out my recent projects to see my expertise in React.js and web development come to life.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Francesco_Vurchio-CV.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-2'} />
                </Link>
                <Link
                  href="mailto:francesco.vurchio82@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Profile>

        <HireMe />
        <div className="absolute right-8 -bottom-24 inline-block w-24 md:hidden lg:hidden xl:hidden">
          <Image
            src={lightBulb}
            alt="Francesco Dev"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
