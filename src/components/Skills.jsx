import React, { useMemo } from "react";
import { skillsData } from "../data/skills";

function getBentoLayout(categories) {
  const sorted = [...categories].sort(
    (a, b) => b.skills.length - a.skills.length
  );
  return {
    featured: sorted[0],
    stacked: sorted.slice(1),
  };
}

function IconChip({ skill }) {
  const Icon = skill.icon;
  const iconSizeClass = skill.iconClassName ?? "text-2xl sm:text-3xl";
  return (
    <div className="flex flex-col items-center gap-1.5 group/chip cursor-default w-18 sm:w-20 shrink-0">
      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 transition-all duration-300 group-hover/chip:scale-105 group-hover/chip:border-accent group-hover/chip:shadow-md group-hover/chip:shadow-accent/20">
        <Icon
          role="img"
          aria-label={skill.name}
          className={`block transition-all duration-300 group-hover/chip:brightness-110 ${iconSizeClass} ${!skill.color ? "text-gray-800 dark:text-white" : ""
            }`}
          style={skill.color ? { color: skill.color } : {}}
        />
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-text-muted dark:text-gray-400 group-hover/chip:text-accent transition-colors duration-300 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  );
}

function BentoCard({ card, featured = false, className = "", delay = 0 }) {
  const CardIcon = card.cardIcon;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={delay}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-border bg-white dark:bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/15 ${featured ? "p-5 sm:p-6" : "p-4 sm:p-5"
        } ${className}`}
    >
      <div
        className={`pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full blur-3xl transition-opacity duration-300 ${featured
            ? "bg-accent/10 group-hover:bg-accent/20"
            : "bg-accent/5 group-hover:bg-accent/10"
          }`}
      />

      <div
        className={`relative flex shrink-0 items-start justify-between gap-3 ${featured ? "mb-4 sm:mb-5" : "mb-3 sm:mb-4"
          }`}
      >
        <div>
          <h3 className="text-accent dark:text-white font-bold text-base sm:text-lg">
            {card.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-text-muted dark:text-text-muted mt-0.5">
            {card.skills.length} {card.skills.length === 1 ? "skill" : "skills"}
          </p>
        </div>
        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 dark:bg-accent/15 shrink-0">
          <CardIcon className="text-lg sm:text-xl text-accent transition-colors duration-300 group-hover:text-accent-light" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-wrap justify-center content-start gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-4">
        {card.skills.map((skill, j) => (
          <IconChip key={skill.name + j} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const { featured, stacked } = useMemo(() => getBentoLayout(skillsData), []);

  return (
    <section
      id="skills"
      className="scroll-mt-16 dark:bg-card-dark bg-gray-50 min-h-screen py-16 px-6"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-accent mb-2 inline-block border-b-2 border-transparent hover:border-accent">
          My Skills
        </h2>
        <p className="dark:text-text-main text-text-muted text-base">
          Technologies & tools I work with
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 md:items-stretch gap-3 md:gap-4">
          <BentoCard
            card={featured}
            featured
            className="md:col-span-2"
            delay={0}
          />
          <div className="md:col-span-3 flex h-full flex-col justify-center gap-3 md:gap-4">
            {stacked.map((card, i) => (
              <BentoCard key={card.title} card={card} delay={(i + 1) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
