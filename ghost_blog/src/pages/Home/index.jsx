import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  const latestPostClickHandler = () => {
    navigate("/blog");
  };

  const createBlogClickHandler = () => {
    navigate("/blog/create");
  };

  const aboutClickHandler = () => {
    navigate("/about");
  };

  return (
    <motion.div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/home.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
      }}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{ x: window.innerWidth, transition:{duration:0.1}}}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blog</h1>

        {/* Card 1 */}
        <motion.div
        initial={{ y: -100, transition:{duration:1} }}
        animate={{ y: 0, transition:{duration:1} }}
        exit={{ y: -100, transition:{duration:0.2}}}
          onClick={latestPostClickHandler}
          className="bg-black opacity-50 p-8 rounded-md mb-4 transition-all hover:opacity-80"
        >
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        </motion.div>

        <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ duration: 1.2 }}
          onClick={createBlogClickHandler}
          className="bg-black opacity-50 p-8 rounded-md mb-4 transition-all hover:opacity-80"
        >
          <h2 className="text-2xl font-semibold mb-4">Create Own Blog</h2>
          {/* Add your categories content here */}
        </motion.div>

        <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 1 }}
          onClick={aboutClickHandler}
          className="bg-black opacity-50 p-8 rounded-md transition-all hover:opacity-80"
        >
          <h2 className="text-2xl text-white font-semibold mb-4">About Us</h2>
          {/* Add your about us content here */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
