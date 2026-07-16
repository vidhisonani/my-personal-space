import React from "react";
import { educationData } from "../data/educationData";

function Education() {
  function EducationCard({ edu, index }) {
    return (
      <div
        data-aos={edu.side === "left" ? "fade-right" : "fade-left"}
        data-aos-duration="600"
        data-aos-delay={index * 100}
        className={`
        relative flex items-center gap-4 md:gap-0
        ${edu.side === "left"
            ? "md:flex-row pl-12 md:pl-0"
            : "md:flex-row-reverse pl-12 md:pl-0"
          }
      `}
      >
        {/* card */}
        <div
          className={`w-full md:w-5/12 ${edu.side === "left" ? "md:pr-10" : "md:pl-10"
            }`}
        >
          <div className="group dark:bg-card bg-white border border-gray-400 dark:border-border rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lg hover:shadow-accent/20">
            {/* period and icon*/}
            <div className="flex items-center gap-2 mb-1 justify-between">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 shrink-0">
                <edu.icon className="text-accent text-lg" />
              </div>
              <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/40">
                {edu.period}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1 justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-accent font-bold text-base leading-snug">
                    {edu.degree}
                  </h2>
                </div>
              </div>
              <p className="text-accent-light text-sm font-semibold">
                {edu.institution}
              </p>
            </div>
            <p className="text-text-muted dark:text-text-muted text-sm leading-relaxed">
              {edu.description}
            </p>
            <p className="text-sm text-text-muted dark:text-text-muted">
              <span className="font-bold text-text-muted dark:text-text-main">
                Result: {edu.result}
              </span>
            </p>
            {edu.extra && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-accent/15 text-accent-light border border-accent/40">
                  {edu.extra.label}
                </span>
                <span className="text-xs text-text-muted dark:text-text-muted">
                  <span className="text-text-muted dark:text-text-main font-semibold">
                    {edu.extra.score}
                  </span>
                  {" · "}
                  <span className="text-text-muted dark:text-text-main font-semibold">
                    {edu.extra.percentile}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
        {/*Timeline dot - desktop*/}
        <div className="hidden md:flex w-2/12 justify-center z-10">
          <div className="w-4 h-4 rounded-full border-2 border-accent bg-gray-50 shadow-[0_0_10px_var(--color-accent)]" />
        </div>

        {/* Timeline dot — mobile */}
        <div className="md:hidden absolute left-[13px] top-6 w-4 h-4 rounded-full border-2 border-accent bg-gray-50 shadow-[0_0_8px_var(--color-accent)] z-10" />

        {/* Spacer */}
        <div className="hidden md:block w-5/12" />
      </div>
    );
  }
  return (
    <section
      id="education"
      className="scroll-mt-16 dark:bg-card-dark bg-gray-50 min-h-screen py-16 px-6"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-accent mb-2 inline-block border-b-2 border-transparent hover:border-accent">
          Education
        </h2>
        <p className="text-text-muted text-base">My academic journey</p>
      </div>
      {/* timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* center line — desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block bg-border" />

        {/* left line — mobile */}
        <div className="absolute left-5 top-0 bottom-0 w-px md:hidden bg-border" />

        <div className="flex flex-col gap-10">
          {educationData.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
