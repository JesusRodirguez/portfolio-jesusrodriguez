import React from "react";
import { Link } from "react-router-dom"; 

type CustomLinkProps = {
  to?: string;
  classNameA?: string;
  textA?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  to = "",
  classNameA = "",
  textA = "",
}) => {
  return (
    <li>
      <Link to={to} className={classNameA}>
        {textA}
      </Link>
    </li>
  );
};

export default CustomLink;
