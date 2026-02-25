import React from "react";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-card-dark bg-gray w-full border-t border-gray-200 dark:border-violet py-4">
      <div className="mt-2 flex justify-center items-center max-w-[90vw] mx-auto dark:text-white text-2xl sm:text-2xl">
        <a
          href="https://github.com/vidhisonani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <BsGithub className="cursor-pointer mx-2 mb-2 hover:text-violet transition-colors duration-200" />
        </a>
        <a
          href="https://linkedin.com/in/vidhipatel73/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <CiLinkedin className="cursor-pointer mx-2 mb-2 hover:text-violet transition-colors duration-200" />
        </a>
        <a href="mailto:vidhilotus7@gmail.com" aria-label="Send Email">
          <MdOutlineEmail className="cursor-pointer mx-2 mb-2 hover:text-violet transition-colors duration-200" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:gap-2 sm:grid-cols-3 max-w-[90vw] mx-auto text-center">
        <ul className="text-violet font-medium">
          <li className="">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
        <ul className="text-violet font-medium">
          <li className="">
            <Link to="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
        </ul>
        <ul className="text-violet font-medium">
          <li className="">
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
      <div className="flex justify-center items-center mt-5 mb-2">
        <p className="font-medium text-violet">
          &copy; {year} Vidhi Patel | Made with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
