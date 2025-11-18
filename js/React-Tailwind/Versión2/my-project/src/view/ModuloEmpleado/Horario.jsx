import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";

const Horario = () => {
  const [horarios, setHorarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // Cargar horarios desde localStorage
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("horarios")) || [];
    setHorarios(guardados);
  }, []);

  // Filtrar por día
  const horariosFiltrados = horarios.filter((h) =>
    h.dia.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen text-black">
      {/* NAVBAR */}
      <Navbar
        ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
        ClassH1="text-3xl font-bold mb-2 text-center"
        TextoH1="MidnightCode"
        ClassUl="flex gap-8 justify-center"
      >
        <CustomLink to="/" text="Salir" />
        <CustomLink to="/PaginaPrincipalEmpleado" text="Home" />
        <CustomLink to="/Horario" text="Horario" />
        <CustomLink to="/Ventas" text="Ventas" />
        <CustomLink to="/Inventario" text="Inventario" />
      </Navbar>

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-8 text-center">Horario</h1>

      {/* BUSCADOR */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Filtrar por día (Ej: Lunes)"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border p-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* TABLA */}
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-xl overflow-hidden">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-left">Día</th>
              <th className="p-3 text-left">Hora Inicio</th>
              <th className="p-3 text-left">Hora Fin</th>
              <th className="p-3 text-left">Empleado</th>
            </tr>
          </thead>

          <tbody>
            {horariosFiltrados.length > 0 ? (
              horariosFiltrados.map((h) => (
                <tr
                  key={h.id}
                  className="border-b hover:bg-gray-100 transition-all"
                >
                  <td className="p-3">{h.dia}</td>
                  <td className="p-3">{h.horaInicio}</td>
                  <td className="p-3">{h.horaFin}</td>
                  <td className="p-3">{h.empleado || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-gray-500 py-6 italic"
                >
                  No hay horarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Horario;
