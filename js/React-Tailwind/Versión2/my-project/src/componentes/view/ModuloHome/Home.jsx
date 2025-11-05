import React from "react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Phone, Mail, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink";
import Footer, { LinkNormal, LinkIconos } from "../../Fotter";
import CardCaracteristica from "../../CardCaracteristica";
import AboutSection from "../../SectionPrincipal";
import Navbar from "../../NavBar";
import Carrucel from "../../Swiper"; 

import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <div className="bg-white text-black">

      {/* Compnente Navbar */}
      <Navbar
        ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
        ClassH1="text-3xl font-bold mb-2 text-center"
        TextoH1="MidnightCode"
        ClassUl="flex gap-8 justify-center"
      >
        <CustomLink to="/" text="Home" />
        <CustomLink to="/registro" text="Register" />
        <CustomLink to="/login" text="Login" />
        <CustomLink to="#about" text="About us" />
        <CustomLink to="#contact" text="Contact Us" />
      </Navbar>

      {/*  Compoenente Carucel */}
      <Carrucel
        ClassSection="w-full h-[80vh] relative"
        Modules={[Autoplay, EffectFade]}
        Effect="fade"
        Loop={true}
        AutoPlay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        ClassSwiper="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/img/evento.webp"
            alt="Evento"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/fiesta.webp"
            alt="Momento de la Rumba"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/logo.webp"
            alt="Logo del Lugar"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Carrucel>

      {/* Compoenente Sección About */}
      <AboutSection
        id="about"
        classSection="w-full max-w-6xl mx-auto mt-20 px-6"
        classH2="text-3xl font-bold text-center mb-6"
        texth2="Sobre Nosotros"
        classP="text-lg text-center leading-relaxed mb-12"
        textstrong="MidnightCode "
        textp="es un espacio donde la creatividad, el diseño y la programación se unen para crear experiencias únicas."
      />

      {/* Componente Cards de características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-10">
        <CardCaracteristica
          titulo="Innovación"
          texto="Creamos ideas únicas que inspiran y motivan a nuestra comunidad."
        />
        <CardCaracteristica
          titulo="Aprendizaje"
          texto="Fomentamos el crecimiento a través de la práctica y la tecnología."
        />
        <CardCaracteristica
          titulo="Comunidad"
          texto="Conectamos personas apasionadas por el desarrollo web y el diseño."
        />
      </div>

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
  );
};

export default Home;
