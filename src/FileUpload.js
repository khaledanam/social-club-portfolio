import React, { useState } from "react";
import { uploadFile } from "./firebase";  // Import the uploadFile function

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);  // Save the selected file to state
  };

  // Function to handle file upload
  const handleUpload = async () => {
    if (file) {
      await uploadFile(file, title, description);  // Call the uploadFile function
    } else {
      alert("Please select a file to upload!");
    }
  };

  return (
    <div>
      <h2>Upload a Resource</h2>
      <input
        type="file"
        onChange={handleFileChange}  // Update state when file is selected
      />
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}  // Update title state
      />
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}  // Update description state
      />
      <button onClick={handleUpload}>Upload</button>  // Trigger the file upload
    </div>
  );
};

export default FileUpload;
