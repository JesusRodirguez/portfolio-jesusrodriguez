import React from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import AboutSection from "../../SectionPrincipal";
import CardCaracteristica from "../../CardCaracteristica";

const AboutUs = () => {
    return(
        <div className="bg-white text-black">
            {/* Compnente Navbar */}
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
            <div>
                <img
                    src="/img/evento.webp"
                    alt="Evento"
                    className="w-1/2 h-auto object-contain rounded-2xl mx-auto my-8 shadow-lg"
                />
                <AboutSection
                id="about"
                classSection="w-full max-w-6xl mx-auto mt-20 px-6"
                classH2="text-3xl font-bold text-center mb-6"
                texth2="Sobre Nosotros"
                classP="text-lg text-center leading-relaxed mb-12"
                textstrong="MidnightCode "
                textp=" Es un espacio donde la creatividad, el diseño y la programación se unen para crear experiencias únicas que trascienden lo convencional. Cada detalle ha sido cuidadosamente desarrollado para fusionar la estética visual con el poder del sonido y la interacción digital, ofreciendo un ambiente dinámico, inmersivo y lleno de energía.
                En este lugar, la música se convierte en el lenguaje universal que conecta a las personas, mientras la iluminación, los efectos visuales y la tecnología trabajan en armonía para transformar cada evento en una vivencia inolvidable. La innovación no solo se refleja en el diseño del espacio, sino también en la manera en que se integran las emociones, los ritmos y las sensaciones para generar un entorno vibrante, sofisticado y lleno de vida.
                Más que una discoteca, es un punto de encuentro entre la creatividad y la experiencia digital, un escenario donde la imaginación cobra forma y la noche se transforma en arte.un espacio donde la creatividad, el diseño y la programacesión se unen para crear experiencias únicas."
                />
                {/* Componente Cards  de características */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-10">
                <CardCaracteristica
                titulo="Innovación"
                texto="Creamos ideas únicas que inspiran y motivan a nuestra comunidad, combinando tecnología, arte y entretenimiento para ofrecer experiencias originales."
                />
                <CardCaracteristica
                titulo="Experiencia Sensorial"
                texto="Cada detalle está diseñado para conectar con los sentidos: luces, sonido y ambiente se sincronizan para generar emociones y momentos inolvidables."
                />
                <CardCaracteristica
                titulo="Diseño y Tecnología"
                texto="Integramos estética visual y desarrollo digital para crear espacios dinámicos, interactivos y llenos de energía, donde cada noche se vive de forma diferente."
                />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
