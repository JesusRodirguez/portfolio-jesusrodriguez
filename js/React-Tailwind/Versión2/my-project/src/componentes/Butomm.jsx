import React from "react";
import '../index.css'


const Button = ({ texto = "Enviar", type = "button", onClick, disabled = false, class: clase = "" }) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${clase} cursor-pointer`}
            >
            {texto}
        </button>
    );
}

export default Button;
