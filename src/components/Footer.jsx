import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg border-t border-border py-6">
      <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div>
          <h1 className="text-lg md:text-xl font-bold text-accent mb-2">
            Vidhi Patel
          </h1>

          <p className="text-sm md:text-md text-text-muted">
            Still learning. Still making.
          </p>
        </div>

        <p className="text-sm text-accent font-semibold">
          &copy; {year} Vidhi Patel
        </p>
      </div>
    </footer>
  );
}

export default Footer;