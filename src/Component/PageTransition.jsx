import { motion } from "motion/react";
import React from "react";
const pageVariants = {
  initial: {
    opacity: 0,
    rotateY: -90,
    transformOrigin: "left center",
    perspective: 1200,
  },

  animate: {
    opacity: 1,
    rotateY: 0,
    transformOrigin: "left center",
    perspective: 1200,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1], 
    },
  },

  exit: {
    opacity: 0,
    rotateY: 90,
    transformOrigin: "right center",
    perspective: 1200,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const PageTransition = ({ children }) => {
  return (
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  style={{
    transformStyle: "preserve-3d",
  }}
>
  {children}
</motion.div>

  );
};

export default PageTransition;
