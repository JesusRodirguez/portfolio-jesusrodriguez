import React from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";

const PaginaPrincipalEmpleado = () =>{
    return(
        <div className="bg-white text-black">
            {/* Componente NavBar */}
            <Navbar
            ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
            ClassH1="text-3xl font-bold mb-2 text-center"
            TextoH1="MidnightCode"
            ClassUl="flex gap-8 justify-center"
            >
                <CustomLink to="/" text="Salir" />
                <CustomLink to="/PaginaPrincipalEmpleado" text="Home" />
                <CustomLink to="/Horario" text="Horario" />
                <CustomLink to="/Ventas" text="Ventas" />
                <CustomLink to="/Inventario" text="Inventario" />
            </Navbar>
            <h1 className="text-4xl font-bold mb-8 text-center">Bienvenido Empleado</h1>
        </div>
    )
}
export default PaginaPrincipalEmpleado;

