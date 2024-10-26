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

const FramerImage = motion(Image);

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
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = () => {
    imgRef.current.style.display = 'none';
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
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
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
    <li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-14 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
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
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
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
        />
      </Link>
      <Link href={link} target={'_blank'}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const ArticlesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Francesco Dev | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-24 flex flex-col items-center justify-center overflow-hidden">
        <Profile className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <p className="text-5xl font-bold w-full text-center my-16 mt-4">
            Latest Articles
            </p>
          <ul className="grid grid-cols-2 gap-16">
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
Discover how to use React-Loading, React-Lottie & build a custom loading screen to improve the user experience."
              time="10 min read"
              link="https://www.freecodecamp.org/news/creating-stunning-loading-screens-in-react/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            More Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In React: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="https://www.freecodecamp.org/news/form-validation-in-react-build-a-custom-hook-for-inputs-and-error-handling/"
              img={article3}
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="March 22, 2023"
              link="https://www.freecodecamp.org/news/silky-smooth-scrolling-in-reactjs-a-step-by-step-guide-for-react-developers/"
              img={article4}
            />
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="March 22, 2023"
              link="https://www.freecodecamp.org/news/creating-an-efficient-modal-component-in-react-using-hooks-and-portals/"
              img={article5}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="March 22, 2023"
              link="https://www.freecodecamp.org/news/build-a-fabulous-todo-list-app-with-react-redux-and-framer-motion/"
              img={article6}
            />
            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="March 22, 2023"
              link="https://www.freecodecamp.org/news/redux-simplified-a-beginners-guide-for-web-developers/"
              img={article7}
            />
            <Article
              title="What Is Higher Order Component(Hoc) In React?"
              date="March 22, 2023"
              link="https://www.freecodecamp.org/news/what-is-higher-order-component-hoc-in-react/"
              img={article8}
            />
          </ul>
        </Profile>
      </main>
    </>
  );
};

export default ArticlesPage;
