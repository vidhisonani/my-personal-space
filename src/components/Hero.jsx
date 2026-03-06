import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

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
      className="dark:bg-card-dark bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Greeting */}
      <p data-aos="fade-down" data-aos-duration="600" className="text-violet dark:text-text-muted text-lg mb-3 tracking-wide">
        Hello, I'm
      </p>

      {/* Name */}
      <h1 data-aos="fade-down" data-aos-duration="600" data-aos-delay="100" className="text-5xl md:text-6xl font-bold text-violet dark:text-text-main mb-4 leading-tight">
        <span className="text-violet">Vidhi Patel</span>
      </h1>

      {/* Typed role */}
      <div data-aos="fade-down" data-aos-duration="600" data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-violet-light dark:text-text-main mb-4 h-12 flex items-center justify-center gap-2">
        I'm a{" "}
        <span className="text-violet min-w-[10ch] text-left">
          {displayed}
          <span className="animate-pulse">|</span>
        </span>
      </div>

      {/* Subtitle */}
      <p data-aos="fade-down" data-aos-duration="600" data-aos-delay="300" className="text-violet-light dark:text-text-muted text-base md:text-lg mb-8">
        Computer Engineering Student
      </p>

      {/* CTA Buttons */}
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400"  className="flex items-center gap-4 flex-wrap justify-center mb-10">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet text-white font-semibold text-sm hover:bg-violet-light transition-all duration-300 hover:shadow-lg hover:shadow-violet/30 hover:-translate-y-0.5"
        >
          View My Work
          <HiArrowDown className="text-base" />
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-violet text-violet font-semibold text-sm hover:bg-violet hover:text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </div>

      {/* Social Links */}
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" className="flex items-center gap-5">
        <a
          href="https://github.com/vidhisonani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet dark:text-text-muted transition-all duration-300 hover:-translate-y-0.5"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/vidhipatel73/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet dark:text-text-muted hover:text-violet transition-all duration-300 hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </section>
  );
}

export default Hero;