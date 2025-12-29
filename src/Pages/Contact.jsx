import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    rotate: -2,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const hoverEffect = {
  scale: 1.05,
  y: -6,
  boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
};

const Contact = () => {
  return (
    <section className="bg-[#FBF2E6] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#85402D]"
        >
          Let’s Connect
        </motion.h2>

        <p className="mt-4 text-[#85402D]/80 max-w-md">
          Open for collaboration, ideas, and meaningful conversations.
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* GITHUB */}
          <motion.a
            href="https://github.com/satyamrathod45"
            target="_blank"
            rel="noreferrer"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={hoverEffect}
            viewport={{ once: true }}
            className="
              bg-[#FFCC6D]
              rounded-2xl
              p-6
              flex
              flex-col
              items-center
              gap-4
              text-[#85402D]
              cursor-pointer
            "
          >
            <FaGithub size={34} />
            <h3 className="font-bold text-lg">GitHub</h3>
            <p className="text-sm opacity-80 text-center">
              Code, experiments & projects
            </p>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://linkedin.com/in/satyamrathod"
            target="_blank"
            rel="noreferrer"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={hoverEffect}
            viewport={{ once: true }}
            className="
              bg-[#9BE38F]
              rounded-2xl
              p-6
              flex
              flex-col
              items-center
              gap-4
              text-[#85402D]
              cursor-pointer
            "
          >
            <FaLinkedinIn size={34} />
            <h3 className="font-bold text-lg">LinkedIn</h3>
            <p className="text-sm opacity-80 text-center">
              Professional journey & network
            </p>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://instagram.com/satyamrathod___"
            target="_blank"
            rel="noreferrer"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={hoverEffect}
            viewport={{ once: true }}
            className="
              bg-orange-300
              rounded-2xl
              p-6
              flex
              flex-col
              items-center
              gap-4
              text-[#85402D]
              cursor-pointer
            "
          >
            <FaInstagram size={34} />
            <h3 className="font-bold text-lg">Instagram</h3>
            <p className="text-sm opacity-80 text-center">
              Design, life & creativity
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
