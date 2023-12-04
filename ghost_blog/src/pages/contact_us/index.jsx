import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/blogDetails.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
      }}
    >
      <motion.div className=" min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
        <div className="bg-black bg-opacity-30 text-white p-8 rounded-lg shadow-md w-96 border-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Mudabbir Hassan"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="mudabbirdar2018@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-400 hover:text-white font-bold rounded-md hover:bg-red-950 focus:outline-none focus:ring transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
