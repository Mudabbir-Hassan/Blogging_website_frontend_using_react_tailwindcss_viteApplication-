import React, { useState } from "react";

export default function index() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("../../assets/createBlog.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.9)',
      }}
    >
    <div className="flex  justify-center h-screen">
      <div className="w-full max-w-md p-6 rounded-md">
        <div className="mb-8">
          <label className="block text-lg font-semibold text-white mb-2">
            Title:
          </label>
          <input
            className="w-full px-4 py-2 border border-grey-700 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-8">
  <h2 className="text-lg font-semibold text-white mb-2">Add Image:</h2>
  <label className="flex items-center justify-center w-full h-12 px-4 bg-black bg-opacity-20 text-white rounded-md cursor-pointer transition-all  hover:bg-white hover:text-black hover:font-semibold">
    <span className="mr-2 ">Choose a file</span>
    <input
      type="file"
      className="hidden"
      onChange={handleChange}
    />
  </label>
  {file && (
    <img src={file} alt="Selected" className="mt-2 rounded-md" />
  )}
</div>

        <div>
          <label className="block text-lg font-semibold  text-white mb-2">
            Description:
          </label>
          <textarea
            className="w-full px-4 py-12 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-3 flex justify-center">
        <button className='flex items-center justify-center w-full h-12 px-4 bg-black bg-opacity-20 text-white rounded-md cursor-pointer transition-all hover:bg-white hover:text-black hover:font-semibold'>Post  </button>
        </div>
      </div>
    </div>
    </div>
  );
}
