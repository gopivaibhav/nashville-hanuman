import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import classNames from "classnames";
import img1 from "../../../public/templelogo-removebg-preview.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const closeAll = () => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    // 🟧 Deep saffron navbar with contrasting text
    <nav className="bg-[#ff9933] text-[#4a1c1c] shadow-md fixed w-full z-50">
      <div className="w-full flex justify-between items-center px-4 py-3">
        {/* Logo + Title */}
        <Link
          to="/"
          onClick={closeAll}
          className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
        >
          {/* 🪔 Temple Logo */}
          <img
            src={img1} // 👉 replace with your actual logo path
            alt="Temple Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
          />
          <span className="leading-tight">Nashville Hanuman Temple</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#4a1c1c] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-medium text-[#4a1c1c]">
          <li>
            <Link to="/" className="hover:text-[#fff4e6] text-[#4a1c1c] transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link to="/deities" className="hover:text-[#fff4e6] text-[#4a1c1c] transition-colors">
              Deities
            </Link>
          </li>

          {/* Religious Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("religious")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center hover:text-[#fff4e6] transition-colors">
              Religious <ChevronDown size={16} className="ml-1" />
            </button>
            <ul
              className={classNames(
                "absolute left-0 mt-2 bg-[#ff9933] shadow-lg rounded-md w-56 transition-all duration-200 ease-in-out",
                activeDropdown === "religious"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              )}
            >
              {[
                { label: "Puja Schedule", path: "/religious/puja-schedule" },
                { label: "Festivals", path: "/religious/festivals" },
                // { label: "Priests", path: "/religious/priests" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className="block px-4 py-2 text-[#4a1c1c] hover:bg-[#e67a00] hover:text-white rounded transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/education/hvs" className="text-[#4a1c1c] hover:text-[#fff4e6] transition-colors">
              Education
            </Link>
          </li>

          <li>
            <Link to="/community/halls" className="text-[#4a1c1c] hover:text-[#fff4e6] transition-colors">
              Halls
            </Link>
          </li>

          <li>
            <Link to="/ramkibandi" className="text-[#4a1c1c] hover:text-[#fff4e6] transition-colors">
              Ram Ki Bandi
            </Link>
          </li>

          <li>
            <Link to="/cultural" className="text-[#4a1c1c] hover:text-[#fff4e6] transition-colors">
              Cultural
            </Link>
          </li>

          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center hover:text-[#fff4e6] transition-colors">
              About <ChevronDown size={16} className="ml-1" />
            </button>
            <ul
              className={classNames(
                "absolute left-0 mt-2 bg-[#ff9933] shadow-lg rounded-md w-56 transition-all duration-200 ease-in-out",
                activeDropdown === "about"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              )}
            >
              {[
                { label: "History", path: "/about/history" },
                { label: "Founder", path: "/about/founder" },
                { label: "Gurus", path: "/about/gurus" },
                { label: "Volunteer", path: "/about/volunteer" },
                { label: "Contact", path: "/about/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className="block px-4 py-2 text-[#4a1c1c] hover:bg-[#e67a00] hover:text-white rounded transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Donate Button */}
          <li>
            <Link
              to="/donate"
              className="bg-white text-[#ff9933] px-4 py-2 rounded-md font-semibold hover:bg-[#fff4e6] transition"
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#ff9933] px-6 pb-4 space-y-2 text-[#4a1c1c] font-medium">
          <Link
            to="/"
            onClick={closeAll}
            className="block py-2 text-[#4a1c1c]  hover:text-[#fff4e6] transition-colors"
          >
            Home
          </Link>

          <Link
            to="/deities"
            onClick={closeAll}
            className="block py-2 text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
          >
            Deities
          </Link>

          {/* Mobile Religious Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("religious")}
              className="flex items-center justify-between w-full py-2 text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
            >
              Religious
              <ChevronDown
                size={16}
                className={classNames(
                  "transition-transform",
                  mobileDropdown === "religious" && "rotate-180"
                )}
              />
            </button>
            {mobileDropdown === "religious" && (
              <div className="pl-4 space-y-1 mt-1">
                <Link
                  to="/religious/puja-schedule"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  Puja Schedule
                </Link>
                <Link
                  to="/religious/festivals"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  Festivals
                </Link>
                {/* <Link
                  to="/religious/priests"
                  onClick={closeAll}
                  className="block py-2 text-sm hover:text-[#fff4e6] transition-colors"
                >
                  Priests
                </Link> */}
              </div>
            )}
          </div>

          <Link
            to="/education/hvs"
            onClick={closeAll}
            className="block py-2 text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
          >
            Education
          </Link>

          <Link
            to="/community/halls"
            onClick={closeAll}
            className="block py-2 text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
          >
            Halls
          </Link>

          <Link
            to="/ramkibandi"
            onClick={closeAll}
            className="block py-2 text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
          >
            Ram Ki Bandi
          </Link>

          <Link
            to="/cultural"
            onClick={closeAll}
            className="block py-2 text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
          >
            Cultural
          </Link>

          {/* Mobile About Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("about")}
              className="flex items-center justify-between w-full py-2 hover:text-[#fff4e6] transition-colors"
            >
              About
              <ChevronDown
                size={16}
                className={classNames(
                  "transition-transform",
                  mobileDropdown === "about" && "rotate-180"
                )}
              />
            </button>
            {mobileDropdown === "about" && (
              <div className="pl-4 space-y-1 mt-1">
                <Link
                  to="/about/history"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  History
                </Link>
                <Link
                  to="/about/founder"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  Founder
                </Link>
                <Link
                  to="/about/gurus"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  Gurus
                </Link>
                <Link
                  to="/about/volunteer"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  Volunteer
                </Link>
                <Link
                  to="/about/contact"
                  onClick={closeAll}
                  className="block py-2 text-sm text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/donate"
            onClick={closeAll}
            className="block py-2 bg-white text-[#ff9933] px-4 rounded-md font-semibold hover:bg-[#fff4e6] transition text-center mt-3"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;