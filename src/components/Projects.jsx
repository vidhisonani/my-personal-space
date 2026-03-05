import React from "react";
import { projectData } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

function ProjectCard({ card }) {
  return (
    <div className="group dark:bg-card-dark bg-white border border-gray-400 dark:border-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-lg hover:shadow-violet/20">
      <div className="flex flex-col gap-2">
        {/* Title and Description */}
        <h2 className="text-violet font-bold text-xl">{card.title}</h2>
        <p className="text-text-muted dark:text-text-muted text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
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
        </div>
      </div>
  );
}

function Projects() {
  return (
    <div className="dark:bg-bg-dark min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-violet mb-2">My Projects</h2>
        <p className="text-text-muted text-base">Things I have built</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projectData.map((card) => (
          <ProjectCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
