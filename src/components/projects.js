import React from "react";
import { Element } from "react-scroll";
import deltech from "./images/deltech.png";

const Projects = () => {
  return (
    <>
      <Element name="projects" className="bg-gray-100">
        <div className="container flex justify-center">
          <div>
            <h1 className="md:text-5xl text-4xl text-gray-600 font-bold text-center py-6 md:py-10">
              Projects
            </h1>
          </div>
        </div>
        <section className=" mx-28">
          <div className="border-t-2 border-gray-300" />
        </section>
        <div className="w-full px-10 py-10 container lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          <div class="w-80 rounded overflow-hidden shadow-lg">
            <img class="w-full" src={deltech} alt="" />
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">Deltech Mun</div>
              <div class="py-1">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Tailwindcss
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Firebase
                </span>
              </div>
              <p class="text-gray-700 text-sm md:text-base pb-2">
                Made a website for one of the oldest society of our college using React, Tailwindcss and Firebase.
              </p>
              <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                <a href="https://deltechmun.in/" target="_blank" rel="noopener noreferrer">
                  <button className="text-cyan-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    View
                  </button>
                </a>
                <a href="https://github.com/ZosTera2438/deltech-website" target="_blank" rel="noopener noreferrer">
                  <button className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <section className=" mx-28">
        {/* <div className="border-t-2" /> */}
      </section>
    </>
  );
};

export default Projects;
