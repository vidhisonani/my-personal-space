import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg px-6 py-16 sm:py-24">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-accent-light/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl items-center justify-center">
        <div className="w-full border border-border bg-card p-8 text-center shadow-xl shadow-accent/5 sm:p-12">
          <p className="font-mono-label mb-5 text-accent">
            404 / page not found
          </p>

          <h1 className="font-heading text-5xl leading-none tracking-[-0.04em] text-text-main sm:text-7xl">
            Lost in the margins?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-text-muted sm:text-base">
            The page you're looking for doesn't exist, was moved, or the URL
            was typed incorrectly. Let's get you back to something useful.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 font-mono-label text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Back to Home <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}