import React from "react";
import CustomLink from "../../CustomLink";
import Carrucel from "../../Swiper";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Navbar from "../../NavBar";
import CardCaracteristica from "../../CardCaracteristica";
import AboutSection from "../../SectionPrincipal";

const PaginaPrincipal = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Componenete Navbar */}
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

      {/* Compoenente Carrucel */}
      <Carrucel
        ClassSection="w-1/2 h-1/2 flex items-center justify-center mx-auto my-10 rounded-2xl shadow-2xl overflow-hidden"
        Modules={[Autoplay, EffectFade]}
        Effect="fade"
        Loop={true}
        AutoPlay={{
          delay: 80000,
          disableOnInteraction: false,
        }}
        ClassSwiper="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/img/evento.webp"
            alt="Evento principal"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/fiesta.webp"
            alt="Ambiente de fiesta"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/img/logo.webp"
            alt="Logo de MidnightCode"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Carrucel>

      {/* Componente Sección principal */}
      <AboutSection
        id="about"
        classSection="px-8 py-16 text-center"
        classH2="text-4xl font-bold mb-10 text-gray-900"
        texth2="Bienvenido a MidnightCode"
        classP="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
        textstrong="MidnightCode "
        textp="es más que una discoteca: es un espacio donde la música, el diseño y la energía se fusionan para crear experiencias únicas. Ubicada en el corazón de la ciudad, ofrecemos un ambiente moderno y elegante para los amantes de la buena rumba y la tecnología."
      />

      {/*  componente CardCaracteristica */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
        <CardCaracteristica
          titulo="Nuestra Ubicación"
          texto="Nos encontramos en el centro de la ciudad, con fácil acceso y parqueadero privado. Ideal para disfrutar sin preocupaciones."
        />
        <CardCaracteristica
          titulo="Experiencia Musical"
          texto="Cada noche está pensada para ti: DJs invitados, shows en vivo y un sistema de sonido envolvente que te hará vibrar."
        />
        <CardCaracteristica
          titulo="Ambiente y Estilo"
          texto="Disfruta de una estética moderna, luces inteligentes y espacios cómodos diseñados para crear la mejor atmósfera nocturna."
        />
      </div>
    </div>
  );
};

export default PaginaPrincipal;
