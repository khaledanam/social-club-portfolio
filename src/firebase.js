// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-8d0DpHfpJatOkKue8JJp-tB7qGSIvYY",
  authDomain: "myproject-2d841.firebaseapp.com",
  projectId: "myproject-2d841",
  storageBucket: "myproject-2d841.appspot.com", // Fix this typo
  messagingSenderId: "339882970221",
  appId: "1:339882970221:web:fec0d0b5b4768071374364",
  measurementId: "G-NDM7JGY2VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize and export storage

// Export storage to be used elsewhere
export { storage };

// Function to upload a file
const uploadFile = async (file, title, description) => {
  try {
    // Create a reference to the location where the file will be stored in Firebase Storage
    const fileRef = ref(storage, `resources/${file.name}`);

    // Upload the file to Firebase Storage
    await uploadBytes(fileRef, file);

    // Get the download URL for the uploaded file
    const fileURL = await getDownloadURL(fileRef);

    // After uploading, you can save the metadata (like title, description, and file URL) to Firestore if needed
    console.log("File uploaded successfully!");
    console.log("File URL:", fileURL);

  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// Export the upload function
export { uploadFile };
