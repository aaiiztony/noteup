import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container text-white">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
        <li className="nav-item"><Link to="/notes" className="nav-link px-2 text-white">Notes</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link px-2 text-white">Login</Link></li>
        <li className="nav-item"><Link to="/signup" className="nav-link px-2 text-white">Signup</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
      </ul>
      <p className="text-center text-white">© Aaiiztony</p>
    </footer>
  </div>
  )
}

export default Footer
