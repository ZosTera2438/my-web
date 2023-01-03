import React from "react";
import { FaTimes } from "react-icons/fa";
import { Element } from 'react-scroll';

const Work = () => {
  const [showModal1, setShowModal1] = React.useState(false);
  return (
    <>
      <Element name="projects" className="bg-gray-100">
        <div className="container flex justify-center">
          <div>
            <h1 className="md:text-5xl text-4xl text-gray-600 font-bold text-center py-12">
              Projects
            </h1>
          </div>
        </div>
        <section className=" mx-28">
          <div className="border-t-2 border-gray-300" />
        </section>
        <div className="w-full px-10 pt-10 container lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          <div
            onClick={() => setShowModal1(true)}
            className="cursor-pointer xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="">
                  <img
                    src="/images/deltech.png"
                    alt="deltech"
                    className="rounded-full object-cover h-32 shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <div className="font-semibold text-xl md:text-2xl text-center pb-1">
                  Deltech Mun
                </div>
                <p className="text-gray-800 text-sm text-center"></p>
                <p className="text-center pt-4 text-xs font-medium"></p>
              </div>
            </div>
          </div>
        </div>
        {showModal1 ? (
          <>
            <div
              className="bg-opacity-25 fixed inset-0 z-40 bg-black"
              onClick={() => setShowModal1(false)}
            ></div>
            <div className="opacity-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      DeltechMun Website
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal1(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"></p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal1(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal1(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Element>
      <section className=" mx-28">
        {/* <div className="border-t-2" /> */}
      </section>
    </>
  );
};

export default Work;
