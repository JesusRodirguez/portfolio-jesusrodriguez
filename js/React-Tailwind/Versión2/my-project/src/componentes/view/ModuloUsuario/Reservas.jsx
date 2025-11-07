import React, { useState } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import InPut from "../../InPut"; // Tu componente de input personalizado

const Reservas = () => {
  // Disponibilidades iniciales
  const [disponibilidad, setDisponibilidad] = useState({
    Mesa: Array(10).fill(true),
    VIP: Array(4).fill(true),
    Parqueadero: Array(50).fill(true),
    Cover: Array(50).fill(true),
  });

  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });

  // Cambiar tipo de reserva
  const handleTipoChange = (e) => {
    setTipoSeleccionado(e.target.value);
    setIndiceSeleccionado(null);
  };

  // Seleccionar una opción disponible
  const handleSeleccion = (index) => {
    setIndiceSeleccionado(index);
  };

  // Manejar formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Confirmar reserva
  const handleConfirmar = (e) => {
    e.preventDefault();
    if (tipoSeleccionado && indiceSeleccionado !== null) {
      const nuevoEstado = { ...disponibilidad };
      nuevoEstado[tipoSeleccionado][indiceSeleccionado] = false; // marcar ocupado
      setDisponibilidad(nuevoEstado);
      setFormData({ nombre: "", correo: "", telefono: "" });
      setIndiceSeleccionado(null);
      alert("Reserva confirmada,Muchas Gracias");
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* NAVBAR */}
      <Navbar
        ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
        ClassH1="text-3xl font-bold mb-2 text-center"
        TextoH1="MidnightCode"
        ClassUl="flex gap-8 justify-center"
      >
        <CustomLink to="/" text="Salir" />
        <CustomLink to="/pagina-principal" text="Home" />
        <CustomLink to="/Eventos" text="Eventos" />
        <CustomLink to="/Menu" text="Menu" />
        <CustomLink to="/Reservas" text="Reservas" />
        <CustomLink to="/Cancion" text="Canciones" />
        <CustomLink to="/AboutUs" text="About us" />
        <CustomLink to="/Ayuda" text="Ayuda" />
      </Navbar>

      {/* CONTENIDO */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-6">Reserva tu espacio</h1>

        {/* Selector de tipo */}
        <select
          value={tipoSeleccionado}
          onChange={handleTipoChange}
          className="w-72 px-4 py-3 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400 mb-8 bg-white"
        >
          <option value="">Selecciona un tipo</option>
          <option value="Mesa">Mesa</option>
          <option value="VIP">VIP</option>
          <option value="Parqueadero">Parqueadero</option>
          <option value="Cover">Cover</option>
        </select>

        {/* Mostrar cuadritos de disponibilidad */}
        {tipoSeleccionado && (
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-10 w-3/4">
            {disponibilidad[tipoSeleccionado].map((dispo, index) => (
              <button
                key={index}
                onClick={() => dispo && handleSeleccion(index)}
                className={`p-4 rounded-lg text-center font-semibold transition-all ${
                  dispo
                    ? "bg-green-100 text-green-700 hover:bg-green-300"
                    : "bg-red-300 text-red-500 cursor-not-allowed"
                }`}
              >
                {tipoSeleccionado} {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Formulario de reserva */}
        {indiceSeleccionado !== null && (
          <form
            onSubmit={handleConfirmar}
            className="bg-white border border-gray-300 rounded-xl shadow-lg p-8 w-11/12 md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Confirmar {tipoSeleccionado} {indiceSeleccionado + 1}
            </h2>
            {/* Componenete InPut */}
            <InPut
              texto="Nombre completo"
              name="nombre"
              id="nombre"
              placeholder="Ingresa tu nombre..."
              value={formData.nombre}
              onChange={handleChange}
              required
              ClassName="w-full px-5 py-3 mb-4 pb-2 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />
            
            <InPut
              texto="Correo electrónico"
              type="email"
              name="correo"
              id="correo"
              placeholder="example@email.com"
              value={formData.correo}
              onChange={handleChange}
              required
              ClassName="w-full px-5 py-3 mb-4 pb-2 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />

            <InPut
              texto="Teléfono"
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Número de contacto"
              value={formData.telefono}
              onChange={handleChange}
              required
              ClassName="w-full px-5 py-3 mb-6 pb-2 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all"
            >
              Confirmar Reserva
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reservas;
