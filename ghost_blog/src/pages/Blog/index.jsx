import React from 'react'
import { useNavigate , Outlet } from 'react-router-dom';

export default function Blog() {
    const navigate = useNavigate();

      const handleButtonClick = () => {
        navigate('/blog/create');
  };


  return (
    <div>

      <div className="px-4 pt-20 pb-9 bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-10">This is the Blog page</h1>
        <button onClick={handleButtonClick} className='font-sans font-semibold p-2 bg-orange-500 rounded-xl transition-all hover:scale-105 hover:bg-blue-400'>Create Post + </button>
      </div>
      <Outlet />

    </div>
  )
}
