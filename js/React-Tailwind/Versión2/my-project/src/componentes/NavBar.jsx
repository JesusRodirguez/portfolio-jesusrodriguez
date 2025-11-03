import React from "react";
import { Link } from "react-router-dom";
import '../index.css'



const NavBar = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300">
      <h1 className="text-3xl font-bold mb-2 text-center">MidnightCode</h1>

      <ul className="flex gap-8 justify-center">
        <CustomLink to="/" text="Home" />
        <CustomLink to="/registro" text="Register" />   
        <CustomLink to="/login" text="Login" />         
        <CustomLink to="about" text="About us" />      
        <CustomLink to="contact" text="Contact Us" />
      </ul>
    </div>
  );
};


// Este es tu componente Link personalizado
const CustomLink = ({ to, text }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-cyan-400 transition duration-300"
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBar;
