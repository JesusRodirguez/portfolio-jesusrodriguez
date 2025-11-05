import React from "react";
import '../index.css'



const InPut = ({texto,type="text", name,id,placeholder,value,onChange={onChange},required= false,autoFocus=false,ClassName=""}) =>{
    return(
        <div>
            <label htmlFor={id}>{texto}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} required={required} autoFocus={autoFocus} className={ClassName}/><br />
        </div>
    )
}

export default InPut;