import { motion } from "motion/react";

const DecorativeCircle = ({
  position,
  size = 120,
  color = "bg-orange-300",
  duration = 8,
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`
        absolute ${position}
        ${color}
        rounded-full
        opacity-80
        pointer-events-none
      `}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default DecorativeCircle;
