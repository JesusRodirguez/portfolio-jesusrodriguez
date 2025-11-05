import React from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";



const Ayuda = () =>{
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
                <CustomLink to="/pagina-principal" text="Home" />
                <CustomLink to="/Eventos" text="Eventos" />
                <CustomLink to="/Menu" text="Menu" />
                <CustomLink to="/Reservas" text="Reservas" />
                <CustomLink to="/Cancion" text="Canciones" />
                <CustomLink to="/AboutUs" text="About us" />
                <CustomLink to="/Ayuda" text="Ayuda" />
            </Navbar>
            <h1>Chat Bots</h1>
        </div>
    )
}

export default Ayuda;