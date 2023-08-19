import React, { useState } from 'react';
import FolderItem from '../FolderItem/FolderItem';
import UploadImage from '../UploadImage/UploadImage';


const HomeFolders = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Image Uploader</h1>
      <div className="flex flex-col w-full px-8 md:px-6">
        <div className="flex flex-col md:flex-row md:flex-nowrap w-full gap-6">
          <FolderItem folderName="10th Marksheet" onClick={() => handleFolderClick("10th Marksheet")} />
          <FolderItem folderName="12th Marksheet" onClick={() => handleFolderClick("12th Marksheet")} />
          <FolderItem folderName="College Certificate" onClick={() => handleFolderClick("College Certificate")} />
        </div>
        <div className="w-full mt-8">
          {selectedFolder && <UploadImage folderName={selectedFolder} />}
        </div>
      </div>
    </div>
  );
};

export default HomeFolders;
