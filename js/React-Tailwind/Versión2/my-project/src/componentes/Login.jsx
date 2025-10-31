import React, { useState } from "react";
import Title from "./Title";
import InPut from "./input";
import '../index.css'
import Button from "./Butomm";



const Login = () => {
  // Estado que guarda los valores de los inputs
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  // 🔹 handleChange: actualiza el estado al escribir en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // obtiene el nombre y valor del input
    setFormData({ ...formData, [name]: value }); // actualiza el estado
  };

  // 🔹 handleSubmit: se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se recargue la página
    console.log("Datos enviados:", formData);

    // Validación no este vacio los campos
    if (formData.correo === "" || formData.contraseña === "") {
      alert("Por favor completa todos los campos 🧾");
      return;
    }

    // Ejemplo de comprobación
    if (formData.correo === "admin@gmail.com" && formData.contraseña === "12345") {
      alert("Inicio de sesión exitoso ");
    } else {
      alert("Credenciales incorrectas ");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-80 border border-white/20">
        <Title texto="Iniciar Sesión" />

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <InPut texto="Correo Electrónico" type="email" name="correo" placeholder="ejemplo@gmail.com" value={formData.correo} onChange={handleChange} required/>

          <InPut texto="Contraseña" type="password" name="contraseña" placeholder="********" value={formData.contraseña} onChange={handleChange} required />

          <Button texto="Ingresar" type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"/>
        </form>
      </div>
    </div>
  );
};

export default Login;

