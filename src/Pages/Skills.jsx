import React from "react";
import { motion } from "motion/react";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    color: "bg-[#FFCC6D]",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend Development",
    color: "bg-[#9BE38F]",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Machine Learning",
    color: "bg-[#FFCC6D]",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "bg-[#9BE38F]",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
    ],
  },
];

const cardVariants = {
  initial: {
    y: 0,
    boxShadow: "0px 6px 14px rgba(0,0,0,0.08)",
  },
  hover: {
    y: -6,
    boxShadow: "0px 22px 40px rgba(0,0,0,0.16)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#FBF2E6] min-h-screen py-20 px-6"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#85402D]">
          Skills & Technologies
        </h1>
        <p className="mt-4 max-w-xl text-[#85402D]/80">
          Technologies and tools I use to build scalable applications
          and intelligent systems.
        </p>
      </div>

      {/* SKILLS GRID */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className={`
              rounded-2xl
              p-6
              cursor-pointer
              ${group.color}
            `}
          >
            <h3 className="text-xl font-bold text-[#85402D] mb-4">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-3
                    text-[#85402D]
                    text-sm
                    font-medium
                  "
                >
                  <span className="text-xl">
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
