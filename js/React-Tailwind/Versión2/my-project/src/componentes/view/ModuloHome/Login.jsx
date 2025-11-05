import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../Title";
import InPut from "../../InPut";
import Button from "../../Butomm";

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
    if (formData.correo === "usuario@gmail.com" && formData.contraseña === "12345") {
      alert("Inicio de sesión exitoso ");
      navigate("/pagina-principal");
    }
    else if (formData.correo === "admin@gmail.com" && formData.contraseña === "12345"){
      navigate("/PaginaPrincipalAdministrador")
    } 
    else {
      alert("Incorrectas, Volver a intentar ");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white font-[Inter]">
      <div className="flex w-[90%] max-w-5xl h-[70vh] shadow-lg">
        
        {/* Lado izquierdo (formulario) */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center">
          <div className="w-[80%] max-w-sm text-center">
            <h2 className="text-3xl font-bold text-[#7C3AED] mb-2">MidnightCode</h2>
            {/* Componente Title */}
            <Title texto="Iniciar Sesión" ClassName="text-2xl font-semibold mb-2 text-[#7C3AED]" />
            <p className="text-sm text-gray-500 mb-6">
              Ingresa tus credenciales para continuar
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Componenete InPut */}
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

              <div className="flex justify-between text-xs text-gray-500">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input type="checkbox" className="accent-[#7C3AED]" />
                  <span>Recordarme</span>
                </label>
                <p className="hover:underline cursor-pointer">¿Olvidaste tu contraseña?</p>
              </div>
              {/* Componenete Button */}
              <Button
                texto="Iniciar Sesión"
                type="submit"
                ClassName="w-full bg-[#7C3AED] text-white font-medium py-2 hover:bg-[#6D28D9] transition-all cursor-pointer"
              />
            </form>
          </div>
        </div>

        {/* Imajen */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('public/img/fondo.jpg')`, // ajusta si tu imagen está en otra ruta
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
