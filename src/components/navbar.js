import React from "react";
import { FaTerminal, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="fixed w-full z-10 p-2 py-1 bg-white">
        <nav className="relative w-full flex flex-wrap shadow-lg items-center justify-between p-3 bg-cyan-500 rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="main"
                smooth={true}
                duration={500}
                offset={-50}
                className="text-sm cursor-pointer font-bold leading-relaxed inline-block mr-4 py-2 pl-2 whitespace-nowrap uppercase text-white"
              >
                <p className="flex items-center text-white">
                  <FaTerminal className="text-xl text-white" />
                  <span className="font-medium text-xl ml-3">
                    Vaibhav Gupta
                  </span>
                </p>
              </Link>
              <button
                className="text-white cursor-pointer active:rotate-180 text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div
              className={
                "lg:flex items-center" + (menuOpen ? " flex" : " hidden")
              }
            >
              <div className="flex flex-col lg:flex-row lg:ml-auto">
                <Link
                  to="main"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="px-3 cursor-pointer py-2 flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="px-3 py-2 cursor-pointer flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
                >
                  About
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="px-3 py-2 cursor-pointer flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="px-3 py-2 cursor-pointer flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
