import React from "react";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 px-24">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h2 className="text-4xl flex flex-row text-gray-600 font-bold mb-4 md:text-5xl">
          <span>
            <FaLink className="mr-5 text-cyan-500" />
          </span>
          <span>Connect</span>
        </h2>
        <div className="text-xl font-medium md:space-x-8 flex flex-col ml-12 mb-24 space-y-4 lg:flex-row">
          <p></p>
          <p className="hover:underline underline-offset-4 hover:text-red-600">
            <a href="/">Youtube</a>
          </p>
          <p className="hover:underline underline-offset-4 hover:text-blue-600">
            <a href="https://www.linkedin.com/in/vaibhav-gupta-524a0b223/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p className="hover:underline underline-offset-4 hover:text-purple-600">
            <a href="https://github.com/ZosTera2438" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
          <p className="hover:underline underline-offset-4 hover:text-green-600">
            <a href="mailto:vaibhavgupta_21epb11_50@dtu.ac.in" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </p>
          <p className="hover:underline underline-offset-4 hover:text-indigo-600">
            <a href="https://docs.google.com/document/d/13OiAm_J6stpVGgPk__Ju_yTX-tzGfw996nLq0oso1NQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
