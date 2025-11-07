import React from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import Footer, { LinkNormal, LinkIconos } from "../../Fotter";



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
            <h1 className="text-3xl font-bold mb-2 text-center">Chat Bots</h1>
            
            {/* Componente Footer */}
            <Footer
            id="contact"
            className="flex flex-col items-center w-full bg-black text-white px-14 py-14 gap-6 mt-20"
            title="Contáctanos"
            >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-lg">
                <LinkNormal href="tel:+573001234567" texto="+57 300 123 4567" />
                <LinkNormal href="mailto:contacto@ejemplo.com" texto="contacto@ejemplo.com" />
                <LinkIconos href="https://facebook.com/tupagina" texto="Facebook" />
                <LinkIconos href="https://tiktok.com/@tuusuario" texto="TikTok" />
            </div>

            <div className="w-full border-t border-gray-700 my-4"></div>
            <div className="text-center text-sm text-gray-400">
                © 2025 MidnightCode — Todos los derechos reservados.
            </div>
            </Footer>
        </div>
    )
}

export default Ayuda;