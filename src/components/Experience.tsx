import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: isMounted ? ref: undefined,
    offset: ['start end', 'center start'],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-22 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl md:mb-16">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative mt-24 sm:mt-14 xs:mt-14 lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Tech Corp"
            companyLink="https://techcorp.com"
            time="2020 - Present"
            address="San Francisco, CA"
            work="Developed and maintained web applications using modern technologies like React and Node.js."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
