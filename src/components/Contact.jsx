import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import bgImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white px-6 py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-20"></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 max-w-3xl text-center flex flex-col items-center gap-6">
        {/* Warm Thank You Message */}
        <h2 className="text-5xl md:text-6xl font-bold text-teal-400 mb-6">
          Thank You!
        </h2>
        <p className="text-white text-lg md:text-xl mb-8">
          Thanks for taking the time to visit my portfolio. It means a lot! If you'd like to connect, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:gap-10 gap-6 items-center justify-center text-white text-lg">
          <div className="flex items-center gap-2">
            <FaPhone className="text-teal-400" />
            <span>+91-7207149164</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-teal-400" />
            <span>nehanjalibangaru@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/bangaru-nehanjali/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-3xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Neha-ux412?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-3xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
