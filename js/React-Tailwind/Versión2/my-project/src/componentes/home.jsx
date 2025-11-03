import React from "react";
import NavBar from "./NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Phone, Mail, Facebook } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Navbar fija arriba */}
      <NavBar />

      {/* Carrusel principal */}
      <section className="w-full h-[80vh] relative">
        {/* Carrusel de las imágenes */}
        {/* Carrucel de las imajnes
        autoplay se cambia solo,effectfade que al cambiarse se desbanesca
        loop bucle */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
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
        </Swiper>
      </section>

      {/* Contenido inferior (scrollable) */}
      <section className="w-full max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-center leading-relaxed mb-12">
          Bienvenido a <strong>MidnightCode</strong>, un espacio donde la
          creatividad, el diseño y la programación se unen. Aquí podrás
          descubrir nuestros eventos, aprender más sobre nosotros y disfrutar de
          experiencias únicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Innovación</h3>
            <p>
              Desarrollamos ideas únicas que inspiran y motivan a nuestra
              comunidad.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Aprendizaje</h3>
            <p>
              Promovemos el crecimiento continuo a través de tecnología y
              práctica.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Comunidad</h3>
            <p>
              Unimos personas apasionadas por la programación y el desarrollo
              web.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center w-full bg-black text-white px-14 py-14 gap-6 mt-20">
        <h2 className="text-3xl font-bold">Muchas Gracias</h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-lg">
          {/* Teléfono */}
          <a
            href="tel:+573001234567"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <Phone size={24} />
            <span>+57 300 123 4567</span>
          </a>

          {/* Correo */}
          <a
            href="mailto:contacto@ejemplo.com"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <Mail size={24} />
            <span>contacto@ejemplo.com</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <Facebook size={24} />
            <span>Facebook</span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <span>TikTok</span>
          </a>
        </div>

        <div className="w-full border-t border-gray-700 my-4"></div>
        <div className="text-center text-sm text-gray-400">
          © 2025 MidnightCode — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;
