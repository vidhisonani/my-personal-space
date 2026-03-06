import React from "react";
import { HiDownload } from "react-icons/hi";
import profilePhoto from "../assets/profile.jpg";

function About() {
  return (
    <section
      id="about"
      className="dark:bg-card-dark bg-gray-50 min-h-screen py-16 px-6 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-violet mb-2 inline-block border-b-2 border-transparent hover:border-violet">
            About Me
          </h2>
          <p className="text-text-muted dark:text-text-muted text-base mt-2">
            A little bit about who I am
          </p>
        </div>

        {/* Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="100"
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-violet shadow-lg shadow-violet/30">
              <img
                src={profilePhoto}
                alt="Vidhi Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="200"
            className="flex flex-col gap-5 text-center md:text-left"
          >
            <p className="text-text-muted dark:text-text-main text-base leading-relaxed">
              Hi, I'm <span className="font-bold text-violet">Vidhi Patel</span>
              , a dedicated{" "}
              <span className="italic text-text-muted dark:text-text-muted">
                Computer Engineering student
              </span>{" "}
              with a strong passion for building modern web applications.
            </p>
            <p className="text-text-muted dark:text-text-muted text-base leading-relaxed">
              I enjoy crafting clean, responsive, and user-friendly interfaces
              using <span className="font-semibold text-violet">React</span>,{" "}
              <span className="font-semibold text-violet">Tailwind CSS</span>,
              and <span className="font-semibold text-violet">JavaScript</span>.
              I love exploring new tools and frameworks through hands-on
              projects.
            </p>
            <p className="text-text-muted dark:text-text-muted text-base leading-relaxed">
              My goal is to grow as a developer by building innovative solutions
              that solve real-world problems while delivering excellent user
              experiences.
            </p>

            {/* Resume button */}
            <div className="flex justify-center md:justify-start mt-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet text-white font-semibold text-sm hover:bg-violet-light transition-all duration-300 hover:shadow-lg hover:shadow-violet/30 hover:-translate-y-0.5 w-fit"
              >
                <HiDownload className="text-base" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
