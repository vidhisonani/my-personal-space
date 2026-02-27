import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-bg-dark bg-white w-full border-t border-gray-200 dark:border-violet py-4 shadow-lg shadow-gray-500 dark:shadow-sm">
      <div className="max-w-[95vw] md:max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-violet">
        <div className="md:col-span-2">
          <h1 className="text-xl md:text-2xl font-bold md:mb-2 ">
            Vidhi's Portfolio
          </h1>
          <p className="text-md md:text-lg mb-2 dark:text-white">
            Thanks for stopping by! I'm passionate about building clean and
            responsive web experiences.
          </p>
          <p className="text-md md:text-lg dark:text-white">
            Let's collaborate and build something meaningful together.
          </p>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-xl md:text-2xl font-bold md:mb-2">Quick Links</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 dark:text-white">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/education" className="hover:underline">
                Education
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-xl md:text-2xl font-bold md:mb-2 ">
            Contact Info
          </h1>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/vidhisonani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-violet dark:border-violet-light text-violet dark:text-white hover:bg-violet hover:text-white hover:shadow-md hover:shadow-violet/40 hover:scale-110 transition-all duration-300"
            >
              <BsGithub className="text-2xl"/>
            </a>
            <a
              href="https://linkedin.com/in/vidhipatel73/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-violet dark:border-violet-light text-violet dark:text-white hover:bg-violet hover:text-white hover:shadow-md hover:shadow-violet/40 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl"/>
            </a>
            <a
              href="mailto:vidhilotus7@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-violet dark:border-violet-light text-violet dark:text-white hover:bg-violet hover:text-white hover:shadow-md hover:shadow-violet/40 hover:scale-110 transition-all duration-300"
            >
              <MdOutlineEmail className="text-2xl"/>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 mb-2">
        <p className="text-md text-violet font-bold">
          &copy; {year} Vidhi Patel | Made with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
