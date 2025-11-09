"use client";

import React, { useState } from "react";
import Title from "@/componentes/Title";
import InPut from "@/componentes/InPut";
import Button from "@/componentes/Button";
import "../styles/Tailwind.css"

const Registro: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmarPassword) {
      alert("No coinciden las contraseñas");
      return;
    }

    if (!formData.email || !formData.nombre) {
      alert(" Por favor completa todos los campos");
      return;
    }

    console.log("Datos registrados:", formData);
    alert(" Registro completado con éxito");
  };

  return (
    <section
      className="relative flex min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/fondo-morado.jpg')", 
      }}
    >
      {/* LOGO SUPERIOR IZQUIERDA */}
      <div className="absolute top-6 left-6">
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg">
          MidnightCode
        </h1>
      </div>

      {/* REGISTRO */}
      <div className="flex flex-col justify-center items-center ml-auto w-full md:w-[50%] bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-l-3xl shadow-2xl">
      {/* componente Ttle */}
        <Title
          classNameDiv="text-center mb-6"
          classNameH1="text-4xl font-bold text-gray-900"
          textoH1="Crea tu Cuenta"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6"
        >
            {/* compoente InPut */}
          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Nombre completo"
            classNameLabel="font-semibold text-gray-800"
            type="text"
            name="nombre"
            id="nombre"
            placeHolder="Ingresa tu nombre completo..."
            value={formData.nombre}
            onChange={handleChange}
            required={true}
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
          />

          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Correo electrónico"
            classNameLabel="font-semibold text-gray-800"
            type="email"
            name="email"
            id="email"
            placeHolder="Ingresa tu correo..."
            value={formData.email}
            onChange={handleChange}
            required={true}
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
          />

          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Contraseña"
            classNameLabel="font-semibold text-gray-800"
            type="password"
            name="password"
            id="password"
            placeHolder="Crea una contraseña..."
            value={formData.password}
            onChange={handleChange}
            required={true}
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
          />

          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Confirmar contraseña"
            classNameLabel="font-semibold text-gray-800"
            type="password"
            name="confirmarPassword"
            id="confirmarPassword"
            placeHolder="Repite tu contraseña..."
            value={formData.confirmarPassword}
            onChange={handleChange}
            required={true}
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900"
          />
          {/* componente Buttom */}
          <Button
            type="submit"
            textoButton="Registrarse"
            classNameButton="w-full bg-purple-700 hover:bg-purple-800 transition-all text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg"
          />
        </form>

        <p className="mt-6 text-gray-700 text-sm sm:text-base text-center">
          ¿Ya tienes cuenta?{" "}
          <a
            href="#"
            className="text-purple-700 font-semibold hover:underline"
          >
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </section>
  );
};

export default Registro;
