'use client';
import React, { useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Profile from '@/components/Profile';
import AnimatedText from '@/components/AnimatedText';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import article1 from '../../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../../public/images/articles/create loading screen in react js.jpg';
import article3 from '../../../public/images/articles/form validation in reactjs using custom react hook.png';
import article4 from '../../../public/images/articles/smooth scrolling in reactjs.png';
import article5 from '../../../public/images/articles/create modal component in react using react portals.png';
import article6 from '../../../public/images/articles/todo list app built using react redux and framer motion.png';
import article7 from '../../../public/images/articles/What is Redux with easy explanation.png';
import article8 from '../../../public/images/articles/What is higher order component in React.jpg';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion.create(Image);

const MovingImg = ({
  title,
  img,
  link,
}: {
  title: string;
  img: StaticImageData;
  link: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouse = (event: React.MouseEvent) => {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
    }
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
    }
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target={'_blank'}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({
  img,
  title,
  date,
  link,
}: {
  img: StaticImageData;
  title: string;
  date: string;
  link: string;
}) => {
  return (
    <li className="relative w-full p-4 py-6 my-14 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light dark:border-r-4 dark:border-b-4 sm:flex-col">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </li>
  );
};

const LatestArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: {
  img: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target={'_blank'}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target={'_blank'}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 sm:hidden">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const ArticlesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Francesco_Dev</title>
        <meta name="description" content="Articles page of Francesco" />
      </Head>
      <main className="w-full mb-24 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Profile className="pt-14">
          <AnimatedText
            text="Words Have The Power To Change The World!"
            className="mb-16 lg:mb-16 xl:mb-16 sm:mb-8 xs:mb-8 xl:!text-6xl lg:!text-6xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
          />
          <p className="text-6xl font-bold w-full text-center my-16 mt-4 dark:text-light xl:text-5xl lg:text-4xl sm:text-3xl xs:text-3xl">
            Latest Articles
          </p>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 sm:gap-y-16 sm:grid-cols-1 xs:grid-cols-1 xs:gap-y-8">
            <LatestArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              img={article1}
            />

            <LatestArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading & build a custom loading screen to improve the user experience."
              time="10 min read"
              link="https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-5bba"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-5xl w-full text-center my-16 mt-20 dark:text-light lg:text-4xl sm:text-3xl xs:text-3xl">
            More Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In React: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="October 22, 2024"
              link="https://www.freecodecamp.org/news/add-form-validation-in-react-app-with-react-hook-form/"
              img={article3}
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="October 01, 2024"
              link="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"
              img={article4}
            />
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks & Portals"
              date="October 03, 2024"
              link="https://react.dev/reference/react-dom/createPortal"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React & Redux"
              date="October 12, 2024"
              link="https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/"
              img={article6}
            />
            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="November 02, 2024"
              link="https://redux.js.org/tutorials/fundamentals/part-1-overview"
              img={article7}
            />
            <Article
              title="What Is Higher Order Component(Hoc) In React?"
              date="November 05, 2023"
              link="https://medium.com/@ashaymotiwala/higher-order-functions-components-in-react-js-a93dce5f30cb"
              img={article8}
            />
          </ul>
        </Profile>
      </main>
    </>
  );
};

export default ArticlesPage;
