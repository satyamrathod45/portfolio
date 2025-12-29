import { motion, scale } from "motion/react";
import { Link } from "react-router-dom";

const fadeFast = { duration: 0.18, ease: "easeOut" };

const hoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.3 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 1 },
  hover: { opacity: 1, scale: 2 },
};

const colorVariants = {
  initial: { opacity: 1, scale: 1 },
  hover: { opacity: 0, scale: 2 },
};

const FloatingCircle = ({
  position,
  themeColor,
  image,
  onEnter,
  onLeave,
  text,
  route
}) => {
  return (
    /* FLOATING LAYER (ONLY Y ANIMATION) */
    <Link to={route}>
      {" "}
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute ${position} z-[9999]`}
      >
        {/* HOVER LAYER (SCALE + VARIANTS) */}
        <motion.div
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="
          w-[72px] h-[72px]
          sm:w-[96px] sm:h-[96px]
          lg:w-[128px] lg:h-[128px]
          cursor-pointer
          rounded-full
          origin-center
        "
        >
          {/* MASK */}
          <div className="relative w-full h-full rounded-full ">
            {/* THEME COLOR */}
            <motion.div
              variants={colorVariants}
              transition={fadeFast}
              className={`absolute inset-0 ${themeColor} rounded-full sm:p-0 p-5`}
            />

            {/* MOBILE NAV TEXT */}
            <div className="sm:hidden absolute bottom-6 w-full text-center flex justify-center items-center">
              <p className="text-md font-semibold text-[#85402D]">{text}</p>
            </div>

            {/* IMAGE */}
            <motion.img
              src={image}
              alt=""
              variants={imageVariants}
              transition={fadeFast}
              className="
              absolute inset-0
              w-full h-full
              object-cover
              pointer-events-none
              rounded-full
            "
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FloatingCircle;
