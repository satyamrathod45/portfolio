import { useState, useEffect } from "react";
import { motion } from "motion/react";
import DecorativeCircle from "./FloatingDot";

import luffyHappy from "../assets/luffy/happy-luffy.jpg";
import eyeUpLuffy from "../assets/luffy/eye-up-luffy.jpeg";
import downleftluffy from "../assets/luffy/down-left-luffy.png";
import  upleftluffy from "../assets/luffy/eye-close-left-luffy.png"
import downright from "../assets/luffy/downright.png"

import zoro from "../assets/luffy/zoro.png";
import nami from "../assets/luffy/nami.png";
import sanji from "../assets/luffy/sanji.png";
import chopper from "../assets/luffy/chopper.png";

import FloatingCircle from "./FloatingCircle";

const fadeFast = { duration: 0.2 };
const luffyAngry = ""

const SCALE_FAST = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.6,
};

const Hero = () => {
  const [active, setActive] = useState("default");


  return (
    <>
    <section className="relative w-full min-h-screen bg-[#FBF2E6] overflow-hidden flex items-center justify-center px-4">

      <motion.div
        animate={{ scale: active !== "default" ? 1.04 : 1 }}
        transition={SCALE_FAST}
        className="
          relative
          w-[260px] h-[260px]
          sm:w-[320px] sm:h-[320px]
          lg:w-[420px] lg:h-[420px]
          rounded-full
          bg-transparent
          overflow-hidden
          flex items-center justify-center
        "
      >
        <div className="absolute inset-0">
          <motion.img
            src={luffyHappy}
            animate={{ opacity: active === "default" || active === "nami" || active === "chopper" ? 1 : 0 }}
            transition={fadeFast}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.img
            src={upleftluffy}
            animate={{ opacity: active === "nami" || active === "nami" || active === "chopper" ? 1 : 0 }}
            transition={fadeFast}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.img
            src={eyeUpLuffy}
            animate={{ opacity: active === "zoro" ? 1 : 0 }}
            transition={fadeFast}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.img
            src={downright}
            animate={{ opacity: active === "sanji" ? 1 : 0 }}
            transition={fadeFast}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.img
            src={downleftluffy}
            animate={{ opacity: active === "chopper" ? 1 : 0 }}
            transition={fadeFast}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {active !== "default" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="
              absolute top-6 sm:top-8
              bg-[#FFF3E6]
              text-[#85402D]
              px-4 sm:px-6 py-2
              rounded-full
              font-bold
              text-base sm:text-xl
              shadow-md
            "
          >
            {active === "zoro" && "Projects"}
            {active === "nami" && "Contact Me"}
            {active === "sanji" && "Skills"}
            {active === "chopper" && "About Me"}
          </motion.div>
        )}
      </motion.div>

      <FloatingCircle
        position="top-[18%] right-[12%] sm:right-[18%] lg:right-[22%]"
        themeColor="bg-green-300"
        image={zoro}
        onEnter={() => setActive("zoro")}
        onLeave={() => setActive("default")}
        text="Project"
        route={"/projects"}
      />
      <FloatingCircle
        position="top-[28%] left-[10%] sm:left-[16%] lg:left-[18%]"
        themeColor="bg-orange-400"
        image={nami}
        onEnter={() => setActive("nami")}
        onLeave={() => setActive("default")}
        text="Contact"
        route={"/contact"}
      />

      <FloatingCircle
        position="bottom-[20%] right-[14%] sm:right-[20%] lg:right-[26%]"
        themeColor="bg-yellow-300"
        image={sanji}
        onEnter={() => setActive("sanji")}
        onLeave={() => setActive("default")}
        text="Skills"
        route={"/skills"}
      />

      <FloatingCircle
        position="bottom-[28%] left-[14%] sm:left-[20%] lg:left-[26%]"
        themeColor="bg-green-200"
        image={chopper}
        onEnter={() => setActive("chopper")}
        onLeave={() => setActive("default")}
        text="AboutMe"
        route={"/about"}
      />

<DecorativeCircle
  position="top-[12%] left-[10%]"
  size={90}
  color="bg-yellow-300"
  duration={10}
/>

<DecorativeCircle
  position="top-[18%] right-[12%]"
  size={140}
  color="bg-orange-400"
  duration={12}
/>

<DecorativeCircle
  position="bottom-[20%] left-[18%]"
  size={110}
  color="bg-green-300"
  duration={9}
/>

<DecorativeCircle
  position="bottom-[14%] right-[15%]"
  size={160}
  color="bg-orange-300"
  duration={11}
/>

<DecorativeCircle
  position="top-[45%] left-[4%]"
  size={70}
  color="bg-yellow-200"
  duration={8}
/>

<DecorativeCircle
  position="top-[50%] right-[6%]"
  size={60}
  color="bg-green-200"
  duration={7}
/>

    </section>

<div
  className="
    absolute
    bottom-6
    sm:bottom-10
    w-full
    px-4
    flex
    justify-center
    pointer-events-none
  "
>
  <div className="text-center space-y-2">
    <h1
      className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        font-bold
        tracking-tight
        text-[#85402D]
      "
    >
      Satyam Rathod
    </h1>

    <p
      className="
        text-sm
        sm:text-base
        md:text-lg
        text-[#85402D]/70
      "
    >
      Frontend Developer · Creative Coder · Anime-Inspired UI
    </p>
  </div>
</div>

</>
  );
};

export default Hero;
