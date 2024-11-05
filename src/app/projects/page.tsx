'use client';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Profile from '@/components/Profile';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../../public/images/projects/crypto-screener-cover-image.jpg';
import project2 from '../../../public/images/projects/Black White and Red Modern Breaking News Channel Logo.png';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  img,
  summary,
  link,
  github,
}: {
  type: string;
  title: string;
  img: StaticImageData;
  summary: string;
  link: string;
  github: string;
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-8 dark:border-light dark:bg-dark dark:text-light md:flex-col lg:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl sm:-right-2 sm:h-[101.5%] sm:w-full sm:rounded-[1.5rem] xs:-right-2 xs:h-[101.5%] xs:w-full xs:rounded-[1.5rem] md:-right-2 md:h-[101.5%] md:w-full md:rounded-[1.5rem] lg:h-[101.5%] lg:-right-2 xl:-right-3" />
      <Link
        href={link}
        target={'_blank'}
        className="w-1/2 h-auto 2xl:h-96 xl:h-96 lg:h-auto md:h-96 sm:h-64 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-4 lg:pt-6 md:pl-0 md:pb-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target={'_blank'}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-lg">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={'_blank'} className="w-10">
            {' '}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={'_blank'}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            {' '}
            Visit Project{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  img,
  link,
  github,
}: {
  type: string;
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
}) => {
  return (
    <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark dark:text-light xs:p-4'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:h-[101.5%] md:w-full md:rounded-[1.5rem] lg:h-[101.5%] lg:-right-2 xl:-right-3 xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={'_blank'}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target={'_blank'}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold md:text-xl sm:text-lg xs:text-lg">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
        <Link
            href={link}
            target={'_blank'}
            className="text-lg font-semibold underline md:text-base"
          >
            {' '}
            Visit{' '}
          </Link>
          <Link href={github} target={'_blank'} className="w-8 md:w-6">
            {' '}
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Francesco Dev | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Profile className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-8 lg:mb-16 xl:mb-16 sm:mb-8 xs:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl" />
          <p className="text-5xl font-bold w-full text-center my-16 mt-12 lg:mt-4 md:mt-4 dark:text-light lg:text-4xl sm:text-3xl xs:text-3xl">
            Featured Projects
            </p>
          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
            <FeaturedProject
                title="Crypto Screener Application"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
            <p className="text-5xl font-bold w-full mt-2 -mb-10 text-center dark:text-light">
            More Projects
            </p>
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Profile>
      </main>
    </>
  );
};

export default ProjectPage;
