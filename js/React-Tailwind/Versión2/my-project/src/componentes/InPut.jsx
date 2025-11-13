import React from "react";
import "../index.css";

const InPut = ({ texto, className = "", ...rest }) => {
  return (
    <div className="mb-4">
      {texto && (
        <label htmlFor={rest.id} className="">
          {texto}
        </label>
      )}
      {texto && <br />}
      <input {...rest} className={className} />
    </div>
  );
};

export default InPut;
