import React from "react";
import { ArrowDown, ArrowRight, Mail, ExternalLink } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-72px)] relative overflow-hidden"
    >
      <div className="absolute w-75 h-75 rounded-full bg-card-alt -right-45 top-[16%] pointer-events-none" />
      <div className="w-[min(1120px,calc(100%-48px))] mx-auto grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-12 items-center py-20 md:py-28 relative z-10">
        <div data-aos="fade-right"
          data-aos-duration="600">
          <div className="font-mono-label text-accent flex items-center gap-2.5 mb-6">
            <span className="h-px w-7 bg-accent" />
            a personal digital story
          </div>

          <h1 className="font-heading text-[57px] md:text-[90px] lg:text-[108px] leading-[0.91] tracking-[-0.075em] mb-7 max-w-[650px] text-text-main">
            Hi, I'm
            <br />
            <em className="text-accent not-italic">Vidhi.</em>
            <br />
            I make useful
            <br />
            things.
          </h1>

          <p className="text-lg leading-[1.7] text-text-muted max-w-122.5 mb-8">
            A Computer Engineering student learning to turn questions into
            useful, thoughtful full-stack products.
          </p>

          <div className="flex gap-3 flex-wrap mb-7">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-4.25 py-3 border border-accent bg-accent text-white font-mono text-xs font-semibold cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            >
              Follow the work <ArrowDown size={15} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-4.25 py-3 border border-accent bg-transparent text-accent font-mono text-xs font-semibold cursor-pointer transition-transform duration-200 hover:-translate-y-1"
            >
              Say hello <ArrowRight size={14} />
            </button>
          </div>

          <div className="flex gap-2.5">
            <a
              href="https://github.com/vidhisonani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-7.75 h-7.75 flex items-center justify-center border border-border text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-1"
            >
              <FiGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/vidhipatel73/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7.75 h-7.75 flex items-center justify-center border border-border text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-1"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href="https://leetcode.com/u/vidhipatel07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leetcode"
              className="w-7.75 h-7.75 flex items-center justify-center border border-border text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-1"
            >
              <SiLeetcode size={15} />
            </a>
            <a
              href="mailto:vidhilotus7@gmail.com"
              aria-label="Send Email"
              className="w-7.75 h-7.75 flex items-center justify-center border border-border text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-1"
            >
              <Mail size={15} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume"
              className="w-7.75 h-7.75 flex items-center justify-center border border-border text-text-muted transition-all duration-200 hover:text-accent hover:-translate-y-1"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div
          className="relative bg-card border border-border p-4 rotate-2 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 max-w-120 mx-auto w-full"
          style={{
            boxShadow: "16px 16px 0 color-mix(in srgb, var(--color-accent) 20%, transparent)",
          }}
          aria-label="Vidhi Patel build room"
          data-aos="fade-left"
          data-aos-duration="600"
        >
          <div className="flex justify-between items-center border-b border-border pb-3.5 text-text-muted">
            <span className="font-mono-label">build-room / vidhi-patel</span>
            <span className="flex gap-1.5">
              <i className="w-1.5 h-1.5 rounded-full bg-accent block" />
              <i className="w-1.5 h-1.5 rounded-full bg-accent-light block" />
              <i className="w-1.5 h-1.5 rounded-full bg-text-muted block" />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-4">
            <div className="min-h-[102px] border border-border p-3.5 bg-card-alt">
              <span className="font-mono-label text-text-muted">focus</span>
              <strong className="font-heading text-[23px] font-semibold block my-3 text-text-main">
                MERN
              </strong>
              <span className="font-mono text-[10px] text-text-muted">
                full-stack systems
              </span>
            </div>

            <div className="min-h-25.5 border border-border p-3.5 bg-card-alt">
              <span className="font-mono-label text-text-muted">status</span>
              <strong className="font-heading text-[23px] font-semibold block my-3 text-accent">
                curious
              </strong>
              <span className="font-mono text-[10px] text-text-muted">
                always iterating
              </span>
            </div>

            <div className="col-span-2 min-h-33.75 border border-border p-3.5 bg-card-alt">
              <span className="font-mono-label text-text-muted">
                current energy
              </span>
              <div className="h-1.5 bg-border mt-2.5">
                <div className="h-full bg-accent w-[72%]" />
              </div>
              <div className="h-1.5 bg-border mt-2.5">
                <div className="h-full bg-accent-light w-[47%]" />
              </div>
              <span className="block mt-3 font-mono text-[10px] text-text-muted">
                clean interfaces / dependable code / useful questions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;