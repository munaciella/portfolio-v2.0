import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({
  type,
  time,
  place,
  info,
}: {
  type: string;
  time: string;
  place: string;
  info: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);  
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize text-2xl font-bold">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-22 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative mt-24">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Computer Science"
            time="2019 - 2023"
            place="University of California, Los Angeles"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Bachelor of Science in Computer Science"
            time="2019 - 2023"
            place="University of California, Los Angeles"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Bachelor of Science in Computer Science"
            time="2019 - 2023"
            place="University of California, Los Angeles"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Online Coursework"
            time="2015 - 2019"
            place="Codecademy, Udemy & EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
          />
          <Details
            type="Bachelor of Science in Computer Science"
            time="2019 - 2023"
            place="University of California, Los Angeles"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
