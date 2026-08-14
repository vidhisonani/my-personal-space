import React from "react";
import { skillsData } from "../data/skills";

function ToolCard({ card, index }) {
  const CardIcon = card.cardIcon;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className="group border border-border bg-card p-6 min-h-[224px] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono-label text-sage">0{index + 1}</span>
        <CardIcon className="text-lg text-accent transition-colors duration-300 group-hover:text-accent-light" />
      </div>

      <h3 className="font-heading text-[22px] font-semibold mt-5 mb-6 text-text-main">
        {card.title}
      </h3>

      <div className="flex flex-wrap justify-start content-start gap-2 mt-0">
        {card.skills.map((skill) => {
          const SkillIcon = skill.icon;
          return (
            <span
              key={skill.name}
              className="flex items-center gap-1.5 bg-card-alt text-text-main px-2 py-1.5 font-mono text-[10px] shrink-0"
            >
              <SkillIcon
                className="text-xs shrink-0"
                style={skill.color ? { color: skill.color } : {}}
              />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-bg py-20 md:py-28 border-t border-border">
      <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[185px_1fr] gap-9 mb-14">
          <p className="font-mono-label text-accent pt-2.5">02 / the toolkit</p>
          <h2 className="font-heading font-medium text-[39px] md:text-[70px] leading-[0.97] tracking-[-0.07em] max-w-[690px]">
            Tools become fluent
            <br />
            <span className="text-text-muted">through practice.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {skillsData.map((card, index) => (
            <ToolCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;