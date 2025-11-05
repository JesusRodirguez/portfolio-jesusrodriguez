import React from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";

const PaginaPrincipalAdministrador = () =>{
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
                <CustomLink to="/PaginaPrincipalAdministrador" text="Home" />
                <CustomLink to="" text="Eventos" />
                <CustomLink to="" text="Horarios" />
                <CustomLink to="" text="Reservas" />
                <CustomLink to="" text="Usuarios" />
                <CustomLink to="" text="Ventas" />
                <CustomLink to="" text="Inventario" />
                <CustomLink to="" text="Canciones" />
            </Navbar>
            <h1>Hola Admininistrador </h1>
        </div>
    )
}
export default PaginaPrincipalAdministrador;