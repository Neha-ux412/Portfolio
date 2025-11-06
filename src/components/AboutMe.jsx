import React from "react";
import aboutMeImage from "../assets/about_me.png";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center px-8"
      style={{
        backgroundImage: `url(${aboutMeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top fade overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#002b2b] z-0"></div>

      <div className="w-full max-w-5xl relative flex flex-col md:flex-row gap-10 z-10">
        {/* Timeline Line */}
        <div className="hidden md:block w-1 bg-gradient-to-b from-green-500 via-emerald-600 to-green-800 rounded-full shadow-lg"></div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3 text-white">
          <h2 className="text-4xl font-bold text-teal-400 text-center md:text-left mb-6">
            About Me
          </h2>
          <p className="text-lg text-center md:text-left mb-6">
             I’m   a
            passionate Computer Science and Engineering student with a strong
            academic background and love for problem-solving.
          </p>

          {/* Education Timeline Cards */}
          <motion.div
            className="relative bg-emerald-800/40 p-6 rounded-xl shadow-lg border border-emerald-500"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-emerald-400">🎓 B.Tech</h3>
            <p className="text-gray-200 text-300">
              Hyderabad Institute of Technology and Management <br />
              Computer Science & Engineering <br />
              <span className="font-bold text-green-500">CGPA: 8.9</span>
            </p>
          </motion.div>

          <motion.div
            className="relative bg-emerald-800/40 p-6 rounded-xl shadow-lg border border-emerald-500"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-emerald-400">🏫 Intermediate</h3>
            <p className="text-gray-200 text-300">
              Narayana Junior College, MPC <br />
              <span className="font-bold text-green-400">96.2%</span>
            </p>
          </motion.div>

          <motion.div
            className="relative bg-emerald-800/40 p-6 rounded-xl shadow-lg border border-emerald-500"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-emerald-400">📘 Schooling</h3>
            <p className="text-gray-200 text-300">
              Sri Chaitanya Techno Curriculum <br />
              <span className="font-bold text-green-400">CGPA: 10/10</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade overlay for smooth transition into Skills */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-0"></div>
    </section>
  );
};

export default AboutMe;
