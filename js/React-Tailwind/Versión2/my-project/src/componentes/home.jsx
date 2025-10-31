import React from "react";
import NavBar from "./NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Navbar fija arriba */}
      <NavBar />

      {/* Carrusel principal */}
      <section className="w-full h-[80vh] relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src=""
              alt="Evento 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/assets/img/descarga(2).webp"
              alt="Evento 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/assets/img/descarga(1).webp"
              alt="Evento 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Contenido inferior (scrollable) */}
      <section className="w-full max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-center leading-relaxed mb-12">
          Bienvenido a <strong>MidnightCode</strong>, un espacio donde la creatividad, 
          el diseño y la programación se unen. Aquí podrás descubrir nuestros eventos,
          aprender más sobre nosotros y disfrutar de experiencias únicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Innovación</h3>
            <p>Desarrollamos ideas únicas que inspiran y motivan a nuestra comunidad.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Aprendizaje</h3>
            <p>Promovemos el crecimiento continuo a través de tecnología y práctica.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">Comunidad</h3>
            <p>Unimos personas apasionadas por la programación y el desarrollo web.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
