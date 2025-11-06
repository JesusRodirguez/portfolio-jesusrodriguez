import React from "react";
import "../index.css";

const InPut = ({
  texto,
  type = "text",
  name,
  id,
  placeholder,
  value,
  onChange,
  required = false,
  autoFocus = false,
  className = "",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="">
        {texto}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        className={className}
      />
    </div>
  );
};

export default InPut;
