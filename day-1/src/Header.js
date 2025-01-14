import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <nav>
        <div className='title'>
           <h1> News APP</h1>
            </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/Sports">Sports</Link>
          <Link to="/Entertainment">Entertainment</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </div>
  );
}

// Page components
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Sports() {
  return <h1>Sports Page</h1>;
}

function Entertainment() {
  return <h1>Entertainment Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Help() {
  return <h1>Help Page</h1>;
}


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
