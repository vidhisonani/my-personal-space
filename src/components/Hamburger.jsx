import { Menu, X } from "lucide-react";

export default function Hamburger({ open, setOpen }) {
  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={() => setOpen(!open)}
      className="md:hidden w-9.25 h-9.25 border border-border bg-card text-text-main flex items-center justify-center cursor-pointer hover:border-accent hover:text-accent transition-colors duration-200"
    >
      {open ? (
        <X size={17} />
      ) : (
        <Menu size={17} />
      )}
    </button>
  );
}
