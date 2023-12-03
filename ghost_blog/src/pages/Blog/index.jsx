import React from 'react'
import { useNavigate , Outlet } from 'react-router-dom';

export default function Blog() {
    const navigate = useNavigate();

    const backClickHandler = () => {
      navigate('/blog');
};

      const handleButtonClick = () => {
        navigate('/blog/create');
  };


  return (
    <>
    <div className='bg-black p-5'>
      <button
  onClick={backClickHandler}
  className=' text-white flex items-center justify-center font-sans font-semibold px-4 py-2 bg-orange-500 rounded-xl transition-all hover:scale-105 hover:bg-blue-400 focus:outline-none'
>
  <span className="mr-2">&#8592;</span> Back
</button>

      <div className="px-4 pt-20 pb-9 text-white flex flex-col items-center justify-center">
      
        <h1 className="text-4xl font-bold mb-10">BLOG PAGE</h1>
        <button onClick={handleButtonClick} className='font-sans font-semibold p-2 bg-orange-500 rounded-xl transition-all hover:scale-105 hover:bg-blue-400'>Create Your own Blog + </button>
      </div>
    </div>
    <Outlet />
    </>
  )
}
