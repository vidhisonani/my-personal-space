export default function Hamburger({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden flex flex-col justify-around w-8 h-5"
    >
      <span
        className={`h-[3px] w-full bg-violet rounded-lg transition-all duration-200
      ${open ? "translate-y-[6px]" : ""}`}
      />
      <span
        className={`h-[3px] w-full bg-violet rounded-lg transition-all duration-200
      ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`h-[3px] w-full bg-violet rounded-lg transition-all duration-200
      ${open ? "-translate-y-[6px]" : ""}`}
      />
    </button>
  );
}
