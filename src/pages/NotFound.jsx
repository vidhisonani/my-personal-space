import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-bg-dark px-6 py-16 sm:py-24">
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-accent-light/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl items-center justify-center">
        <div className="w-full rounded-3xl border border-border bg-white/80 p-8 text-center shadow-2xl shadow-accent/10 backdrop-blur dark:bg-card-dark/80 sm:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent-light">
            404
          </p>

          <h1 className="text-4xl font-bold text-accent dark:text-text-main sm:text-6xl">
            Page not found
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-text-muted sm:text-lg">
            The page you were looking for does not exist, was moved, or the URL
            was typed incorrectly. Use the button below to get back to the home
            page.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
