import React from "react";
import { FaUser, FaArrowRight } from "react-icons/fa";
import { Element } from "react-scroll";
import pic from "./images/pic.webp";

const About = () => {
  return (
    <>
      <Element name="about"></Element>
      <section className="p-16 pb-4 text-gray-600 md:p-12 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold justify-center items-baseline flex flex-row space-x-2">
          <p>
            <FaUser />
          </p>
          <p>About</p>
          <i className="text-cyan-500">Me</i>
        </h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center pt-10">
          <div className=" px-4">
            <img
              draggable="false"
              src={pic}
              alt="pic"
              className="shadow-lg rounded h-60 sm:h-72 lg:h-80 align-middle border-none"
            />
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 text-base p-8">
            <p>
              I am pursing Btech in Engineering Physics majors in Electronics
              from Delhi Technological University (DTU). I have a deep interest
              in Web development. <br />
              <br /> I wish to use my technical acumen to contribute to a team
              that works to create a positive impact on the society.
            </p>
            <a href="https://docs.google.com/document/d/13OiAm_J6stpVGgPk__Ju_yTX-tzGfw996nLq0oso1NQ/edit?usp=sharing">
              <button className="text-white m-7 text-base p-3 shadow-lg text-center shadow-cyan-600 hover:bg-cyan-500 bg-cyan-600 font-medium rounded-lg">
                <span>Resume</span>
                <FaArrowRight className="ml-2 inline-block" />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="m-28 my-0"></section>
    </>
  );
};

export default About;
