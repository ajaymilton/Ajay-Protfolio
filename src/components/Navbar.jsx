import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo_portfolio.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];

  // Listen to window scroll and toggle scrolled state
  useEffect(() => {
    const handleScroll = () => {
      // when scrollY > 0, navbar becomes solid; when back to top, transparent
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-24 z-50 flex items-center justify-between transition-colors duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md transition duration-500"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="ml-4 md:ml-20 cursor-pointer select-none flex items-center"
      >
        <img
          src={Logo}
          alt="Logo"
          className="h-28 w-auto object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul
        initial={{ opacity: 0, scale: 0.92, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="hidden lg:flex flex-row space-x-7 mr-20 text-white"
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium hover:text-[#EDC001] transition duration-300 hover:scale-105"
          >
            <Link
              to={link}
              smooth
              duration={500}
              offset={-64}
              spy={false}
              hashSpy={false}
            >
              {link}
            </Link>
          </li>
        ))}
      </motion.ul>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden mr-6 z-50 text-white">
        {!navOpen ? (
          <HiMenu
            size={34}
            className="cursor-pointer hover:text-[#EDC001] transition"
            onClick={() => setNavOpen(true)}
          />
        ) : (
          <HiX
            size={34}
            className="cursor-pointer hover:text-[#EDC001] transition"
            onClick={() => setNavOpen(false)}
          />
        )}
      </div>

      {/* Mobile Menu (Slide Down) */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={
          navOpen
            ? { y: 0, opacity: 1 }
            : { y: -300, opacity: 0 }
        }
        transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
        className={`lg:hidden absolute top-24 left-0 w-full bg-black/70 backdrop-blur-xl shadow-xl py-10 ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-xl text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium hover:text-[#EDC001] transition duration-300"
            >
              <Link
                to={link}
                smooth
                duration={500}
                offset={-64}
                onClick={() => setNavOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
