import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import classNames from "classnames";
import img1 from "../../../public/templelogo-removebg-preview.png"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const closeAll = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  return (
    // 🟧 Deep saffron navbar with contrasting text
    <nav className="bg-[#ff9933] text-[#4a1c1c] shadow-md fixed w-full z-50">
      <div className="w-full flex justify-between items-center px-4 py-3">
        {/* Logo + Title */}
        <Link
          to="/"
          onClick={closeAll}
          className="flex items-center gap-2 font-bold text-lg sm:text-xl text-[#4a1c1c] hover:text-[#fff4e6] transition-colors"
        >
          {/* 🪔 Temple Logo */}
          <img
            src={img1} // 👉 replace with your actual logo path
            alt="Temple Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover -mb-5 -mt-5"
          />
          Nashville Hanuman Temple
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
            <Link to="/" className="text-[#4a1c1c] transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link to="/deities" className="text-[#4a1c1c] transition-colors">
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
                { label: "Priests", path: "/religious/priests" },
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
            <Link to="/education/hvs" className="text-[#4a1c1c] transition-colors">
              Education
            </Link>
          </li>

          <li>
            <Link to="/community/halls" className="text-[#4a1c1c] transition-colors">
              Halls
            </Link>
          </li>

          <li>
            <Link to="/ramkibandi" className="text-[#4a1c1c] transition-colors">
              Ram Ki Bandi
            </Link>
          </li>

          <li>
            <Link to="/cultural" className="text-[#4a1c1c] transition-colors">
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
        <div className="md:hidden bg-[#ff9933] px-6 pb-4 space-y-3 text-[#4a1c1c] font-medium">
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
          { label: "History", path: "/about/history" },
            { label: "Founder", path: "/about/founder" },
            { label: "Gurus", path: "/about/gurus" },
            { label: "Volunteer", path: "/about/volunteer" },
            { label: "Donate", path: "/donate" },
            { label: "Contact", path: "/about/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeAll}
              className="block text-[#4a1c1c] transition-colors"
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
