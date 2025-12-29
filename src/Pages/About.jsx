import React from "react";
import luffyMain from "../assets/luffy/satyam.png";
import luffyFace from "../assets/luffy/downright.png"; 
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="bg-[#FBF2E6] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* LEFT IMAGE */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl shadow-md overflow-hidden">
            <img
              src={luffyMain}
              alt="Luffy"
              className="w-full h-68x sm:h-[60vh] lg:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT INFO CARD */}
        <motion.div className="bg-[#FFCC6D] rounded-2xl p-6 lg:p-8 text-[#85402D] space-y-4 relative cursor-pointer"
        animate={{y:[0, -14 , 0] , x:[0 ,14 , 0] , transition: {
            duration: 4,
            repeat: Infinity,

        }}}
        whileHover={{backgroundColor: "#93e090",scale:1.1 , 
            transition: {duration: 0.1 }
        }}
        
        >
          <h2 className="text-2xl font-bold">Satyam Rathod</h2>

          <p className="text-sm opacity-80">
            India based Developer
          </p>

          <p className="font-semibold">
            Full Stack Developer | Machine Learning Enthusiast
          </p>

          <p className="text-sm leading-relaxed">
            I build impactful, user-focused digital products by blending
            engineering, creativity, and logic.
          </p>

          <p className="text-sm leading-relaxed">
            I love turning complex ideas into simple, usable, and scalable
            solutions. Whether it’s web apps or intelligent systems,
            I enjoy building things that actually matter.
          </p>

          <p className="text-sm leading-relaxed">
            Always open to collaboration, learning, and building something
            meaningful together.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM CTA */}
      <div className="max-w-7xl mx-auto mt-14 flex flex-col sm:flex-row items-center justify-end gap-6">

        {/* LUFFY FACE */}
        <div className="w-[90px] h-[90px] rounded-full bg-orange-400 flex items-center justify-center object-cover">
          <img
            src={luffyFace}
            alt="Luffy Smile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* TEXT */}
        <div className="text-[#85402D] text-center sm:text-left">
          <p className="font-bold bg-green-300 inline-block px-2 py-1 rounded">
            Ready to build something awesome together?
          </p>
          <p className="mt-2 text-sm">
            satyamrathodi70@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
