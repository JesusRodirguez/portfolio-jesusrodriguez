import React, { useEffect, useState } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";

const GestionUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

//   trae la array de los usuarios
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(data);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar
        ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
        ClassH1="text-3xl font-bold mb-2 text-center"
        TextoH1="MidnightCode"
        ClassUl="flex gap-8 justify-center"
      >
        <CustomLink to="/" text="Salir" />
        <CustomLink to="/PaginaPrincipalAdministrador" text="Home" />
        <CustomLink to="/GestionEventos" text="Eventos" />
        <CustomLink to="/GestionHorario" text="Horarios" />
        <CustomLink to="/GestionReserva" text="Reservas" />
        <CustomLink to="/GestionUsuario" text="Usuarios" />
        <CustomLink to="/GestionVentas" text="Ventas" />
        <CustomLink to="/GestionInventario" text="Inventario" />
        <CustomLink to="/GestionCanciones" text="Canciones" />
        <CustomLink to="/GestionMenu" text="Menu" />
      </Navbar>

      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#7C3AED] mb-4">Gestión de Usuarios</h1>

        {usuarios.length === 0 ? (
          <p className="text-gray-600">No hay usuarios registrados aún.</p>
        ) : (
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-[#7C3AED] text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Teléfono</th>
                <th className="border border-gray-300 px-4 py-2">Correo</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{u.nombre}</td>
                  <td className="border border-gray-300 px-4 py-2">{u.telefono}</td>
                  <td className="border border-gray-300 px-4 py-2">{u.correo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GestionUsuario;
