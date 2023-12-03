import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const latestPostClickHandler = () => {
    navigate('/blog');
};

    const createBlogClickHandler = () => {
      navigate('/blog/create');
};

    const aboutClickHandler =()=>{
      navigate('/about');
    }

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.9)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blog</h1>

        {/* Card 1 */}
        <div onClick={latestPostClickHandler} className="bg-black opacity-50 p-8 rounded-md mb-4 transition-all hover:opacity-80">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          
        </div>

        {/* Card 2 */}
        <div  onClick={createBlogClickHandler} className="bg-black opacity-50 p-8 rounded-md mb-4 transition-all hover:opacity-80">
          <h2 className="text-2xl font-semibold mb-4">Create Own Blog</h2>
          {/* Add your categories content here */}
        </div>

        {/* Card 3 */}
        <div  onClick={aboutClickHandler} className="bg-black opacity-50 p-8 rounded-md transition-all hover:opacity-80">
          <h2 className="text-2xl text-white font-semibold mb-4">About Us</h2>
          {/* Add your about us content here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
