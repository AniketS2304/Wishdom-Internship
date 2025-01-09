import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MyWebsite</Link>
        </div>
        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-400">
            About
          </Link>
          <Link to="/services" className="hover:text-indigo-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-indigo-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
