import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

const cardVariants = {
  initial: {
    y: 0,
    scale: 1,
    backgroundColor: "#FFCC6D",
    boxShadow: "0px 6px 14px rgba(0,0,0,0.08)",
  },
  hover: {
    y: -6,
    scale: 1.035,
    backgroundColor: "#9BE38F",
    boxShadow: "0px 26px 50px rgba(0,0,0,0.18)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const ProjectCard = ({
  image,
  badge,
  badgeColor = "bg-[#8B3A2E]",
  title,
  description,
  projectLink,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="
        w-[260px]
        sm:w-[280px]
        flex-shrink-0
        snap-start
        rounded-2xl
        p-4
        flex
        flex-col
        justify-between
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="relative rounded-xl overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          variants={imageVariants}
          className="w-full h-[200px] object-cover"
        />

        {badge && (
          <span
            className={`
              absolute top-3 right-3
              text-xs px-3 py-1
              rounded-full
              text-white
              ${badgeColor}
            `}
          >
            {badge}
          </span>
        )}
      </div>

      {/* TEXT */}
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-bold text-[#85402D]">
          {title}
        </h3>
        <p className="text-sm text-[#85402D]/80">
          {description}
        </p>
      </div>

      {/* ACTIONS (ALWAYS VISIBLE) */}
      <div className="mt-4 flex gap-4 items-center">
        {projectLink?.github && (
          <a
            href={projectLink.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-sm font-semibold
              text-[#85402D]
              hover:underline
            "
          >
            <FaGithub /> GitHub
          </a>
        )}

        {projectLink?.live && (
          <a
            href={projectLink.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-sm font-semibold
              text-[#85402D]
              hover:underline
            "
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
