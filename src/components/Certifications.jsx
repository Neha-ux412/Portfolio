import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cert1 from "../assets/certifications/python_1.png";
import cert2 from "../assets/certifications/prompt_engineering.png";
import cert3 from "../assets/certifications/python_ds.png";
import cert4 from "../assets/certifications/java_foundations.jpeg";
import cert5 from "../assets/certifications/java_fundamentals.jpeg";
import cert6 from "../assets/certifications/sql.jpeg";
import cert7 from "../assets/certifications/html_css.jpeg";
import cert8 from "../assets/certifications/cc.png";
import cert9 from "../assets/certifications/ai-tools.png";
import bgImage from "../assets/cert.jpg";

const Certifications = () => {
  const certifications = [
    { title: "Python for Everybody", skills: "Python", certifiedBy: "University of Michigan (Coursera)", img: cert1, link: "#" },
    { title: "Python Data Structures", skills: "Python, DSA", certifiedBy: "University of Michigan (Coursera)", img: cert3, link: "#" },
    { title: "Java Foundations", skills: "Java", certifiedBy: "Oracle Academy", img: cert4, link: "#" },
    { title: "Prompt Engineering", skills: "AI/ML", certifiedBy: "IBM", img: cert2, link: "#" },
    { title: "Java Fundamentals", skills: "Java", certifiedBy: "Oracle Academy", img: cert5, link: "#" },
    { title: "Database Programming with SQL", skills: "SQL", certifiedBy: "Oracle Academy", img: cert6, link: "#" },
    { title: "HTML5 and CSS3", skills: "HTML, CSS", certifiedBy: "TASK", img: cert7, link: "#" },
    { title: "Cloud Computing", skills: "Cloud", certifiedBy: "Simplilearn", img: cert8, link: "#" },
    { title: "AI Tools workshop", skills: "AI tools", certifiedBy: "Be10x", img: cert9, link: "#" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(certifications.length / cardsPerPage);

  const handlePrev = () => setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const handleNext = () => setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));

  const startIndex = currentPage * cardsPerPage;
  const selectedCerts = certifications.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div
      id="certifications"
      className="relative min-h-screen text-white px-6 py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-20"></div>
      {/* Simple Heading */}
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Certifications
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {selectedCerts.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/10 rounded-2xl shadow-lg overflow-hidden text-center p-4 backdrop-blur-lg border border-white/20"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-50 object-contain rounded-lg mb-3 bg-white/5 p-2"
                />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-300">Skills: {cert.skills}</p>
                <p className="text-sm text-gray-400">Certified by: {cert.certifiedBy}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
    </div>
  );
};

export default Certifications;
