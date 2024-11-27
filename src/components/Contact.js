import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions? We would love to hear from you!</p>
    </div>
  );
};

export default Contact;

/* CSS */
const contactStyles = `
  .contact-container {
    max-width: 800px;
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
`;

const contactStyleSheet = document.createElement("style");
contactStyleSheet.type = "text/css";
contactStyleSheet.innerText = contactStyles;
document.head.appendChild(contactStyleSheet);
