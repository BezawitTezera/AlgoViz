import React from "react";
import logo from "../../assets/Logo/blue-background.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-blue-300 text-black
     p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-md z-10"
    >
      <div className="flex items-center space-x-2 pl-3">
        <Link to="/" className="text-4xl font-bold">
          AlgoViz
        </Link>
      </div>

      <div className="space-x-6 text-xl pr-4">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-white transition">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
