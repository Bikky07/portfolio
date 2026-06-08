import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold gradient-text"
        >
          BK
        </a>

        <ul className="hidden md:flex gap-8 capitalize">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#050816]">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-6 py-4 capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;