import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
import { ListVideo } from "lucide-react";



const CustomLink = ({ to, text }) => {
  return (
    <li>
      <a href={to} className="hover:text-cyan-400 transition duration-300">
        {text}
      </a>
    </li>
  );
}

export default CustomLink;
// midu Live 
// midu dev