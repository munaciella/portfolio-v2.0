import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaJava,
  FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiChakraui,
  SiVercel,
  SiJest,
  SiExpress,
} from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'ReactJS', icon: FaReact },
  { name: 'NextJS', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'ChakraUI', icon: SiChakraui },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'NodeJS', icon: FaNodeJs },
  { name: 'ExpressJS', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'AWS', icon: FaAws },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Java', icon: FaJava },
  { name: 'Jest', icon: SiJest },
  { name: 'Vercel', icon: SiVercel },
  { name: 'GitHub', icon: FaGithub }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillCard = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ElementType;
}) => (
  <motion.div
    className="flex flex-col items-center justify-center mt-4 p-4 bg-slate-100 dark:bg-primaryDark rounded-lg shadow-lg"
    variants={skillVariants} 
    whileHover={{ scale: 1.1 }} 
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-4xl mb-2 dark:text-dark" />
    <span className="font-semibold dark:text-dark">{name}</span>
  </motion.div>
);

const Skills = () => (
  <motion.div
    className="container mx-auto p-4"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <h2 className="text-8xl mt-28 font-bold text-center mb-8 md:text-6xl lg:text-7xl sm:text-6xl xs:text-4xl sm:mt-16">Skills</h2>
    <div className="grid grid-cols-6 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-8">
      {skillsData.map((skill, index) => (
        <SkillCard key={index} name={skill.name} Icon={skill.icon} />
      ))}
    </div>
  </motion.div>
);

export default Skills;
