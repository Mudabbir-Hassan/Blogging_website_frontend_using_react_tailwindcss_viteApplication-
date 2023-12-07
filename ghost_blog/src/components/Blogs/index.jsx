import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ITEMS_PER_PAGE = 18;

export default function Blogs() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArr, setFilteredArr] = useState([]);
  const [searchedInput, setSearchedInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("../../../api/blogsData.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(
        (data) =>
          data.title.toLowerCase().includes(searchedInput.toLowerCase()) 
          // &&
          // ((category === "all" || data.category === category))
      )
      .sort((a, b) => (a.title > b.title ? 1 : -1));

    setFilteredArr(filtered);
  }, [searchedInput, data]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredArr.slice(indexOfFirstItem, indexOfLastItem);
  

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/aboutUs.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
      }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="container mx-auto mt-8">
      <div className="mt-5 mb-16 flex justify-center items-center">
      <div className="flex items-center rounded overflow-hidden">
      <input
      className="w-96 p-3 outline-none"
      type="text"
      placeholder="Search for blogs..."
      onChange={(e) => setSearchedInput(e.target.value)}
      />
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <NavLink key={item.id} to={`blogs/${item.id}`}>
              <motion.div
                layout
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all transform duration-500 hover:scale-110 hover:shadow-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={item.image}
                  alt={`blog image ${item.id}`}
                  className="w-full h-100 object-cover object-center "
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 ">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            </NavLink>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 mb-8">
          {Array.from(
            { length: Math.ceil(data.length / ITEMS_PER_PAGE) },
            (_, index) => (
              <button
                key={index + 1}
                className={`px-4 py-2 mx-2 bg-red-950 text-white rounded-full ${
                  currentPage === index + 1
                    ? "bg-yellow-900"
                    : "hover:bg-blue-500"
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
