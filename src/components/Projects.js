import React, { useState } from 'react';
import iftar1 from '../assets/Projects/iftar1.jpg'; // Adjust the path as necessary
import image2 from '../assets/image2.jpg'; // Import other images as needed

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


  //Upload Photo and Modify Descriptions Here
  const projectsData = [
    {
      title: "Organize Rehearsal of Fire Service & Civil Defence",
      description: "Description of Project 1",
      images: [iftar1, image2],
    },
    {
      title: "Free Health Checkup & Blood Grouping Campaign",
      description: "Description of Project 2",
      images: [iftar1, image2],
    },
    {
      title: "Donate Sehri/ Iftaar to the Needy in Ramdan",
      description: "Description of Project 3",
      images: [iftar1, image2],
    },

        {
      title: "Donate Clothes to the Orphanage",
      description: "Description of Project 4",
      images: [iftar1, image2],
    },
  ];


  const projectStyles = `
  .projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: black;
  }
  h1 {
    font-size: 2.5rem;
    color: #1abc9c;
    font-weight: bold;
    margin: 20px 0;
  }
  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-top: 1rem;
  }
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
  }
  .project {
    flex: 1 1 calc(50% - 20px);
    margin: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    text-align: center;
    padding: 15px;
    transition: transform 0.2s;
  }
  .project:hover {
    transform: scale(1.05);
  }
  .project h2 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #2980b9;
  }
  .project-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
  }
  .project-images img {
    width: 100%;
    height: auto;
    max-width: calc(40% - 10px);
    margin: 5px;
    border-radius: 5px;
    cursor: pointer; /* Show pointer cursor for clickable images */
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal img {
    max-width: 90%;
    max-height: 90%;
  }
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .project {
      flex: 1 1 calc(50% - 20px);
    }
  }
  @media (max-width: 480px) {
    .project {
      flex: 1 1 100%;
    }
  }
`;

  // Inject the styles into the document
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = projectStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="projects-container">
      <h1>OUR PROJECTS</h1>
      <p>We take pride in leading various humanitarian projects globally.</p>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.title}</h2>
            <div className="project-images">
              {project.images.map((image, i) => (
                <img
                  src={image}
                  alt={`Project ${index + 1} Image ${i + 1}`}
                  key={i}
                  onClick={() => openModal(image)} // Open modal on click
                />
              ))}
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <button className="close-btn" onClick={closeModal}>&times;</button>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Projects;
