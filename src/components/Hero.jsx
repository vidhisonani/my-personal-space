import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import profilePhoto from "../assets/profile.webp";

const roles = ["Developer", "Programmer", "Coder"];

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = roles[currentRole];
    let timeout;

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 60);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, currentRole]);

  return (
    <section
      id="home"
      className="relative dark:bg-card-dark bg-gray-50 min-h-screen flex items-center px-6 overflow-hidden"
    >
      <div className="absolute top-10 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-accent-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <p
            data-aos="fade-right"
            data-aos-duration="600"
            className="text-accent dark:text-text-main text-lg mb-3 tracking-wide"
          >
            Hello, I'm
          </p>

          <h1
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold text-accent dark:text-text-main mb-4 leading-tight"
          >
            Vidhi Patel
          </h1>

          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-bold text-accent-light dark:text-text-main mb-4 h-12 flex items-center justify-center md:justify-start gap-2"
          >
            I'm a{" "}
            <span className="text-accent min-w-[10ch] text-left">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="300"
            className="text-accent-light dark:text-text-main text-base md:text-lg mb-8"
          >
            Computer Engineering Student
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex items-center gap-4 flex-wrap justify-center md:justify-start mb-10"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              View My Work
              <HiArrowDown className="text-base" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
            className="flex items-center gap-5 justify-center md:justify-start"
          >
            <a
              href="https://github.com/vidhisonani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-text-main transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/vidhipatel73/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-text-main hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right: Photo with decorative ring */}
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40 scale-110 animate-[spin_20s_linear_infinite]" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/30">
              <img
                src={profilePhoto}
                alt="Vidhi Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;