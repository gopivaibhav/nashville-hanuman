import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import classNames from "classnames";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const closeAll = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-[#7b1113] text-yellow-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeAll}
          className="font-bold text-lg sm:text-xl text-yellow-300"
        >
          Nashville Hanuman Temple
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-yellow-200 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link to="/deities" className="hover:text-yellow-300 transition-colors">
              Deities
            </Link>
          </li>

          {/* Religious Dropdown (Hover) */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("religious")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center hover:text-yellow-300 transition-colors">
              Religious <ChevronDown size={16} className="ml-1" />
            </button>
            <ul
              className={classNames(
                "absolute left-0 mt-2 bg-[#7b1113] shadow-lg rounded-md w-56 transition-all duration-200 ease-in-out",
                activeDropdown === "religious"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              )}
            >
              <li>
                <Link
                  to="/religious/puja-schedule"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Puja Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/religious/festivals"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Festivals
                </Link>
              </li>
              <li>
                <Link
                  to="/religious/priests"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Priests
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/education/hvs" className="hover:text-yellow-300 transition-colors">
              Education
            </Link>
          </li>

          <li>
            <Link to="/community/halls" className="hover:text-yellow-300 transition-colors">
              Halls
            </Link>
          </li>

          <li>
            <Link to="/ramkibandi" className="hover:text-yellow-300 transition-colors">
              Ram Ki Bandi
            </Link>
          </li>

          <li>
            <Link to="/cultural" className="hover:text-yellow-300 transition-colors">
              Cultural
            </Link>
          </li>

          {/* About Dropdown (Hover) */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center hover:text-yellow-300 transition-colors">
              About <ChevronDown size={16} className="ml-1" />
            </button>
            <ul
              className={classNames(
                "absolute left-0 mt-2 bg-[#7b1113] shadow-lg rounded-md w-56 transition-all duration-200 ease-in-out",
                activeDropdown === "about"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              )}
            >
              <li>
                <Link
                  to="/about/history"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="/about/founder"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/about/gurus"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Gurus
                </Link>
              </li>
              <li>
                <Link
                  to="/about/volunteer"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/about/contact"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-[#8c1619]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/donate"
              className="bg-yellow-300 text-[#7b1113] px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#7b1113] px-6 pb-4 space-y-3 text-yellow-100">
          {[
            { label: "Home", path: "/" },
            { label: "Deities", path: "/deities" },
            { label: "Puja Schedule", path: "/religious/puja-schedule" },
            { label: "Festivals", path: "/religious/festivals" },
            { label: "Priests", path: "/religious/priests" },
            { label: "Education", path: "/education/hvs" },
            { label: "Halls", path: "/community/halls" },
            { label: "Ram Ki Bandi", path: "/ramkibandi" },
            { label: "Cultural", path: "/cultural" },
            { label: "Donate", path: "/donate" },
            { label: "Contact", path: "/about/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeAll}
              className="block hover:text-yellow-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
