import React from 'react';
import image1 from '../assets/image1.jpg'; // Import the image from the assets

const Team = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <p>We are a diverse group of passionate individuals working together to make a difference.</p>
      <div className="profiles">
        <div className="profile">
          <img src={image1} alt="Md Saddam Hossain" />
          <h2>Name: Md Saddam Hossain</h2>
          <p>Designation: President</p>
          <p>ID: 001</p>
          <p>Profession: Business Holder</p>
        </div>

        <div className="profile">
          <img src={image1} alt="Khaled Anam" />
          <h2>Name: Mohiuddin Chowdhury</h2>
          <p>Designation: Project Manager</p>
          <p>ID: 002</p>
          <p>Profession: </p>
        </div>

        <div className="profile">
          <img src={image1} alt="Khaled Anam" />
          <h2>Name: Khaled Anam</h2>
          <p>Designation: Executive Member</p>
          <p>ID: 003</p>
          <p>Profession: Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

/* CSS */
const teamStyles = `
  .team-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    color: #1abc9c;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-top: 1rem;
  }

  .profiles {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }

  .profile {
    border: 2px solid #1abc9c;
    border-radius: 8px;
    padding: 1rem;
    width: 30%;
    text-align: center;
    background-color: #f9f9f9;
    overflow: hidden; /* Ensure no overflow */
  }

  .profile img {
    width: 100%; /* Make the image responsive */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Match border radius of profile */
  }

  .profile h2 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
  }

  .profile p {
    margin: 0.5rem 0;
  }
`;

const teamStyleSheet = document.createElement("style");
teamStyleSheet.type = "text/css";
teamStyleSheet.innerText = teamStyles;
document.head.appendChild(teamStyleSheet);
