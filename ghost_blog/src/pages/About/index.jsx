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
          <p className="text-lg text-white mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quis optio quas sapiente vel a nostrum blanditiis, maiores explicabo
            hic quos sit fugit, mollitia illo in quaerat sunt velit commodi?
            Error aperiam ipsam eos? Rerum non exercitationem praesentium
            impedit corporis?
          </p>

          <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
          <div className="text-white text-lg">
            <p className="mb-2">Lorem ipsum dolor sit amet,</p>
            <p className="mb-2">
              {" "}
              consectetur adipiscing elit. Nulla facilisi. Sed sit amet lacinia
              mauris. Aliquam sed fermentum nisi.
            </p>
            <p className="mb-8">Integer id arcu vel arcu rutrum varius.</p>
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
              <p>FrontEnd Developer</p>
            </div>

            <div className="bg-red-950 opacity-90 p-6 rounded-lg shadow-md flex flex-col justify-center bg-opacity-70 mb-4 transition-all hover:scale-110">
              <img
                src="../../assets/mudabbir.jpg"
                alt="Team Member 1"
                className="mb-4 h-60 object-contain rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">Ali Raza</h3>
              <p>BackEnd Developer</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
