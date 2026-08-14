import React, { useState } from "react";
import { projectData } from "../data/projects";
import { ChevronDown, ArrowRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function WorkItem({ card, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1"
    >
      <div className="p-6 md:p-8">
        {/* Project Number */}
        <div className="font-mono-label text-accent mb-4">
          {number} / built with care
        </div>

        <h3 className="font-heading text-[28px] md:text-[35px] leading-none text-text-main">
          {card.title.split(" - ")[0]}
        </h3>

        {card.title.split(" - ")[1] && (
          <div className="font-mono-label text-accent mt-2">
            {card.title.split(" - ")[1]}
          </div>
        )}

        <p className="text-text-muted text-sm leading-[1.7] mt-5 mb-4">
          {card.description}
        </p>

        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="bg-card-alt text-text-muted px-2 py-1.5 font-mono-label"
            >
            { tag }
              </span>
        ))}
      </div>
        )}

      <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-5">
        {card.githubLink && (
          <a
            href={card.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${card.title} on GitHub`}
            className="inline-flex items-center gap-1.5 text-accent font-mono-label hover:text-accent-light hover:underline transition-colors duration-200"
          >
            <FiGithub size={16} />
            GitHub
          </a>
        )}

        {card.liveLink && (
          <a
            href={card.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${card.title} live demo`}
            className="inline-flex items-center gap-1.5 text-accent font-mono-label hover:text-accent-light hover:underline transition-colors duration-200"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </div>
    </article >
  );
}

function SubProjectRow({ sub }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-border ">
      <div className="flex items-center gap-2 min-w-0">
        <span className="font-mono text-[11px] text-text-main truncate">
          {sub.name}
        </span>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {sub.tech && sub.tech.length > 0 && (
          <div className="flex items-center gap-1 px-2 py-1 h-[27px] border border-border">
            {sub.tech.map((t, i) => (
              <t.icon
                key={i}
                size={15}
                style={{ color: t.color }}
              />
            ))}
          </div>
        )}

        {sub.githubLink && (
          <a
            href={sub.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${sub.name} code on GitHub`}
            className="w-[27px] h-[27px] flex items-center justify-center border border-border text-text-muted hover:border-accent hover:text-accent transition-colors duration-200"
          >
            <FiGithub size={15} />
          </a>
        )}

        {sub.liveLink ? (
          <a
            href={sub.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${sub.name} demo`}
            className="w-[27px] h-[27px] border border-border flex items-center justify-center text-accent hover:border-accent hover:text-accent transition-colors duration-200"
          >
            <ExternalLink size={15} />
          </a>
        ) : (
          <span className="text-[9px] px-2 py-1 border border-border text-text-muted font-mono">
            No Demo
          </span>
        )}
      </div>
    </div>
  );
}

function MiniProjects({ card }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className="border border-border bg-card p-6"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-4 border-b border-border">
        <div>
          <div className="font-mono-label text-accent">
            the margins are growing
          </div>

          <h3 className="font-heading text-2xl font-semibold mt-1 mb-1 text-text-main">
            {card.title}
          </h3>

          <p className="text-text-muted text-xs">
            {card.description}
          </p>
        </div>

        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-2 md:justify-end md:max-w-[270px]">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="bg-card-alt text-text-muted px-2 py-1.5 font-mono-label"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {card.subProjects.map((sub, i) => (
            <SubProjectRow
              key={i}
              sub={sub}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 pt-4">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-white font-mono-label cursor-pointer hover:bg-accent-dark transition-colors duration-300"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${expanded
                ? "rotate-180"
                : "rotate-0"
              }`}
          />

          {expanded
            ? "Hide Projects"
            : "View Projects"}
        </button>

        {card.githubLink && (
          <a
            href={card.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-mono-label hover:underline"
          >
            Browse GitHub
            <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const featured = projectData.filter(
    (p) => !p.subProjects
  );

  const miniProjects = projectData.find(
    (p) => p.subProjects
  );

  return (
    <section
      id="projects"
      className="bg-bg py-20 md:py-28 border-t border-border"
    >
      <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[185px_1fr] gap-9 mb-14">
          <p className="font-mono-label text-accent pt-2.5">
            03 / evidence
          </p>

          <h2 className="font-heading font-medium text-[39px] md:text-[70px] leading-[0.97] tracking-[-0.07em] max-w-[690px]">
            The things I make
            <br />
            <span className="text-text-muted">
              tell the story back.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {featured.map((card, i) => (
            <WorkItem
              key={card.title}
              card={card}
              index={i}
            />
          ))}
        </div>

        {miniProjects && (
          <div className="mt-6">
            <MiniProjects
              card={miniProjects}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;