import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Blog() {

  const [title , setTitle] = useState("BLOG PAGE");
  const navigate = useNavigate();

  const backClickHandler = () => {
    setTitle("BLOGS");
    navigate("/blog");
  };

  const handleButtonClick = () => {
    setTitle("CREATE BLOG");
    navigate("/blog/create");
  };

  return (
    <>
      <motion.div 
      className="bg-black p-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{opacity:0 , y:100}}
      >
        <button
          onClick={backClickHandler}
          className=" text-white flex items-center justify-center font-sans font-semibold px-4 py-2 bg-red-950 rounded-xl transition-all hover:scale-105 hover:bg-blue-400 focus:outline-none"
        >
          <span className="mr-2">&#8592;</span> Back
        </button>

        <div className="px-4 pt-20 pb-9 text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-10">{title}</h1>
          <button
            onClick={handleButtonClick}
            className="font-sans font-semibold p-2 bg-red-950 rounded-xl transition-all hover:scale-105 hover:bg-blue-400"
          >
            Create Your own Blog +{" "}
          </button>
        </div>
      </motion.div>
      <Outlet />
    </>
  );
}
