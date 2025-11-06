import React from "react";
import { motion } from "framer-motion";
import skillsBg from "../assets/skills.jpeg";

import python from "../assets/skills/python.jpeg";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/js.png";
import reactLogo from "../assets/skills/reactjs.png";
import node from "../assets/skills/node.jpg";
import express from "../assets/skills/exx.png";
import mongodb from "../assets/skills/mongo.png";
import mysql from "../assets/skills/sql.png";
import git from "../assets/skills/git.jpg";
import postman from "../assets/skills/post.jpg";
import api from "../assets/skills/api.jpg";

// Soft skill icons
import communication from "../assets/skills/comm.jpg";
import leadership from "../assets/skills/leadership.png";
import time from "../assets/skills/time.jpeg";
import quicklearner from "../assets/skills/quicklearner.png";
import adaptability from "../assets/skills/adaptability.png";
import pressure from "../assets/skills/can_work_under_pressure.png";

const Skills = () => {
  const technical = [
    { logo: python },
    { logo: html },
    { logo: css },
    { logo: javascript },
    { logo: reactLogo },
    { logo: node },
    { logo: express },
    { logo: mongodb },
    { logo: mysql },
    { logo: git },
    { logo: postman },
    { logo: api },
  ];

  const softSkills = [
    { logo: communication, name: "Communication" },
    { logo: leadership, name: "Leadership" },
    { logo: time, name: "Time Management" },
    { logo: quicklearner, name: "Quick Learner" },
    { logo: adaptability, name: "Adaptability" },
    { logo: pressure, name: "Work Under Pressure" },
  ];

  const SkillCard = ({ skill, index, delay = 0, showName = false }) => (
    <motion.div
      key={index}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: index * delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="w-24 h-[150%] rounded-xl border-2 border-gray-400 flex items-center justify-center shadow-md relative overflow-hidden bg-white">
        {/* Highlight gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 opacity-0 rounded-xl"
          whileHover={{
            opacity: [0, 0.6, 0],
            scale: [1, 1.05, 1],
            transition: { duration: 0.8, repeat: Infinity },
          }}
        />
        <img
          src={skill.logo}
          alt="skill"
          className="w-full h-full object-contain relative z-10"
        />
      </div>
      {showName && (
        <p className="text-sm text-gray-200 mt-2 text-center">{skill.name}</p>
      )}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen px-8 py-16 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${skillsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* ✅ Top fade overlay (for smooth transition from AboutMe) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-20"></div>

      {/* ✅ Bottom fade overlay (for smooth transition into Projects) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20"></div>

      {/* Technical Skills */}
      <h3 className="text-3xl font-semibold mt-8 mb-12 text-center text-white relative z-10">
        Technical Skills
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-12 gap-y-10 justify-items-center relative z-10">
        {technical.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} delay={0.1} />
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-3xl font-semibold mt-16 mb-8 text-center text-white relative z-10">
        Soft Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-5 justify-items-center relative z-10">
        {softSkills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            index={index}
            delay={0.15}
            showName={true}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
    </section>
  );
};

export default Skills;
