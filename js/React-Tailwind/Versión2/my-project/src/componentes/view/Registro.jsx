import React, { useState } from "react";
import Title from "../Title";
import InPut from "../InPut";
import Button from "../Butomm";

const Registro = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    contraseña: "",
  });

  // Actualizar el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validación y envío
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple de campos vacíos
    if (!formData.nombre || !formData.telefono || !formData.correo || !formData.contraseña) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Simulación de registro exitoso
    alert(`Usuario registrado: ${formData.nombre}`);
    console.log("Datos del registro:", formData);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center font-[Inter]"
      style={{
        backgroundImage: `url('public/img/fondo.jpg')`, // 🔹 Ajusta a tu ruta real
      }}
    >
      <div className="bg-[#ffffff]/10 dark:bg-[#0f0f0f]/70 backdrop-blur-xl border border-[#ffffff1a] shadow-xl rounded-3xl p-10 w-[90%] max-w-md text-center">
        
        {/* 🔸 Nombre del Proyecto */}
        <h2 className="text-3xl font-bold text-[#b79b74] mb-2">MidnightCode</h2>
        
        {/* 🔸 Título Registro */}
        <Title texto="Registro" />
        <p className="text-sm text-gray-300 mb-6">
          Crea tu cuenta para unirte a la experiencia
        </p>

        {/* 🔸 Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <InPut
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
          />

          <InPut
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />

          <InPut
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
          />

          <InPut
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />

          <Button
            texto="Registrarme"
            type="submit"
            className="w-full bg-[#b79b74] text-black text-xl font-semibold py-3 px-4 rounded-lg hover:bg-[#c9ae86] transition-all duration-200 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Registro;
