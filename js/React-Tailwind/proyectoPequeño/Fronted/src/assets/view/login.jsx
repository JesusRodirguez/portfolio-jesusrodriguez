import React, { useState } from "react";
import InPut from "../componenets/InPut";

const Login = () => {
    return(
        <>
        <div className="bg-indigo">
            <form action="">
                <InPut classNameDiv="bg-red" 
                classNameLabel="color-black"
                textLabel="correo"
                type="email"
                classNameInPut="border-1"
                />
                <InPut classNameDiv="bg-green"
                classNameLabel="color-black"
                textLabel="contraseña"
                type="password"
                classNameInPut="border-1"/>
            </form>
        </div>
        </>
    )
};

export default Login;