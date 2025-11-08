import React from "react";

type NavbarProps = {
  ClassHeader?: string;
  ClassH1?: string;
  TextoH1?: string;
  ClassUl?: string;
  children?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({
  ClassHeader = "",
  ClassH1 = "",
  TextoH1 = "",
  ClassUl = "",
  children,
}) => {
  return (
    <header className={ClassHeader}>
      <h1 className={ClassH1}>{TextoH1}</h1>
      <ul className={ClassUl}>{children}</ul>
    </header>
  );
};

export default Navbar;
