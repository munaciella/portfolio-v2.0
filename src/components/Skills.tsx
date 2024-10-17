// import React from 'react'
// import { motion } from 'framer-motion'

// const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
//   return (
//     <motion.div
//       className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
//       whileHover={{ scale: 1.05 }}
//       initial={{ x: 0, y: 0 }}
//       whileInView={{ x: x, y: y }}
//       transition={{ duration: 1.5 }}
//       viewport={{ once: true }}
//     >
//       {name}
//     </motion.div>
//   )
// }

// const Skills = () => {
//   return (
//     <>
//     <h2 className='font-bold text-8xl mt-36 w-full text-center'>Skills</h2>
//     <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
//       <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
//       whileHover={{scale: 1.05}}
//       >
//         Software Engineering
//         </motion.div>
//         <Skill name="HTML" x="-20vw" y="2vw" />
//         <Skill name="CSS" x="-5vw" y="-10vw" />
//         <Skill name="JavaScript" x="20vw" y="6vw" />
//         <Skill name="ReactJS" x="0vw" y="12vw" />
//         <Skill name="NextJS" x="-20vw" y="-15vw" />
//         <Skill name='React Native' x="-20vw" y="-15vw" />
//         <Skill name="Tailwind CSS" x="15vw" y="-12vw" />
//         <Skill name="ChakraUI" x="32vw" y="-5vw" />
//         <Skill name="Typescript" x="32vw" y="-5vw" />
//         <Skill name="NodeJS" x="0vw" y="-20vw" />
//         <Skill name="ExpressJS" x="-25vw" y="18vw" />
//         <Skill name="MongoDB" x="18vw" y="18vw" />
//         <Skill name="PSQL" x="-25vw" y="3vw" />
//         <Skill name="AWS" x="18vw" y="0vw" />
//         <Skill name="NestJS" x="0vw" y="-10vw" />
//         <Skill name="Java" x="-25vw" y="-15vw" />
//         <Skill name="Jest" x="18vw" y="-12vw" />
//         <Skill name="Vercel" x="18vw" y="-5vw" />
//        </div>
//     </>
//   )
// }

// export default Skills

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
    className="flex flex-col items-center justify-center mt-4 p-4 bg-gray-100 rounded-lg shadow-lg"
    variants={skillVariants} 
    whileHover={{ scale: 1.1 }} 
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-4xl mb-2" />
    <span className="font-semibold">{name}</span>
  </motion.div>
);

const Skills = () => (
  <motion.div
    className="container mx-auto p-4"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <h2 className="text-8xl mt-32 font-bold text-center mb-8">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {skillsData.map((skill, index) => (
        <SkillCard key={index} name={skill.name} Icon={skill.icon} />
      ))}
    </div>
  </motion.div>
);

export default Skills;
