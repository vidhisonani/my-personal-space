import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white dark:bg-card-dark border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <h1 className="flex items-center text-3xl font-semibold text-violet">
            Vidhi Patel
          </h1>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex justify-between w-full md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-violet">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-violet lg:hover:bg-transparent  cursor-pointer ${
                      isActive
                        ? "text-text-muted border-b-2 border-violet"
                        : "text-violet md:border-transparent"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-violet lg:hover:bg-transparent  cursor-pointer ${
                      isActive
                        ? "text-text-muted border-b-2 border-violet"
                        : "text-violet md:border-transparent"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-violet lg:hover:bg-transparent  cursor-pointer ${
                      isActive
                        ? "text-text-muted border-b-2 border-violet"
                        : "text-violet md:border-transparent"
                    }`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-violet lg:hover:bg-transparent  cursor-pointer ${
                      isActive
                        ? "text-text-muted border-b-2 border-violet"
                        : "text-violet md:border-transparent"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-violet lg:hover:bg-transparent  cursor-pointer ${
                      isActive
                        ? "text-text-muted border-b-2 border-violet"
                        : "text-violet md:border-transparent"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Mobile Nav */}
          <div
            className={`${
              open ? "block" : "hidden"
            } md:hidden justify-between w-full`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-violet">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-transparent cursor-pointer ${
                      isActive ? "text-text-muted" : "text-violet"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-transparent lg:hover:bg-transparent  cursor-pointer ${
                      isActive ? "text-text-muted" : "text-violet"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-transparent lg:hover:bg-transparent  cursor-pointer ${
                      isActive ? "text-text-muted" : "text-violet "
                    }`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-transparent lg:hover:bg-transparent  cursor-pointer ${
                      isActive ? "text-text-muted" : "text-violet"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-text-muted block py-2 pr-4 pl-3 border-b border-transparent lg:hover:bg-transparent  cursor-pointer ${
                      isActive ? "text-text-muted" : "text-violet"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <Hamburger open={open} setOpen={setOpen} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
