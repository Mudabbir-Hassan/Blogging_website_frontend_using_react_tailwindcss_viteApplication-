// About.js

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/about4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
      }}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{ x: window.innerWidth, transition:{duration:0.1}}}
    >
      <div className=" min-h-screen text-center">
        <motion.div className="container mx-auto py-12"
        initial={{ y: -100, transition:{duration:1} }}
        animate={{ y: 0, transition:{duration:1} }}
        exit={{ y: -100, transition:{duration:0.2}}}
        >
          <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>

          <p className="text-lg text-white">
          Welcome to our blogging community! We are a dynamic group of individuals brought together by our shared passion for blogging, creativity, technology, etc. As a diverse team of developers, designers. we come together to create content that inspires, informs, entertains our readers.</p>

          <p className="text-lg text-white font-bold mt-5">          
          Our journey began with a simple idea: to build a space where individuals with a love for
           Lifestyle and Inspiration, Creativity and Arts Hub, Tech and Gadgets, Green Living and Sustainability, Pop Culture and Entertainment, Parenting and Family Stories, Food Adventures and Recipes, Career Development and Work Life, Science and Curiosity, Personal Journeys and Reflections, Travel Exploration & Home and Décor etc.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-7 text-white">Our Mission</h2>
          <div className="text-white text-lg">
            <p className="mb-2">Empowering through connection, inspiring creativity, celebrating diversity, and encouraging thoughtful dialogue — our mission is to create a vibrant community that fosters growth, innovation, and positive impact.</p>
  
          </div>


          <h2 className="flex justify-center text-2xl font-bold mb-12 text-white">
            Our Team
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 3 }}>
            <div className="bg-red-950 opacity-90 p-6 rounded-lg shadow-md flex flex-col justify-center bg-opacity-70 mb-4 transition-all transform hover:scale-110">
              <img
                src="../../assets/mudabbir.jpg"
                alt="Team Member 1"
                className="mb-4 h-60 object-contain rounded-md"
              />
              <h3 className=" text-xl font-semibold mb-2">Mudabbir Hassan</h3>
              <p>FullStack Developer</p>
            </div>

            <div className="bg-red-950 opacity-90 p-6 rounded-lg shadow-md flex flex-col justify-center bg-opacity-70 mb-4 transition-all hover:scale-110">
              <img
                src="../../assets/mudabbir.jpg"
                alt="Team Member 1"
                className="mb-4 h-60 object-contain rounded-md "
              />
              <h3 className="text-xl font-semibold mb-2">Kashif Don</h3>
              <p>Blockchain Developer</p>
            </div>

            <div className="bg-red-950 opacity-90 p-6 rounded-lg shadow-md flex flex-col justify-center bg-opacity-70 mb-4 transition-all hover:scale-110">
              <img
                src="../../assets/mateen.jpg"
                alt="Team Member 1"
                className="mb-4 h-60 object-contain rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Mateen Bhatti</h3>
              <p>UI/UX Designer</p>
            </div>

            <div className="bg-red-950 opacity-90 p-6 rounded-lg shadow-md flex flex-col justify-center bg-opacity-70 mb-4 transition-all hover:scale-110">
              <img
                src="../../assets/mudabbir.jpg"
                alt="Team Member 1"
                className="mb-4 h-60 object-contain rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Ali Raza</h3>
              <p>Content Writer</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
