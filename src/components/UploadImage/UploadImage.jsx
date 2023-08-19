import React, { useState } from "react";

function UploadImage({ folderName }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("folderName", folderName);

      fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("API response:", data);
          // Need to Show Sucess Alert Here
        })
        .catch((error) => {
          console.error("API error:", error);
          // Need to Show Error Alert Here
        });
    }
  };

  return (
    <div className="px-4 bg-gradient-to-r h-96 rounded-md from-pink-500 to-purple-800  flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-md w-full">
        <h1 className="text-base md:text-4xl font-extrabold mb-6 text-center text-gray-800">
          Upload Image to {folderName}
        </h1>
        <div className={`flex flex-col md:flex-row w-full ${selectedFile ? "justify-between md:space-x-4" : "justify-center"}`}>
          <div className={`flex flex-col space-y-6 ${selectedFile ? "w-full md:w-1/2" : "w-full"}`}>
            <label
              htmlFor="upload-input"
              className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-4 md:px-8 rounded-full tracking-wide cursor-pointer transition duration-300 hover:opacity-70 md:hover:opacity-90"
            >
              <span className="block text-center text-lg">Choose Image</span>
              <input
                type="file"
                id="upload-input"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {selectedFile && (
              <p className="whitespace-nowrap">
                Selected file: {selectedFile.name}
              </p>
            )}
          </div>
          {selectedFile && (
            <div className="flex flex-col mt-6 md:mt-0 w-full md:w-1/2">
              <label className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-4 md:px-8 rounded-full tracking-wide cursor-pointer transition duration-300 hover:opacity-70 md:hover:opacity-90">
                <span
                  className="block text-center text-lg whitespace-nowrap"
                  onClick={handleUpload}
                >
                  Upload Image
                </span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
