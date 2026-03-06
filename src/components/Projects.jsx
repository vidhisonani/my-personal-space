import React, { useState } from "react";
import { projectData } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiChevronDown } from "react-icons/hi";

function SubProjectRow({ sub, index }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-violet dark:text-text-muted">{sub.name}</span>
      {sub.liveLink ? (
        <a
          href={sub.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-violet text-white hover:bg-violet-light transition-all duration-300"
        >
          <HiExternalLink className="text-sm" />
          Live Demo
        </a>
      ) : (
        <span className="text-xs px-3 py-1 rounded-lg border border-border text-text-muted dark:text-text-muted">
          No Demo
        </span>
      )}
    </div>
  );
}

function ProjectCard({ card, index }) {
  const [expanded, setExpanded] = useState(false);
  const hasSubProjects = card.subProjects && card.subProjects.length > 0;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className="group dark:bg-card-dark bg-white border border-gray-400 dark:border-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-lg hover:shadow-violet/20"
    >
      <div className="flex flex-col gap-2">
        {/* Title and Description */}
        <h2 className="text-violet font-bold text-xl">{card.title}</h2>
        <p className="text-text-muted dark:text-text-muted text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
      {/* Expanded sub-projects list */}
      {hasSubProjects && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border pt-3 flex flex-col">
            {card.subProjects.map((sub, i) => (
              <SubProjectRow key={i} sub={sub} />
            ))}
          </div>
        </div>
      )}
      <div className="flex-1" />
      <div className="flex gap-3 mt-2">
        <a
          href={card.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-violet text-violet text-sm font-medium hover:bg-violet hover:text-white transition-all duration-300"
        >
          <FaGithub className="text-base" />
          View Code
        </a>
        {card.liveLink && (
          <a
            href={card.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet text-white text-sm font-medium hover:bg-violet-light transition-all duration-300"
          >
            <HiExternalLink className="text-base" />
            Live Demo
          </a>
        )}
        {/* Toggle button for sub-project repos */}
        {hasSubProjects && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet text-white text-sm font-medium hover:bg-violet-light transition-all duration-300"
          >
            <HiChevronDown
              className={`text-base transition-transform duration-300 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            />
            {expanded ? "Hide Projects" : "View Projects"}
          </button>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 dark:bg-card-dark bg-gray-50 min-h-screen py-16 px-6"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="text-center mb-12 "
      >
        <h2 className="text-4xl font-bold text-violet mb-2 inline-block border-b-2 border-transparent hover:border-violet">
          My Projects
        </h2>
        <p className="text-text-muted text-base">Things I have built</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projectData.map((card, i) => (
          <ProjectCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
