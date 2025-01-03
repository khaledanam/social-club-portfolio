import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddNewMember from './components/AddNewMember';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css'; // Importing the CSS for the App component
import FileUpload from "./FileUpload"; // Import the FileUpload component
import DisplayFiles from "./DisplayFiles"; // Import the DisplayFiles component

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/projects" className="nav-item">Projects</Link></li>
            <li><Link to="/team" className="nav-item">Team</Link></li>
            <li><Link to="/contact" className="nav-item">Contact</Link></li>
            <li><Link to="/AddNewMember" className="nav-item">Add New Member</Link></li>
            <li><Link to="/upload" className="nav-item">Upload Resources</Link></li>
            <li><Link to="/resources" className="nav-item">View Resources</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AddNewMember" element={<AddNewMember />} />
            <Route path="/upload" element={<FileUpload />} /> {/* Route for FileUpload */}
            <Route path="/resources" element={<DisplayFiles />} /> {/* Route for DisplayFiles */}
          </Routes>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Social Youth Club. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
