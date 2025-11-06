import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsBg from "../assets/projects.jpg";
import workImg from "../assets/work.png";

// Project images
import busTrackingImg from "../assets/projects/bus_tracking.png";
import attendanceImg from "../assets/projects/attendance.png";
import complexityImg from "../assets/projects/code.png";
import ecommerceImg from "../assets/projects/ecommerce.png";
import blogImg from "../assets/projects/blog.png";
import bookWorldImg from "../assets/projects/bookworld.png";
import schoolImg from "../assets/projects/School.png";
import todoImg from "../assets/projects/todo.png";

const projects = [
  { title: "Bus Live Tracking", image: busTrackingImg, description: "Real-time bus tracking system for college students.", liveLink: workImg, githubLink: workImg },
  { title: "Smart Attendance System", image: attendanceImg, description: "Automated attendance system with face recognition. One snap - 60 students attendance marked", liveLink: workImg, githubLink: workImg },
  { title: "Code Complexity Analyzer", image: complexityImg, description: "Analyzes code and provides time and space complexity.", liveLink: workImg, githubLink: workImg },
  { title: "Mini E-commerce Website", image: ecommerceImg, description: "A small mini ecommerce website that helps users search and add to cart products and for sellers to add products.", liveLink: "https://e-commerce-platform-8i8h2wy4l-nehanjalis-projects.vercel.app/", githubLink: "https://github.com/Neha-ux412/mini-ecommerce-platform", isLive: true },
  { title: "Blog Editor", image: blogImg, description: "A web app that allows users to add, edit, publish blogs having a feature of Auto Draft.", liveLink: "https://blog-editor-iz9e4hoce-nehanjalis-projects.vercel.app/", githubLink: "https://github.com/Neha-ux412/blog-editor", isLive: true },
  { title: "My-Book World", image: bookWorldImg, description: "Front-end app to browse and download books, manage reading lists, and favourites.", liveLink: "https://my-book-world-qvr5i1n42-nehanjalis-projects.vercel.app/", githubLink: "https://github.com/Neha-ux412/My-book-world", isLive: true },
  { title: "School Management API", image: schoolImg, description: "API to add, edit, delete, and get details of schools.", githubLink: "https://github.com/Neha-ux412/school-management", isLive: false },
  { title: "Todo List", image: todoImg, description: "A simple Todo app to create, read, update, and delete tasks.", githubLink: "https://github.com/Neha-ux412/Todo-app", isLive: false }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const next = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen px-8 py-16 flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${projectsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top fade overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-20"></div>
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
        }}
      ></div>
      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20"></div>

      <h2 className="relative text-4xl font-bold mb-12 z-10 text-center">
        My Projects
      </h2>

      <div className="relative w-full flex items-center z-10">
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-0 z-20 p-6 text-4xl bg-gray-700/40 hover:bg-gray-700/60 rounded-full transition duration-300 ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          ◀
        </button>

        {/* Projects Row */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8"
            animate={{ x: `-${(currentIndex * (100 / itemsPerPage))}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-72 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl flex-shrink-0 border border-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-5">{project.description}</p>
                  <div className="flex gap-4">
                    {project.isLive ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-teal-500 rounded-xl hover:bg-teal-400 transition"
                      >
                        Live
                      </a>
                    ) : (
                      <button
                        disabled
                        className="px-4 py-2 bg-gray-500 cursor-not-allowed rounded-xl"
                        title="This project is backend-only"
                      >
                        Live
                      </button>
                    )}

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={currentIndex + itemsPerPage >= projects.length}
          className={`absolute right-0 z-20 p-6 text-4xl bg-gray-700/40 hover:bg-gray-700/60 rounded-full transition duration-300 ${currentIndex + itemsPerPage >= projects.length ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Projects;
