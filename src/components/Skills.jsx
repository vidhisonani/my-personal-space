import React from "react";
import { skillsData } from "../data/skills";

function IconChip({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon
        aria-label={skill.name}
        style={skill.color ? { color: skill.color } : {}}
        className={`text-3xl ${
          !skill.color ? "text-gray-800 dark:text-white" : ""
        }`}
      />
      <span className="text-xs text-text-muted">{skill.name}</span>
    </div>
  );
}

function Pill({ label, colorClass }) {
  return (
    <span
      className={`${colorClass} border rounded-full px-3 py-1 text-xs font-medium transition-all duration-300`}
    >
      {label}
    </span>
  );
}

function SkillCard({ card, index }) {
  const CardIcon = card.cardIcon;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className="group dark:bg-card-dark bg-white border border-gray-400 dark:border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
    >
      {/* Card Header: title on left, react-icon on right */}
      <div className="flex justify-between items-start mb-5">
        <h3 className="text-accent dark:text-white font-bold text-lg">
          {card.title}
        </h3>
        {/* Icon styled in accent, gets brighter on card hover */}
        <CardIcon className="text-2xl text-accent dark:text-white transition-colors duration-300 group-hover:text-accent-light" />
      </div>

      {card.type === "icons" ? (
        <div className="flex flex-wrap gap-4 ">
          {card.skills.map((skill) => (
            <IconChip key={skill.name} skill={skill} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {card.skills.map((label, index) => (
            <Pill
              key={label}
              label={label}
              colorClass={card.colors[index % card.colors.length]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Skills() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillsData.map((card, index) => (
          <SkillCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
