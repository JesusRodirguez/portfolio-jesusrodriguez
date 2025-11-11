import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import Button from "../../Butomm";
import InPut from "../../InPut";

const GestionCanciones = () => {
  const [canciones, setCanciones] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevoUrl, setNuevoUrl] = useState("");

  // Cargar canciones desde localStorage
  useEffect(() => {
    const data = localStorage.getItem("canciones");
    if (data) setCanciones(JSON.parse(data));
  }, []);

  // Eliminar canción
  const eliminarCancion = (id) => {
    const filtradas = canciones.filter((c) => c.id !== id);
    setCanciones(filtradas);
    localStorage.setItem("canciones", JSON.stringify(filtradas));
    window.location.reload();
  };

  // Guardar cambios
  const guardarEdicion = (id) => {
    const actualizadas = canciones.map((c) =>
      c.id === id ? { ...c, titulo: nuevoTitulo, url: nuevoUrl } : c
    );
    setCanciones(actualizadas);
    localStorage.setItem("canciones", JSON.stringify(actualizadas));
    setEditandoId(null);
    setNuevoTitulo("");
    setNuevoUrl("");
    window.location.reload();
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* compoenente Navbar */}
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

      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Gestión de Canciones </h1>

        {canciones.length === 0 ? (
          <p className="text-center text-gray-600">No hay canciones guardadas todavía.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {canciones.map((cancion) => (
              <div
                key={cancion.id}
                className="bg-gray-100 p-4 rounded-xl shadow-md border border-gray-300 hover:bg-gray-200 transition-all"
              >
                {editandoId === cancion.id ? (
                  <>
                  {/* componenete  InPut */}
                    <InPut
                      type="text"
                      value={nuevoTitulo}
                      onChange={(e) => setNuevoTitulo(e.target.value)}
                      placeholder="Nuevo título"
                      className="w-full mb-2 border px-3 py-2 rounded"
                    />
                    <InPut
                      type="text"
                      value={nuevoUrl}
                      onChange={(e) => setNuevoUrl(e.target.value)}
                      placeholder="Nuevo enlace"
                      className="w-full mb-2 border px-3 py-2 rounded"
                    //   componente Butoom
                    />
                    <Button
                      onClick={() => guardarEdicion(cancion.id)}
                      ClassName="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mr-2 cursor-pointer"
                      texto="Guardar"
                    />
                    <Button
                      onClick={() => setEditandoId(null)}
                      ClassName="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer"
                      texto="Cancelar"
                    />
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-lg">{cancion.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Guardada el {cancion.fecha}
                    </p>
                    <a
                      href={cancion.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 font-semibold block mb-2"
                    >
                      Ver en YouTube
                    </a>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => {
                          setEditandoId(cancion.id);
                          setNuevoTitulo(cancion.titulo);
                          setNuevoUrl(cancion.url);
                        }}
                        ClassName="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded cursor-pointer"
                        texto="Editar"
                      />
                      <Button
                        onClick={() => eliminarCancion(cancion.id)}
                        ClassName="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer"
                        texto="Eliminar"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GestionCanciones;
