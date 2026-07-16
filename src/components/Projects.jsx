import React, { useState } from "react";
import { projectData } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiChevronDown } from "react-icons/hi";

function SubProjectRow({ sub }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between py-2 border-b border-border last:border-0 md:last:border-b">
      <div className="flex items-center gap-2">
        <span className="text-sm text-accent dark:text-text-muted">
          {sub.name}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {sub.githubLink && (
          <a
            href={sub.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
          >
            <FaGithub className="text-sm" />
          </a>
        )}
        {sub.liveLink ? (
          <a
            href={sub.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-accent text-white hover:bg-accent-light transition-all duration-300"
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
    </div>
  );
}

function FeaturedProjectCard({ card, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className="group dark:bg-card bg-white border border-gray-400 dark:border-border rounded-2xl overflow-hidden flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
    >
      {card.video ? (
        <div className="w-full h-55 overflow-hidden bg-gray-100 dark:bg-black/20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover object-top">
            <source src={card.video} type="video/mp4" />
          </video>
        </div>
      ) : card.image ? (
        <div className="w-full h-55 overflow-hidden bg-gray-100 dark:bg-black/20">
          <img
            src={card.image}
            alt={`${card.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2 px-6">
        <h2 className="text-accent font-bold text-xl">{card.title}</h2>
        <p className="text-text-muted dark:text-text-main text-sm leading-relaxed">
          {card.description}
        </p>
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {card.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1" />
      <div className="flex gap-3 mt-2 px-6 pb-6">
        <a
          href={card.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300"
        >
          <FaGithub className="text-base" />
          View Code
        </a>
        {card.liveLink && (
          <a
            href={card.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-all duration-300"
          >
            <HiExternalLink className="text-base" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function MiniProjectsCard({ card }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className="dark:bg-card bg-white border border-gray-400 dark:border-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-accent font-bold text-xl">{card.title}</h2>
          <p className="text-text-muted dark:text-text-main text-sm leading-relaxed mt-1">
            {card.description}
          </p>
        </div>
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out 
        ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-border pt-3 grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {card.subProjects.map((sub, i) => (
            <SubProjectRow key={i} sub={sub} />
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-all duration-300 cursor-pointer "
        >
          <HiChevronDown
            className={`text-base transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
          />
          {expanded ? "Hide Projects" : "View Projects"}
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const featured = projectData.filter((p) => !p.subProjects);
  const miniProjects = projectData.find((p) => p.subProjects);

  return (
    <section
      id="projects"
      className="scroll-mt-16 dark:bg-card-dark bg-gray-50 min-h-screen py-16 px-6"
    >
      <div data-aos="fade-down" data-aos-duration="600" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-accent mb-2 inline-block border-b-2 border-transparent hover:border-accent">
          My Projects
        </h2>
        <p className="text-text-muted dark:text-text-main text-base">
          Things I have built
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((card, i) => (
            <FeaturedProjectCard key={card.title} card={card} index={i} />
          ))}
        </div>

        {miniProjects && <MiniProjectsCard card={miniProjects} />}
      </div>
    </section>
  );
}

export default Projects;