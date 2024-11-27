import React, { useState } from 'react';
import jsPDF from 'jspdf';
import club_logo from '../assets/club_logo.png';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    education: '',
    permanentAddress: '',
    presentAddress: '',
    nidNumber: '',
    mobileNumber: '',
    emailAddress: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF('portrait', 'mm', 'a4');

    // Add header with the image
    const imgData = club_logo; // Path to the image
    doc.addImage(imgData, 'JPEG', 15, 10, 180, 30); // Adjust image size and position
    doc.setFontSize(18);
    doc.text('Youth Club Registration', 105, 50, null, null, 'center');
    doc.setFontSize(12);
    doc.text('Header placeholder - Update later', 105, 60, null, null, 'center');

    // Set the title
    doc.setFontSize(22);
    doc.text('Registration Form', 105, 80, null, null, 'center');

    // Add form data to the PDF
    doc.setFontSize(14);
    doc.text(`Name: ${formData.name}`, 20, 100);
    doc.text(`Age: ${formData.age}`, 20, 110);
    doc.text(`Profession: ${formData.profession}`, 20, 120);
    doc.text(`Education: ${formData.education}`, 20, 130);
    doc.text(`Permanent Address: ${formData.permanentAddress}`, 20, 140);
    doc.text(`Present Address: ${formData.presentAddress}`, 20, 150);
    doc.text(`NID Number: ${formData.nidNumber}`, 20, 160);
    doc.text(`Mobile Number: ${formData.mobileNumber}`, 20, 170);
    doc.text(`Email Address: ${formData.emailAddress}`, 20, 180);

    // Add footer
    doc.setFontSize(12);
    doc.text('Footer placeholder - Update later', 105, 285, null, null, 'center');

    // Save the PDF
    doc.save('registration-form.pdf');
  };

  const handleDownload = () => {
    if (window.confirm('Are you sure you want to download the PDF?')) {
      generatePDF();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDownload(); // Call download confirmation
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="permanentAddress">Permanent Address:</label>
          <input
            type="text"
            id="permanentAddress"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="presentAddress">Present Address:</label>
          <input
            type="text"
            id="presentAddress"
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nidNumber">NID Number:</label>
          <input
            type="text"
            id="nidNumber"
            name="nidNumber"
            value={formData.nidNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" className="submit-btn" onClick={handleDownload}>
          Download PDF
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;


const formStyles = `
  .form-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    border: 2px solid #1abc9c;
    border-radius: 8px;
    background-image: url(${club_logo});
    background-size: cover;
    background-position: center;
    z-index: 1; /* Ensure content stays on top */
  }

  .form-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7); /* White transparent layer */
    border-radius: 8px; /* Match the border-radius of the container */
    z-index: -1; /* Layer stays below the content */
  }

  h1 {
    font-size: 2rem;
    color: #1abc9c;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    font-size: 1.2rem;
    color: #34495e;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #1abc9c;
    border-radius: 5px;
  }

  .submit-btn {
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #1abc9c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #16a085;
  }
`;

const formStyleSheet = document.createElement("style");
formStyleSheet.type = "text/css";
formStyleSheet.innerText = formStyles;
document.head.appendChild(formStyleSheet);
