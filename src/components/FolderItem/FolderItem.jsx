// src/components/FolderItem.js
import React from "react";

const FolderItem = ({ folderName, onClick }) => {
  return (
    <div
      className="w-full md:w-1/3 text-center space-x-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-purple-500 text-white py-4 px-6 rounded-lg cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      {folderName}
    </div>
  );
};

export default FolderItem;
