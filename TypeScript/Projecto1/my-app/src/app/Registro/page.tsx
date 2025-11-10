"use client";
import React, { useState } from "react";
import Title from "@/componentes/Title";
import InPut from "@/componentes/InPut";
import Button from "@/componentes/Button";
import "../../styles/Tailwind.css"

// Formulario De estado del usuario
export default function Registro() {
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

  // Validar estado 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmarPassword) {
      alert("No coinciden las contraseñas");
      return;
    }
    alert("Registro completado con éxito");
  };

  return (
    <section
      className="relative flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/fondo-morado.jpg')" }}
    >
      <div className="absolute top-6 left-6">
        <h1 className="text-white text-3xl md:text-4xl font-bold">MidnightCode</h1>
      </div>

      <div className="flex flex-col justify-center items-center ml-auto w-full md:w-[50%] bg-white/90 backdrop-blur-sm p-8 rounded-l-3xl shadow-2xl">
        <Title classNameDiv="text-center mb-6" classNameH1="text-4xl font-bold text-gray-900" textoH1="Crea tu Cuenta" />

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6">
          {/* componenete InPut */}
          <InPut textoLabel="Nombre completo" type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required />
          <InPut textoLabel="Correo electrónico" type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          <InPut textoLabel="Contraseña" type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
          <InPut textoLabel="Confirmar contraseña" type="password" name="confirmarPassword" id="confirmarPassword" value={formData.confirmarPassword} onChange={handleChange} required />
          {/* Componenete Button */}
          <Button type="submit" textoButton="Registrarse" classNameButton="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg" />
        </form>
      </div>
    </section>
  );
}
