import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import codingImg from "../assets/achieves/coding.png";
import nxtwaveImg from "../assets/achieves/nxtwave.png";
import contestImg from "../assets/achieves/contest.png";
import bgImage from "../assets/acievements.jpg";

// Counter that counts only once
const Counter = ({ target, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // triggers only once
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 50);
    }
  }, [inView, target, started]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Individual Achievement Card
const AchievementCard = ({ img, title, desc, number, suffix, index }) => {
  return (
    <motion.div
      className="min-w-[360px] bg-gray-900/80 rounded-3xl shadow-lg border border-gray-700 flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }} // animate once on mount
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-full h-72 md:h-80 flex-shrink-0 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="p-6 flex flex-col items-center text-center flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>

        {number && (
          <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">
            <Counter target={number} suffix={suffix} />
          </div>
        )}

        <p className="text-gray-300 text-base">{desc}</p>
      </div>
    </motion.div>
  );
};

// Main Achievements Component
const Achievements = () => {
  const achievements = [
    {
      img: contestImg,
      title: "DSA Contests",
      number: 8,
      suffix: "+",
      desc: "Participated in coding competitions, securing top ranks like 2, 5, 10, and 83.",
    },
    {
      img: nxtwaveImg,
      title: "DSA Mastery",
      desc: "Cleared the entrance test and earned a free DSA Mastery Series from NXTWave.",
    },
    {
      img: codingImg,
      title: "Problems Solved",
      number: 500,
      suffix: "+",
      desc: "Solved over 500+ problems across platforms like LeetCode, HackerRank, and NXTWave.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen w-full py-20 relative flex flex-col items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-20"></div>

      <h2 className="relative text-5xl md:text-4xl font-bold text-white mb-12 z-10">
        Achievements
      </h2>

      <div className="relative z-10 w-full flex overflow-x-auto space-x-8 px-8 py-6 scrollbar-hide">
        {achievements.map((ach, i) => (
          <AchievementCard key={i} index={i} {...ach} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
    </section>
  );
};

export default Achievements;
