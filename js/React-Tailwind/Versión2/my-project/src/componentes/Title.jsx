import React from "react";
import '../index.css'


const Title = ({ texto, class: clase = "" }) => {
    return (
        <div>
            <h1 className={`${clase}`}>{texto}</h1>
        </div>
    )
}

export default Title;
