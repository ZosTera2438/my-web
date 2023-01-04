import React from "react";
import { FaHeadset, FaPaperPlane } from "react-icons/fa";
import { Element } from "react-scroll";
import { useForm as form, ValidationError } from "@formspree/react";
import contact1 from "./images/contact.png";

const contact = () => {
  const [state, handleSubmit] = form("xeqwqopj");
  if (state.succeeded) {
    return (
      <div
        className="bg-cyan-100 border-l-4 border-cyan-500 text-cyan-700 p-4 ml-2 mb-8"
        role="alert"
      >
        <p className="font-bold">Submitted</p>
        <p>Your message has been emailed.</p>
      </div>
    );
  }
  return (
    <>
      <Element
        name="contact"
        className="bg-blue-50 text-gray-600 flex flex-col items-center justify-center p-6"
      >
        <h2 className="text-4xl m-5 font-bold justify-center items-baseline flex flex-row space-x-3">
          <FaHeadset className="text-4xl" />
          <p>Get In</p>
          <span className="text-cyan-500">Touch</span>
        </h2>
        <div className="w-full flex bg-white rounded-lg md:mt-0 sm:w-5/6 shadow-lg justify-center items-center">
          <img
            draggable="false"
            src={contact1}
            alt=""
            className="p-10 hidden lg:block"
          />
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full md:w-96">
            <form
              onSubmit={handleSubmit}
              className="relative space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-blue-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-full text-sm bg-blue-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm bg-blue-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                className="text-white text-base w-28 shadow-lg hover:space-x-3 text-start shadow-cyan-600 hover:bg-cyan-500 bg-cyan-600 font-medium rounded-lg px-4 py-3"
              >
                <span>Submit</span>
                <FaPaperPlane className="ml-1 inline-block" />
              </button>
            </form>
          </div>
        </div>
      </Element>

      <section className="m-16 mt-0">
        {/* <div className="border-t-2 border-gray-300" /> */}
      </section>
    </>
  );
};

export default contact;
