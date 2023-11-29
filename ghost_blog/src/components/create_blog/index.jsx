import React, { useState } from "react";

export default function index() {
  const [searchedInput, setSearchedInput] = useState("");

  return (
    <div className="m-5">
      <label className="m-5 text-sm font-semibold text-gray-800 mb-2">
        Title:
      </label>
      <input
        className="w-50 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Enter Title"
        value={searchedInput}
        onChange={(e) => setSearchedInput(e.target.value)}
      />
    </div>
  );
}
