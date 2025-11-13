"use client";
import React from "react";
import FondoEstrellas from "../Effect/FondoEstrellas";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen md:h-[640px] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f)",
      }}
    >
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <FondoEstrellas />
      </div>

      {/* Contenido encima */}
      <div className="relative z-10 text-center text-white bg-black/40 p-8 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6">
          Bienvenido a NidnightCode
        </h1>
        <h3 className="h-font text-yellow-400 mb-4">¿Preparado para Disfrutar?</h3>
        <a
          href="/Registro"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:brightness-95 transition"
        >
          Registrarse
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
