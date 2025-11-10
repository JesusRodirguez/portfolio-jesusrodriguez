"use client";
import React, { useState } from "react";
import Title from "@/componentes/Title";
import InPut from "@/componentes/InPut";
import Button from "@/componentes/Button";
import "../../styles/Tailwind.css";

// estado de Usuario
export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Revisión de entrada
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === "admin@midnight.com" && formData.password === "12345") {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Credenciales incorrectas");
    }
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
        <Title classNameDiv="text-center mb-6" classNameH1="text-4xl font-bold text-gray-900" textoH1="Inicia Sesión" />

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6">
          {/* Componenete InPut */}
          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Correo electrónico"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:ring-4 focus:ring-purple-400 text-gray-900"
          />

          <InPut
            classNameDiv="flex flex-col gap-2"
            textoLabel="Contraseña"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            classNameInput="border border-gray-300 rounded-lg px-4 py-3 focus:ring-4 focus:ring-purple-400 text-gray-900"
          />
          {/* Componenete Button */}
          <Button
            type="submit"
            textoButton="Entrar"
            classNameButton="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg"
          />
        </form>
      </div>
    </section>
  );
}
