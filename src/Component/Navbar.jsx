import { useState, useEffect, useRef } from "react";
import { RiMenuLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { MdMusicNote } from "react-icons/md";

import themeMusic from "../assets/music/theme.mp3";

/* ---------- Animation ---------- */
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const musicVariants = {
  idle: {
    rotate: 0,
  },
  playing: {
    rotate: [0, 100, -20, -20, 0],
    width: [10 , 100 , 10],
    transition: {
      repeat: Infinity,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  /* lock scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* play / pause music */
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 1;
      audioRef.current.currentTime = 15;
      audioRef.current.play();

    }

    setPlaying(!playing);
  };

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between relative z-50">
      
      {/* LOGO */}
      <Link
        to="/"
        className="text-xl font-bold tracking-wide uppercase text-[#85402D]"
      >
        satyam<span className="font-normal">.work</span>
      </Link>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center gap-4">

        {/* MUSIC BUTTON */}
        <motion.button
          onClick={toggleMusic}
          variants={musicVariants}
          animate={playing ? "playing" : "idle"}
          className="
            text-[#85402D]
            p-2
            border
            border-[#85402D]
            rounded-full
            hover:bg-[#85402D]/10
            transition
            flex
            justify-center
            items-center
          "
        >
          <MdMusicNote size={26} />
        </motion.button>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#85402D]"
        >
          <RiMenuLine size={26} />
        </button>
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} loop src={themeMusic} />

      {/* ================= DESKTOP MENU ================= */}
      <ul className="hidden md:flex gap-8 text-[#85402D] font-medium">
        {[
          ["Home", "/"],
          ["Projects", "/projects"],
          ["Skills", "/skills"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([label, path]) => (
          <li key={path} className="relative group">
            <Link to={path} className="py-2 inline-block">
              {label}
            </Link>

            <span
              className="
                absolute
                left-0
                -bottom-1
                h-0.5
                w-0
                bg-[#85402D]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </li>
        ))}
      </ul>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              inset-0
              bg-green-300
              z-50
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-[#85402D]"
            >
              <FaTimes size={28} />
            </button>

            <ul className="flex flex-col gap-4 text-2xl font-semibold text-[#85402D] w-full max-w-md">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["Skills", "/skills"],
                ["About Me", "/about"],
                ["Contact Me", "/contact"],
              ].map(([label, path]) => (
                <li key={path} onClick={() => setOpen(false)}>
                  <Link
                    to={path}
                    className="
                      block
                      w-full
                      px-12
                      py-4
                      border-r-4
                      border-transparent
                      hover:border-[#85402D]
                      hover:bg-green-200
                      transition-all
                      duration-200
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
