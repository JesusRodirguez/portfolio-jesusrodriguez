import React from "react";
import '../index.css'


const Title = ({ texto, class: ClassName="" }) => {
    return (
        <div>
            <h1 className={ClassName}>{texto}</h1>
        </div>
    )
}

export default Title;
