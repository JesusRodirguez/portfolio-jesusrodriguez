import React from "react";
import '../index.css'


const Button = ({ texto = "Enviar", type = "button", onClick, disabled = false, ClassName= "" }) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
            className={ClassName}
            >
            {texto}
        </button>
    );
}

export default Button;
