import React from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";

const GestionEventos = () =>{
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
                <CustomLink to="/GestionEventos" text="Eventos" />
                <CustomLink to="/GestionHorario" text="Horarios" />
                <CustomLink to="/GestionReserva" text="Reservas" />
                <CustomLink to="/GestionUsuario" text="Usuarios" />
                <CustomLink to="/GestionVentas" text="Ventas" />
                <CustomLink to="/GestionInventario" text="Inventario" />
                <CustomLink to="/GestionCanciones" text="Canciones" />
            </Navbar>
            <h1>Gestión Eventos</h1>
        </div>
    )
}
export default GestionEventos;