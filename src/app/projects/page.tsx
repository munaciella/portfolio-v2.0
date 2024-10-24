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
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-8">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target={'_blank'}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={'_blank'}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={'_blank'} className="w-10">
            {' '}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={'_blank'}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target={'_blank'}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={'_blank'}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
        <Link
            href={link}
            target={'_blank'}
            className="text-lg font-semibold underline"
          >
            {' '}
            Visit{' '}
          </Link>
          <Link href={github} target={'_blank'} className="w-8">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Profile className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-8" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-16">
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
            <div className="col-span-6">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

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
            <div className="col-span-6">
            <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
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
