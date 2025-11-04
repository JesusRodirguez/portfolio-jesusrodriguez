import React from "react";
import { Phone } from "lucide-react";

const Footer = ({
  id = "",
  className = "",
  title = "",
  children
}) => {
  return (
    <footer id={id} className={className}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </footer>
  );
};

export const LinkNormal = ({ href = "", size = 20, texto = "" }) => {
  return (
    <a href={href} className="flex items-center gap-2 hover:text-blue-500 transition">
      <Phone size={size} />
      <span>{texto}</span>
    </a>
  );
};

export const LinkIconos = ({ href = "", texto = "", size = 20 }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
      <Phone size={size} />
      <span>{texto}</span>
    </a>
  );
};

export default Footer;
