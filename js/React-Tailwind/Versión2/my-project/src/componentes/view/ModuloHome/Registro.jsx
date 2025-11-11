import React, { useState } from "react";
import Title from "../../Title";
import InPut from "../../InPut";
import Button from "../../Butomm";

const Registro = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    contraseña: "",
  });

  // Actualizar los datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.nombre || !formData.telefono || !formData.correo || !formData.contraseña) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Obtener usuarios existentes del LocalStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Agregar el nuevo usuario
    const nuevosUsuarios = [...usuariosGuardados, formData];

    // Guardar en LocalStorage
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));


    // Limpiar el formulario
    setFormData({
      nombre: "",
      telefono: "",
      correo: "",
      contraseña: "",
    });window.location.reload()
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white font-[Inter]">
      <div className="flex w-[90%] max-w-5xl h-[70vh] shadow-lg">
        {/* Lado izquierdo (formulario) */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center">
          <div className="w-[80%] max-w-sm text-center">
            <h2 className="text-3xl font-bold text-[#7C3AED] mb-2">MidnightCode</h2>
            <Title texto="Registro" ClassName="text-2xl font-semibold mb-2 text-[#7C3AED]" />
            <p className="text-sm text-gray-500 mb-6">
              Crea tu cuenta para unirte a la experiencia
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InPut
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                ClassName="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
              />

              <InPut
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                ClassName="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
              />

              <InPut
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={handleChange}
                ClassName="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
              />

              <InPut
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                ClassName="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]"
              />

              <Button
                texto="Registrarme"
                type="submit"
                ClassName="w-full bg-[#7C3AED] text-white text-lg font-semibold py-2 hover:bg-[#6D28D9] transition-all cursor-pointer"
              />
            </form>
          </div>
        </div>

        {/* Imagen */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('public/img/fondo.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Registro;
