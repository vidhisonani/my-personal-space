import React, { useState } from "react";
import { skillsData } from "../data/skills";

function IconChip({ skill }) {
  const Icon = skill.icon;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="400"
      className="flex flex-col items-center gap-2 group/chip cursor-default"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/50 transition-all duration-300 group-hover/chip:scale-110 group-hover/chip:border-accent group-hover/chip:shadow-md group-hover/chip:shadow-accent/20">
        <Icon
          role="img"
          aria-label={skill.name}
          style={skill.color ? { color: skill.color } : {}}
          className={`text-3xl transition-all duration-300 ${!skill.color ? "text-gray-800 dark:text-white" : ""
            } group-hover/chip:brightness-110`}
        />
      </div>
      <span className="text-xs font-medium text-text-muted dark:text-gray-400 group-hover/chip:text-accent transition-colors duration-300 text-center">
        {skill.name}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 dark:bg-card-dark bg-gray-50 min-h-screen py-16 px-6"
    >
      <div data-aos="fade-down" data-aos-duration="600" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-accent mb-2 inline-block border-b-2 border-transparent hover:border-accent">
          My Skills
        </h2>
        <p className="dark:text-text-main text-text-muted text-base">
          Technologies & tools I work with
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex justify-center gap-3 flex-wrap mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillsData.map((card, i) => {
              const CardIcon = card.cardIcon;
              const isLast = i === skillsData.length - 1;
              return (
                <div key={i} className={`group flex flex-col gap-2 bg-white dark:bg-card-dark border border-gray-200 dark:border-neutral-700/50 shadow-sm dark:shadow-none rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:border-accent/50 ${isLast ? "sm:col-span-2" : "" }`}>
                  <div className="flex justify-between items-start mb-5">
                    <h3 className="text-accent dark:text-white font-bold text-lg">
                      {card.title}
                    </h3>
                    {/* Icon styled in accent, gets brighter on card hover */}
                    <CardIcon className="text-2xl text-accent dark:text-white transition-colors duration-300 group-hover:text-accent-light" />
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {card.skills.map((skill, j) => (
                      <IconChip key={j} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;