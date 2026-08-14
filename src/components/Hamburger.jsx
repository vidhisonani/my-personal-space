import { HiMenu, HiX } from "react-icons/hi";

export default function Hamburger({ open, setOpen }) {
  return (
    <button
      aria-label="Toggle mobile menu"
      onClick={() => setOpen(!open)}
      className="md:hidden flex flex-col justify-around"
    >
      {open ? (
        <HiX className="text-3xl text-accent" />
      ) : (
        <HiMenu className="text-3xl text-accent" />
      )}
    </button>
  );
}
