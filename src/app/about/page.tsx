/* eslint-disable react/no-unescaped-entities */
'use client';
import AnimatedText from '@/components/AnimatedText';
import Profile from '@/components/Profile';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
//import profilePic from '../../../public/images/profile/developer-pic-2.jpg';
import profileImg from '../../../public/images/profile/fran.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useLayoutEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    if (value !== null) {
      springValue.on('change', (latest) => {
        if (ref.current && Number(latest.toFixed(0)) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Francesco_Dev</title>
        <meta name="description" content="A brief description about Francesco" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Profile className="pt-16">
          <AnimatedText
            text="Passion Drives Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xs:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 sm:px-16 sm:gap-y-12">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I’m Francesco, a software developer passionate about
                crafting beautiful, functional, and user-centered digital
                experiences. With two years in the field, I continuously seek
                innovative ways to bring clients’ visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe design is more than aesthetics; it’s about solving
                problems and creating intuitive, enjoyable experiences for
                users.
              </p>
              <p className="font-medium">
                Whether working on a website, mobile app, or any digital
                product, I bring a commitment to design excellence and
                user-focused solutions to every project. I look forward to
                applying my skills and passion to your next project.
              </p>
            </div>

            {/* <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8 sm:mt-8 sm:p-6 xs:p-4">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profileImg}
                alt="Francesco Dev"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div> */}

            <div className="col-span-3 relative h-60 w-60 rounded-full border border-dark bg-light p-2 overflow-hidden dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8 sm:mt-8 sm:p-4 xs:p-2 md:mx-auto sm:h-48 sm:w-48 sm:mx-auto xs:h-48 xs:w-48 xs:mx-auto">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-full bg-dark dark:bg-light" />
              <Image
                src={profileImg}
                alt="Francesco Dev"
                className="object-cover w-full h-full rounded-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-center space-y-16 xl:col-span-8 xl:flex-row xl:space-x-16 xl:space-y-0 xl:items-center md:order-3">
              {/* <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div> */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Profile>
      </main>
    </>
  );
};
export default AboutPage;
//lg:flex-col line 33 projects page
