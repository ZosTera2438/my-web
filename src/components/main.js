import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Element, Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <>
      <Element className="text-gray-600 py-20 md:py-32" name="main">
        <div className="flex flex-col justify-around w-full lg:flex-row">
          <div className="flex flex-col p-12 justify-evenly">
            <h1 className="text-5xl mb-4 md:text-6xl">Hello!</h1>
            <h2 className="text-3xl mb-4 sm:text-4xl font-medium">
              I&#39;m Vaibhav&#44;
              <div className=" text-orange-500">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("a Web Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Frontend Developer")
                      .start();
                  }}
                />
              </div>
            </h2>
            <div className="text-sm mb-8 max-w-xs sm:text-base">
              Regular communication is really important to me&#44; so let&#39;s
              keep in touch!
            </div>
            <Link to="about" smooth={true} duration={500} offset={-50}>
              <button className="animate-bounce flex flex-row items-center justify-between text-white font-medium shadow-lg bg-cyan-500 border-0 py-3 px-8 w-40 rounded-full text-base ">
                About Me
                <FaArrowDown className="ml-1 text-base" />
              </button>
            </Link>
          </div>
          <div className="sm:self-center">
            <img draggable="false" src="/introGif.gif" alt="" />
          </div>
        </div>
      </Element>
      <section className="mx-28">
        <div className="border-t-2 border-gray-300" />
      </section>
    </>
  );
};

export default Main;
