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
import { motion } from 'framer-motion';

import project1 from '../../../public/images/projects/Eventsphere.png';
import project2 from '../../../public/images/projects/Wax.png';
import project3 from '../../../public/images/projects/Munaciella-news.jpg';
import project4 from '../../../public/images/projects/devups.png';
import project5 from '../../../public/images/projects/Velovegans.jpg';
import project6 from '../../../public/images/projects/pairsniper.png';
import project7 from '../../../public/images/projects/Clarity Notion-clone.png';
import project8 from '../../../public/images/projects/linkedin.png';
import project9 from '../../../public/images/projects/paperly.png';
import project10 from '../../../public/images/projects/applywise.png';
import project11 from '../../../public/images/projects/FileDrop.png';
import project12 from '../../../public/images/projects/streambuster.png';
import project13 from '../../../public/images/projects/flowly.png';
import project14 from '../../../public/images/projects/meteo.png';
import project15 from '../../../public/images/projects/quillnote.png';

const FramerImage = motion.create(Image);

const FeaturedProject = ({
  title,
  img,
  summary,
  link,
  github,
  tag,
}: {
  title: string;
  img: StaticImageData;
  summary: string;
  link: string;
  github: string;
  tag: string;
}) => {
  const tagList = tag.split(' ').filter(Boolean);

  const tagColors = [
    'text-primary dark:text-primaryDark',
    'text-pink-800 dark:text-pink-400',
    'text-orange-700 dark:text-orange-400',
    'text-purple-700 dark:text-purple-400',
  ];

  return (
    <motion.article
      className="flex flex-col items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-8 dark:border-light dark:bg-dark dark:text-light md:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      whileHover={{ scale: 1.05 }} // Adds hover scale effect
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }} // Fades in when in view
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} // Triggers animation once when it enters the viewport
    >
      <Link
        href={link}
        target={'_blank'}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="h-auto w-full">
          <Image
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-col items-start justify-between mt-3 flex-grow">
        <div className="flex items-center">
          <Link
            href={link}
            target={'_blank'}
            className="text-primary dark:text-primaryDark"
          >
            <h2 className="text-left text-4xl font-bold sm:text-lg">{title}</h2>
          </Link>
        </div>
        <p className="mt-4 mb-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex flex-wrap mt-2 mb-2">
          {tagList.map((tag, index) => (
            <p
              key={index}
              className={`capitalize ${
                tagColors[index] || 'text-primary dark:text-primaryDark'
              } mr-4 mb-2`}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="mt-2 flex items-center">
          <Link href={github} target={'_blank'} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={'_blank'}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Francesco_Dev</title>
        <meta name="description" content="Projects developed by Francesco" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Profile className="pt-16">
          <AnimatedText
            text="Imagination Outshines Knowledge!"
            className="mb-8 lg:mb-16 xl:mb-16 sm:mb-8 xs:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-5xl font-bold w-full text-center my-16 mt-12 lg:mt-4 md:mt-4 dark:text-light lg:text-4xl sm:text-3xl xs:text-3xl">
            Featured Projects
          </p>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-12 mt-16">
            <FeaturedProject
              title="Paperly"
              img={project9}
              summary="A fully functional SaaS application that allows users to upload documents and interact with them using AI-powered chat. It supports various document types, provides chat memory, manages user subscriptions, and includes robust file management capabilities."
              tag="#NextJS #Firebase #OpenAI #Typescript"
              link="https://paperly.dev/"
              github="https://github.com/munaciella/aichat-to-doc"
            />
            <FeaturedProject
              title="Applywise"
              img={project10}
              summary="An AI-powered job application toolkit that helps you generate tailored resumes and cover letters using OpenAI, manage saved jobs, and track application statuses, all securely stored in Supabase."
              tag="#NextJS #Supabase #Typescript #TailwindCSS"
              link="https://applywise-one.vercel.app/"
              github="https://github.com/munaciella/resume-ai"
            />
            <FeaturedProject
              title="Filedrop"
              img={project11}
              summary="A notes capturing and collaboration platform, enabling seamless note-taking, real-time collaboration, and powerful backend functionalities."
              tag="#NextJS #Firebase #Clerk #Shadcn-UI"
              link="https://filedrop-nu.vercel.app/"
              github="https://github.com/munaciella/filedrop"
            />
            <FeaturedProject
              title="Streambuster"
              img={project12}
              summary="A web application that allows users to search for movies and TV shows, view trailers, access detailed information about each title. It also allows the user to save them to their list, track watch progress, and view recommendations. It uses the TMDB API for live data retrieval."
              tag="#NextJS #Firebase #Typescript #TMDB-API"
              link="https://streambuster.vercel.app/"
              github="https://github.com/munaciella/videostore"
            />
            <FeaturedProject
              title="Flowly"
              img={project13}
              summary="A real-time, AI-powered Kanban-style task manager that helps teams and individuals organize, prioritise, and collaborate on tasks seamlessly. Built with Firebase Firestore for real-time data, and OpenAI for smart suggestions."
              tag="#NextJS #Firebase #OpenAI #TailwindCSS"
              link="https://flowly-chi.vercel.app/"
              github="https://github.com/munaciella/ai-task-manager"
            />
            <FeaturedProject
              title="The Meteo"
              img={project14}
              summary="A responsive, authenticated weather dashboard with Clerk. It fetches data from the free Open‑Meteo API and allows users to save multiple cities to their dashboard with localStorage persistence."
              tag="#NextJS #Typescript #Open-Meteo-API #TailwindCSS"
              link="https://the-meteo.vercel.app/"
              github="https://github.com/munaciella/ultimate-weather"
            />
            <FeaturedProject
              title="QuillNote"
              img={project15}
              summary="A Markdown note-taking web app that allows users to create, edit, and delete notes. It features a rich text editor for formatting, a responsive design, and uses Neon DB for data persistence. The app has a Node.js and Express backend with PostgreSQL and OpenAI powered summarisation."
              tag="#NextJS #Neon #Typescript #Shadcn-UI"
              link="https://quillnote.vercel.app/"
              github="https://github.com/munaciella/notes-frontend"
            />
          <FeaturedProject
              title="Clarity Notes Capturer"
              img={project7}
              summary="A notes capturing and collaboration platform, enabling seamless note-taking, real-time collaboration, and powerful backend functionalities."
              tag="#NextJS #Firebase #Cloudflare #TailwindCSS"
              link="https://clarity-capture.com/"
              github="https://github.com/munaciella/clarity-notes-capturer"
            />
            <FeaturedProject
              title="Networking Platform"
              img={project8}
              summary="A full-stack networking platform where users can connect, interact, and engage through posts and comments."
              tag="#NextJS #Cloudflare #Firebase #TailwindCSS"
              link="https://networked.vercel.app"
              github="https://github.com/munaciella/networking-platform-v2"
            />
            <FeaturedProject
              title="Events Booking Web App"
              img={project1}
              summary="A web application for managing events, including user registration, event creation, payment processing, and more."
              tag="#React #Supabase #Stripe #TailwindCSS"
              link="https://event-sphere-web.netlify.app/"
              github="https://github.com/munaciella/events-platform"
            />
            <FeaturedProject
              title="Social Media Music App"
              img={project2}
              summary="A social media platform for music enthusiasts, to explore, rate, and review songs and albums from around the world."
              tag="#ReactNative #AWS #NativeWind #SpotifyAPI"
              link="https://github.com/munaciella/gatefold-api"
              github="https://github.com/munaciella/gatefold-frontend"
            />
            <FeaturedProject
              title="News Web App"
              img={project3}
              summary="A full-stack news interactive platform for exploring, voting, and managing articles and comments."
              tag="#React #Express #NodeJS #Jest"
              link="https://munaciella.netlify.app/"
              github="https://github.com/munaciella/NC-news"
            />
            <FeaturedProject
              title="Docs Web App"
              img={project4}
              summary="A resourceful web app for a collection of notes, guides, and tools aimed at helping developers at the start of their journey or those returning to tech."
              tag="#NextJS #TailwindCSS #Supabase"
              link="https://devups-notes.vercel.app/"
              github="https://github.com/munaciella/devups-notes"
            />
            <FeaturedProject
              title="Recipes Web App"
              img={project5}
              summary="A web app for viewing, share, comment and vote recipes, including user registration, recipe suggestion and management."
              tag="#NextJS #Supabase #TailwindCSS #ShadcnUI"
              link="https://velovegans.co.uk"
              github="https://github.com/munaciella/recipes-website"
            />
            <FeaturedProject
              title="Data Analytics API"
              img={project6}
              summary="A backend API for processing and visualizing large datasets for analytics purposes and cryptocurrency trading."
              tag="#NodeJS #Express #Jest #Typescript"
              link="https://github.com/munaciella/data-analytics-api"
              github="https://github.com/munaciella/data-analytics-api"
            />
          </div>
        </Profile>
      </main>
    </>
  );
};

export default ProjectPage;
