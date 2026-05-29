import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "certificates",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) =>
        document.getElementById(id)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      {/* Navbar Container */}
      <div className="w-full px-6 md:px-14 lg:px-24 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent tracking-wide"
        >
          SP
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm lg:text-base">

          {navItems.map((item, index) => (

            <li key={index}>

              <a
                href={`#${item}`}
                className={`capitalize relative transition duration-300 hover:text-white ${
                  active === item
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                {item}

                {/* Active Underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full transition-all duration-300 ${
                    active === item
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>
              </a>

            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white z-50"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-4 mt-2 mb-4 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl shadow-fuchsia-500/10 p-6 flex flex-col gap-6">

          {navItems.map((item, index) => (

            <a
              key={index}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`capitalize text-lg font-medium transition-all duration-300 ${
                active === item
                  ? "text-white"
                  : "text-gray-400"
              } hover:text-fuchsia-400`}
            >
              {item}
            </a>

          ))}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;