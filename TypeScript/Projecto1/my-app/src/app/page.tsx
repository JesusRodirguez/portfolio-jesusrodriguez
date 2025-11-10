"use client";
import React from "react";
import Link from "next/link";
import "../styles/Tailwind.css";

// COMPONENTES
import Navbar from "@/componentes/NavBar";
import CustomLink from "@/componentes/CustomLink";
import Carrucel from "@/componentes/Swiper";
import AboutSection from "@/componentes/AboutSection";
import CardCaracteristica from "@/componentes/CardCaracteristica";
import Footer from "@/componentes/Footer";
import { SwiperSlide } from "swiper/react";

// Login y Registro
import Login from "./login/page";
import Registro from "./Registro/page";

export default function Page() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">

      {/*  Componente NavBar */}
      <Navbar
        ClassHeader="w-full flex flex-col md:flex-row items-center justify-between bg-white text-black py-4 px-6 border-b border-gray-300"
        ClassH1="text-2xl md:text-3xl font-bold mb-2 md:mb-0 text-center md:text-left"
        TextoH1="MidnightCode"
        ClassUl="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8"
      >
        {/*  componnete  */}
        <CustomLink href="/" textA="Home" />
        <CustomLink href="#nosotros" textA="About us" />
        <CustomLink href="#footer" textA="Contact us" />
        <CustomLink href="/login" textA="Login" />
        <CustomLink href="/Registro" textA="Registro" />
      </Navbar>

      {/*  Componente Carrucel */}
      <Carrucel
        ClassSection="w-full"
        Effect="fade"
        Loop={true}
        AutoPlay={{ delay: 3000, disableOnInteraction: false }}
        ClassSwiper="w-full h-[400px] md:h-[500px]"
      >
        <SwiperSlide>
          <img
            src="/img/slide1.jpg"
            alt="Evento principal"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/slide2.jpg"
            alt="Ambiente nocturno"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/slide3.jpg"
            alt="DJ en acción"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Carrucel>

      {/*  Sección “Sobre Nosotros” */}
      <AboutSection
        id="nosotros"
        classSection="py-16 px-4 sm:px-8 md:px-12 lg:px-20 text-center md:text-left"
        classH2="text-3xl md:text-4xl font-bold mb-4"
        textH2="Sobre Nosotros"
        classP="text-lg md:text-xl text-gray-700 leading-relaxed"
        textP="MidnightCode es un espacio donde la creatividad, la música y la tecnología se unen para crear experiencias inolvidables. Nos apasiona conectar la energía de la noche con la innovación digital."
      />

      {/*  Sección de Características */}
      <section className="py-16 px-6 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <CardCaracteristica
          classNameDiv="bg-gray-100 p-6 rounded-xl shadow-md hover:bg-gray-200 transition"
          classNameH3="text-xl font-bold mb-2"
          tituloH3="Innovación"
          classNameP="text-gray-700"
          textP="Creamos ideas únicas que inspiran y motivan a nuestra comunidad."
        />
        <CardCaracteristica
          classNameDiv="bg-gray-100 p-6 rounded-xl shadow-md hover:bg-gray-200 transition"
          classNameH3="text-xl font-bold mb-2"
          tituloH3="Experiencia"
          classNameP="text-gray-700"
          textP="Ofrecemos eventos que combinan diseño, música y tecnología para todos los gustos."
        />
        <CardCaracteristica
          classNameDiv="bg-gray-100 p-6 rounded-xl shadow-md hover:bg-gray-200 transition"
          classNameH3="text-xl font-bold mb-2"
          tituloH3="Conexión"
          classNameP="text-gray-700"
          textP="Nuestra meta es conectar mentes creativas en un entorno lleno de energía positiva."
        />
      </section>

      {/*  Componente Footer */}
      <Footer
        id="footer"
        classNameFooter="bg-black text-white py-10 px-4 sm:px-10 lg:px-20 text-center"
        classNameH2="text-2xl font-bold mb-4"
        titleH2="MidnightCode"
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          © {new Date().getFullYear()} MidnightCode — Todos los derechos reservados.
        </p>
      </Footer>
    </div>
  );
}
