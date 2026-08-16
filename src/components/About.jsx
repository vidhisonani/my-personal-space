import React from "react";
import profilePhoto from "../assets/profile.webp";

const cardData = [
  { label: "2023—27", text: "L.D. College of Engineering" },
  { label: "8.82", text: "CGPA till Sem 6" },
  { label: "MERN", text: "full-stack focus" },
];

function About() {
  return (
    <section
      id="about"
      className="bg-bg py-20 md:py-28 border-t border-border"
    >
      <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[185px_1fr] gap-9 mb-14">
          <p 
            className="font-mono-label text-accent pt-2.5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            01 / the beginning
          </p>
          <h2 
            className="font-heading font-medium text-[39px] md:text-[70px] leading-[0.97] tracking-[-0.07em] max-w-[690px]"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            A good place to start is{" "}
            <span className="text-text-muted">staying curious.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.86fr_1.14fr] gap-16 items-start">
          <div 
            className="font-heading font-medium text-[25px] leading-[1.35] tracking-[-0.025em]"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            I like the moment when something complicated starts to feel{" "}
            <mark className="bg-accent-light text-text-main px-1">
              understandable.
            </mark>
          </div>
          <div 
            className="text-text-muted leading-[1.85] text-sm"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <p>
              I&apos;m building my foundation at{" "}
              <strong className="text-text-main">
                L.D. College of Engineering
              </strong>
              , where every semester gives me a new way to look at systems,
              software, and the people who use them.
            </p>
            <p className="mt-4">
              My focus is the MERN stack and the space where design decisions
              meet dependable code. I care about clear forms, kind
              interfaces, and solutions that still make sense six months
              later.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mt-11">
          {cardData.map((card, index) => (
            <div
              key={card.label}
              className="flex flex-col gap-1 bg-card p-5"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 150}
            >
              <h3 className="font-heading text-[26px] font-semibold text-accent">
                {card.label}
              </h3>
              <span className="font-mono-label text-text-muted">
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;