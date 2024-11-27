import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg'; // Ensure this image exists

// Sample images for the slider and Our Works section
const images = [image1, image2];
const worksData = [
  {
    img: image1,
    description: "Description for Work 1: We help local communities with education programs."
  },
  {
    img: image2,
    description: "Description for Work 2: Providing healthcare services to underprivileged areas."
  },
  {
    img: image3,
    description: "Description for Work 3: Organizing food drives and nutritional support."
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      <div className="image-slider">
        <button className="slider-button" onClick={prevSlide}>❮</button>
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
        <button className="slider-button" onClick={nextSlide}>❯</button>
      </div>
      <h1>Futonto Kishor Songho</h1>
      <p className="lead-text">A social and non-political organisation</p>

      {/* Our Works Section */}
      <div className="our-works">
        <h2>Our Works</h2>
        {worksData.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.img} alt={`Work ${index + 1}`} className="circle-image" />
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS Styles
const homeStyles = `
  .home-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .image-slider {
    position: relative;
    width: 100%;
    height: 300px; /* Adjust height as needed */
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }

  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1;
    padding: 0.5rem;
    border-radius: 5px;
  }

  .slider-button:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .slider-button:first-of-type {
    left: 10px;
  }

  .slider-button:last-of-type {
    right: 10px;
  }

  h1 {
    font-size: 3rem;
    color: #1abc9c;
    font-weight: bold;
  }

  .lead-text {
    font-size: 1.5rem;
    color: white;
    margin-top: 1rem;
  }

  .our-works {
    margin-top: 2rem;
    text-align: center;
  }

  .our-works h2 {
    font-size: 2.5rem;
    color: #1abc9c;
    margin-bottom: 1rem;
  }

  .work-item {
    margin-bottom: 2rem; /* Space between work items */
  }

  .circle-image {
    width: 200px; /* Adjust size as needed */
    height: 200px; /* Adjust size as needed */
    object-fit: cover;
    border-radius: 50%; /* Circular shape */
    border: 2px solid #1abc9c; /* Optional border */
  }

  .work-description {
    font-size: 1.2rem;
    color: white;
    margin-top: 1rem; /* Space between image and description */
  }
`;

const homeStyleSheet = document.createElement("style");
homeStyleSheet.type = "text/css";
homeStyleSheet.innerText = homeStyles;
document.head.appendChild(homeStyleSheet);

export default Home;
