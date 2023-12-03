import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const ITEMS_PER_PAGE = 9;

export default function Blogs () {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../api/blogsData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  



  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/aboutUs.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.9)',
      }}
    >
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map(item => (
            <NavLink to={`blogs/${item.id}`}>
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={`blog image ${item.id}`}
                className="w-full h-90 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
            </NavLink>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 mb-8">
          {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-2 bg-gray-800 text-white rounded-full ${
                currentPage === index + 1 ? 'bg-blue-500' : 'hover:bg-blue-400'
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
