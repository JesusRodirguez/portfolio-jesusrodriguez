import React from "react";

const CardCaracteristica = ({texto,titulo}) => {
    return(
    <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
      <h3 className="font-semibold text-xl mb-2">{titulo}</h3>
      <p>{texto}</p>
    </div>
    )
}

export default CardCaracteristica;