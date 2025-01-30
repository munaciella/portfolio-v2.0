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
            position="Data Analytics API (Cryprocurrency)"
            company="Ultimate Hero"
            companyLink=""
            time="2024 - 2024"
            address="Manchester, UK"
            work="Designed and optimised database schemas, improving query performance by 30%. Migrated JavaScript files to TypeScript, enhancing type safety and reducing errors. Built efficient seed scripts, contributed to full-stack development, and implemented Jest testing. Developed RESTful APIs with Express, integrating external APIs to fetch real-time data for cryptocurrency analysis."
          />
          <Details
            position="Freelance Software Engineer Project Consulant"
            company="Tech Returners"
            companyLink="https://techreturners.co.uk"
            time="2024 - 2024"
            address="Manchester, UK"
            work="Consulted on the Launchpad project to deliver a custom web application, handling architecture design, implementation, and deployment. Integrated OAuth authentication (Google, Supabase) to enhance user experience and security. Developed robust backend solutions with Supabase for user management and secure data handling, while contributing to frontend development in React, focusing on responsive design and accessibility."
          />
          <Details
            position="Trainee Full Stack Developer"
            company="Northcoders"
            companyLink="https://www.northcoders.co.uk"
            time="2023 - 2024"
            address="Manchester, UK"
            work="Completed an intensive bootcamp specializing in web application development. Gained strong proficiency in programming fundamentals, test-driven development, and back-end technologies, including Node.js, APIs, Express, and SQL. Advanced front-end skills in React, creating complex, high-quality web applications. Collaborated effectively in a team environment, contributing to successful project delivery."
          />
          <Details
            position="Personal Trainer"
            company="The Gym Group/Plant Powered PT"
            companyLink="https://www.thegymgroup.com"
            time="2018 - 2023"
            address="Manchester, UK"
            work="Provided personalised fitness programs and guidance to clients, helping them achieve their fitness goals. Conducted fitness assessments, designed workout plans, and provided nutritional guidance to ensure clients' overall well-being. Collaborated with clients to set and track fitness goals, providing ongoing support and motivation."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
