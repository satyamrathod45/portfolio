import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../Component/ProjectCard";
import animeTv from "../assets/projectImgs/animeTv.png"
import decimalpass from "../assets/projectImgs/decimalpass.png"
import onepiece from "../assets/projectImgs/onepiece.png"
import decimal from "../assets/projectImgs/hangout.png"
import decimalTask from "../assets/projectImgs/decimlaTask.png"

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#FBF2E6] py-20 overflow-hidden"
    >
      {/* PROJECT SLIDER */}
      <div className="relative px-6">
        <div
          className="
            flex
            p-5
            gap-6
            scroll-smooth
            snap-x
            snap-mandatory
            no-scrollbar
            overflow-x-auto
          "
        >
       <ProjectCard
  image={animeTv}
  badge="Personal"
  title="Decimal Tv"
  description="An anime streaming style platform with a modern OTT-like UI, dynamic routing, and API-based content rendering."
  projectLink={{
    github: "https://github.com/satyamrathod45/DecimalTv",
    live: "https://satyamrathod45.github.io/decimalTv",
  }}
/>
<ProjectCard
  image={onepiece}
  badge="Showcase"
  title="OnePiece Showcase"
  description="A themed showcase website inspired by One Piece, featuring animations, character sections, and immersive visuals."
  projectLink={{
    github: "https://github.com/satyamrathod45/onepiece",
    live: "https://satyamrathod45.github.io/onepiece",
  }}
/>
<ProjectCard
  image={decimalpass}
  badge="Personal"
  title="DecimalPass"
  description="A digital pass and identity management system focused on secure access, clean UX, and scalable architecture."
  projectLink={{
    github: "https://github.com/satyamrathod45/DecimalPass",
    live: "https://satyamrathod45.github.io/DecimalPass",
  }}
/>



<ProjectCard
  image={decimal}
  badge="Live"
  title="Decimal"
  description="A live experimental web project focused on UI interactions, animations, and rapid feature prototyping."
  projectLink={{
    live: "https://satyamrathod45.github.io/Decimal",
  }}
/>

<ProjectCard
  image={decimalTask}
  badge="Productivity"
  title="DecimalTask"
  description="A task and productivity management app designed to organize workflows with a minimal and distraction-free interface."
  projectLink={{
    github: "https://github.com/satyamrathod45/decimalTask",
    live: "https://satyamrathod45.github.io/decimalTask",
  }}
/>


        </div>
      </div>

      {/* SECTION TEXT */}
      <div
        className="
          mt-20
          px-6
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-start
          justify-between
          gap-6
        "
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#85402D]">
          Frontend · Backend · Machine Learning
        </h2>

        <p className="max-w-md text-[#85402D]/80 text-sm md:text-base">
          Simple yet impressive.
          <br />
          I'm more than happy to share with you my projects.
          Let’s chat more about project.
        </p>
      </div>
    </motion.section>
  );
};

export default Project;
