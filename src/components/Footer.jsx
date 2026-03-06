import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <footer className="dark:bg-bg-dark bg-white w-full border-t border-gray-200 dark:border-violet py-4 shadow-lg shadow-gray-500 dark:shadow-sm">
      <div className="max-w-[95vw] md:max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-violet">
        <div className="md:col-span-2">
          <h1 className="text-lg md:text-xl font-bold md:mb-2 ">
            Vidhi's Portfolio
          </h1>
          <p className="text-sm md:text-md mb-2 dark:text-white">
            Thanks for stopping by! I'm passionate about building clean and
            responsive web experiences.
          </p>
          <p className="text-sm md:text-md dark:text-white">
            Let's collaborate and build something meaningful together.
          </p>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-lg md:text-xl font-bold md:mb-2">Quick Links</h1>
          <ul className="text-sm md:text-md grid grid-cols-1 md:grid-cols-2 gap-y-2 dark:text-white">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:underline hover:text-violet-light transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-lg md:text-xl font-bold md:mb-2 ">
            Contact Info
          </h1>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/vidhisonani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-violet dark:border-violet-light text-violet dark:text-white hover:bg-violet hover:text-white hover:shadow-md hover:shadow-violet/40 hover:scale-110 transition-all duration-300"
            >
              <BsGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/vidhipatel73/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-violet dark:border-violet-light text-violet dark:text-white hover:bg-violet hover:text-white hover:shadow-md hover:shadow-violet/40 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:vidhilotus7@gmail.com"
              aria-label="Send Email"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-violet dark:border-violet-light text-violet dark:text-white hover:bg-violet hover:text-white hover:shadow-md hover:shadow-violet/40 hover:scale-110 transition-all duration-300"
            >
              <MdOutlineEmail className="text-xl" />
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
