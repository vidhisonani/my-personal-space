import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-60 h-0.75 bg-accent shadow-[0_0_12px_rgba(189,112,87,0.5)] transition-[width] duration-150"
        style={{ width: `${progress}%` }} />
      <header
        data-aos="fade-down"
        data-aos-duration="600"
        className=" z-50 top-0 border-b border-border bg-bg/90 backdrop-blur-md"
      >
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto h-18 flex items-center justify-between">
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Go to the beginning"
          >
            <span className="w-8 h-8  bg-accent text-white flex items-center justify-center font-mono text-[13px] font-semibold">
              VP
            </span>
            <span className="font-heading font-semibold text-[15px] text-text-main">
              Vidhi Patel
            </span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`font-mono-label py-2 transition-colors duration-200 cursor-pointer relative
                  ${activeSection === id
                    ? "text-accent after:content-[''] after:block after:h-0.5 after:mt-2 after:bg-accent"
                    : "text-text-muted hover:text-accent"
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              className="w-9.25 h-9.25 border border-border bg-card text-text-main flex items-center justify-center cursor-pointer hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <Hamburger open={open} setOpen={setOpen} />
          </div>
        </div>
        {open && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-card border-b border-border flex flex-col px-4 py-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`text-left py-3 font-mono-label transition-colors duration-200
                  ${activeSection === id ? "text-accent" : "text-text-muted"}`}
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
