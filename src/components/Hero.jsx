import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/me.jpg";
import heroBg from "../assets/Background.png"; // <-- your hero background image

const Hero = () => {
  return (
    <section
    id="home" 
      className="relative h-screen w-full flex items-center justify-center px-8 text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Image with blob shape */}
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="relative">
          {/* Teal blob behind image */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-teal-900 via-teal-700 to-cyan-500 rounded-[60%] blur-3xl opacity-60 animate-pulse"></div>

          {/* Image unchanged */}
          <div className="overflow-hidden rounded-[30%_70%_70%_30%/40%_30%_70%_60%] shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-cyan-500/40">
            <img
              src={myImage}
              alt="Neha"
              className="w-[500px] h-[600px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Text with animations */}
      <div className="w-1/2 flex flex-col justify-center items-start space-y-6 pl-10">
        {/* Name */}
        <motion.h2
          className="text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I am Nehanjali
        </motion.h2>

        {/* Subtitle */}
        <motion.h1
          className="text-3xl font-semibold text-gray-300 tracking-wide"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Welcome to my Portfolio
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="max-w-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          I’m a passionate software developer, problem solver, and creator. I
          love turning ideas into real projects that make an impact. Explore my
          work and journey here!
        </motion.p>
      </div>

      {/* Fade overlay at bottom (smooth transition into AboutMe) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#002b2b]"></div>
    </section>
  );
};

export default Hero;
