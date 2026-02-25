import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="dark:bg-card-dark bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-2xl">
          {/* Logo */}
          <h1 className="flex items-center text-3xl font-semibold text-violet">
            Vidhi Patel
          </h1>
          {/* Desktop Nav */}
          <div className="hidden md:flex justify-between w-full md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-violet">
              {navItems.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-violet lg:hover:bg-transparent  cursor-pointer 
                      ${
                        isActive
                          ? "text-text-muted border-b-2 border-violet"
                          : "text-violet md:border-transparent"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Nav */}
          <div
            className={`${
              open ? "block" : "hidden"
            } md:hidden justify-between w-full`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-violet">
              {navItems.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-transparent cursor-pointer 
                    ${isActive ? "text-text-muted" : "text-violet"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* dark mode toggle and hamburger */}
          <div className="flex items-center gap-3 md:order-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 shadow-md shadow-purple-400 cursor-pointer transition-all ease-out"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  color="#f8e71c"
                  fill="none"
                >
                  <defs />
                  <path
                    fill="currentColor"
                    d="M12,6.25 C15.176,6.25 17.75,8.824 17.75,12 C17.75,15.176 15.176,17.75 12,17.75 C8.824,17.75 6.25,15.176 6.25,12 C6.25,8.824 8.824,6.25 12,6.25 Z M7.75,12 C7.75,14.347 9.653,16.25 12,16.25 C14.347,16.25 16.25,14.347 16.25,12 C16.25,9.653 14.347,7.75 12,7.75 C9.653,7.75 7.75,9.653 7.75,12 Z M5.459,4.398 L6.52,5.459 C6.812,5.752 6.812,6.227 6.52,6.52 C6.227,6.812 5.752,6.812 5.459,6.52 L4.398,5.459 C4.105,5.166 4.105,4.691 4.398,4.398 C4.691,4.105 5.166,4.105 5.459,4.398 Z M2,11.25 L3.5,11.25 C3.914,11.25 4.25,11.586 4.25,12 C4.25,12.414 3.914,12.75 3.5,12.75 L2,12.75 C1.586,12.75 1.25,12.414 1.25,12 C1.25,11.586 1.586,11.25 2,11.25 Z M12.75,2 L12.75,3.5 C12.75,3.914 12.414,4.25 12,4.25 C11.586,4.25 11.25,3.914 11.25,3.5 L11.25,2 C11.25,1.586 11.586,1.25 12,1.25 C12.414,1.25 12.75,1.586 12.75,2 Z M20.5,11.25 L22,11.25 C22.414,11.25 22.75,11.586 22.75,12 C22.75,12.414 22.414,12.75 22,12.75 L20.5,12.75 C20.086,12.75 19.75,12.414 19.75,12 C19.75,11.586 20.086,11.25 20.5,11.25 Z M12.75,20.5 L12.75,22 C12.75,22.414 12.414,22.75 12,22.75 C11.586,22.75 11.25,22.414 11.25,22 L11.25,20.5 C11.25,20.086 11.586,19.75 12,19.75 C12.414,19.75 12.75,20.086 12.75,20.5 Z M6.52,18.541 L5.459,19.602 C5.167,19.895 4.692,19.895 4.399,19.602 C4.106,19.309 4.106,18.834 4.399,18.541 L5.459,17.48 C5.752,17.188 6.227,17.188 6.52,17.48 C6.813,17.773 6.813,18.248 6.52,18.541 Z M19.602,5.459 L18.541,6.52 C18.248,6.813 17.773,6.813 17.48,6.52 C17.187,6.227 17.187,5.752 17.48,5.459 L18.541,4.398 C18.834,4.105 19.309,4.105 19.602,4.398 C19.895,4.691 19.895,5.166 19.602,5.459 Z M18.541,17.48 L19.601,18.541 C19.894,18.834 19.894,19.309 19.601,19.602 C19.308,19.895 18.833,19.895 18.541,19.602 L17.48,18.541 C17.187,18.248 17.187,17.773 17.48,17.48 C17.773,17.187 18.248,17.187 18.541,17.48 Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  color="#3081df"
                  fill="none"
                >
                  <defs />
                  <path
                    fill="currentColor"
                    d="M10.516,2.043 C10.696,2.277 10.722,2.593 10.583,2.853 C9.999,3.947 9.668,5.196 9.668,6.525 C9.668,10.837 13.163,14.332 17.475,14.332 C18.804,14.332 20.053,14.001 21.147,13.417 C21.406,13.278 21.723,13.304 21.957,13.484 C22.191,13.663 22.297,13.963 22.23,14.25 C21.156,18.835 17.041,22.25 12.127,22.25 C6.396,22.25 1.75,17.604 1.75,11.873 C1.75,6.959 5.165,2.844 9.75,1.77 C10.037,1.703 10.337,1.809 10.516,2.043 Z M8.596,3.726 C5.45,5.091 3.25,8.226 3.25,11.873 C3.25,16.776 7.224,20.75 12.127,20.75 C15.774,20.75 18.909,18.55 20.274,15.404 C19.39,15.682 18.45,15.832 17.475,15.832 C12.335,15.832 8.168,11.665 8.168,6.525 C8.168,5.55 8.318,4.61 8.596,3.726 Z"
                  />
                </svg>
              )}
            </button>
            <Hamburger open={open} setOpen={setOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
