import React from "react";
import Navbar from "../NavBar";
import CustomLink from "../CustomLink";
import Carrucel from "../Swiper";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";


const PaginaPrincipal = () => {
    return(
        <div className="bg-white text-black">
            {/* Compnente Navbar */}
            <Navbar
            ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
            ClassH1="text-3xl font-bold mb-2 text-center"
            TextoH1="MidnightCode"
            ClassUl="flex gap-8 justify-center"
            >
                <CustomLink to="" text="Home" />
                <CustomLink to="" text="Eventos" />
                <CustomLink to="" text="Menu" />
                <CustomLink to="" text="Reservas" />
                <CustomLink to="" text="Cancion" />
                <CustomLink to="" text="About us" />
                <CustomLink to="" text="Ayuda" />
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
        </div>
    )
}

export default PaginaPrincipal;