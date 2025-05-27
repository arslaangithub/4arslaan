import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function Contact() {
  return <h2>Contact me</h2>;
}

function Blog(){
    return <h1>Blog article</h1>
}

function Nopage(){
    return <h1>404</h1>
}

function App() {
  return (
    <Router>
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<Nopage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;