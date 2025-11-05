import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import InPut from "../InPut";
import Button from "../Butomm";

const Login = () => {
  const navigate = useNavigate();
  // estado del formulario,guarda los datos o actualiza
  const [formData, setFormData] = useState({ correo: "", contraseña: "" });
  // actualizar el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // cargar el estado y hacer como una validacion por el momento
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.correo || !formData.contraseña) {
      alert("Por favor completa todos los campos");
      return;
    }
    // validacion de que no este vacio los campos
    if (formData.correo === "admin@gmail.com" && formData.contraseña === "12345") {
      alert("Inicio de sesión exitoso ");
      navigate("/pagina-principal");
    } else {
      alert("Incorrectas, Volver a intentar ");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center font-[Inter]"
      style={{
        backgroundImage: `url('public/img/fondo.jpg')`, // cambia esta ruta a tu fondo real
      }}
    >
      <div className="bg-[#ffffff]/10 dark:bg-[#0f0f0f]/70 backdrop-blur-xl border border-[#ffffff1a] shadow-xl rounded-3xl p-10 w-[90%] max-w-md text-center">
        
        {/* Nombre del Proyecto */}
        <h2 className="text-3xl font-bold text-[#b79b74] mb-2">MidnightCode</h2>
        
        {/* Título LOGIN */}
        <Title texto="Login" />
        <p className="text-sm text-gray-300 mb-6">
          Accede a tu cuenta para continuar
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InPut
            texto=""
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
          />

          <InPut
            texto=""
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />

          <div className="flex justify-between text-xs text-gray-400">
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="checkbox" className="accent-[#b79b74]" />
              <span>Recordarme</span>
            </label>
            <p className="hover:underline cursor-pointer">¿Olvidaste tu contraseña?</p>
          </div>

          <Button
            texto="Iniciar Sesión"
            type="submit"
            className="w-full bg-[#b79b74] text-black font-medium py-3 rounded-lg hover:bg-[#c9ae86] transition-all"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
