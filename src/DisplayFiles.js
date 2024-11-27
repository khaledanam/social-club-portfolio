import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Adjust the path based on your firebase.js location

const DisplayFiles = () => {
  const [files, setFiles] = useState([]); // Store fetched files
  const [loading, setLoading] = useState(true); // Loading indicator

  // Fetch files from Firebase Storage
  const fetchFiles = async () => {
    try {
      const resourcesRef = ref(storage, "resources/"); // Path to the 'resources' folder
      const result = await listAll(resourcesRef); // List all files in the folder
      const fileData = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item); // Get download URL
          return { name: item.name, url }; // File name and URL
        })
      );
      setFiles(fileData);
      setLoading(false); // Stop loading after fetch
    } catch (error) {
      console.error("Error fetching files:", error);
      setLoading(false); // Stop loading even if an error occurs
    }
  };

  // Fetch files on component mount
  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="display-files-container">
      <h2>Uploaded Resources</h2>
      {loading ? (
        <p>Loading resources...</p>
      ) : files.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <ul className="file-list">
          {files.map((file, index) => (
            <li key={index} className="file-item">
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="file-link"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Inline CSS styles */}
      <style jsx="true">{`
        .display-files-container {
          padding: 20px;
          text-align: center;
        }

        h2 {
          font-size: 2em;
          color: #333;
          margin-bottom: 20px;
        }

        .file-list {
          list-style-type: none;
          padding: 0;
        }

        .file-item {
          padding: 10px;
          margin: 8px 0;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .file-link {
          color: #007bff;
          text-decoration: none;
        }

        .file-link:hover {
          text-decoration: underline;
        }

        .file-item:hover {
          background-color: #e9e9e9;
        }

        p {
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default DisplayFiles;
