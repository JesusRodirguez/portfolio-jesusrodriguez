import React, { useState } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";
import Title from "../../componentes/Title";

const Eventos = () => {
const eventosGuardados = JSON.parse(localStorage.getItem("eventos")) || [];

  const eventosEjemplo = eventosGuardados.length > 0 ? eventosGuardados : [
    {
      id: 1,
      fecha: "2025-11-10",
      titulo: "Noche Electrónica",
      descripcion: "Un viaje épico al ritmo del mejor Techno.",
      autor: "DJ Phantom",
    },
    {
      id: 2,
      fecha: "2025-11-15",
      titulo: "Reggaeton Night",
      descripcion: "Perreo intenso hasta las 4am",
      autor: "DJ Flow",
    },
    {
      id: 3,
      fecha: "2025-11-15",
      titulo: "Sexy Party",
      descripcion: "Ambiente sensual con luces y humo",
      autor: "DJ Venus",
    },
  ];

  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

  // Filtra eventos del día seleccionado
  const eventosDelDia = eventosEjemplo.filter(
    (ev) => ev.fecha === fechaSeleccionada
  );

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Componenete NavBar */}
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

      {/* Componnete Título */}
      <Title ClassName="text-3xl font-bold mb-2 text-center" texto="Calendario de Eventos" />

      {/* Contenedor principal del calendario */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-3/4 bg-gray-100 p-8 rounded-2xl shadow-xl border border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Selecciona una Fecha</h2>

          {/*  Selector de fecha */}
          <input
            type="date"
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
            className="w-full sm:w-1/2 mx-auto block p-3 rounded-xl border border-gray-400 text-black text-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 mb-6"
          />

          {/*  Eventos encontrados */}
          {fechaSeleccionada && (
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-center mb-4">
                Eventos del {fechaSeleccionada}
              </h3>

              {eventosDelDia.length === 0 ? (
                <p className="text-center text-gray-500 italic">
                  No hay eventos programados para esta fecha.
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventosDelDia.map((ev) => (
                    <div
                      key={ev.id}
                      className="bg-white border border-gray-200 shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-xl font-semibold text-indigo-700">{ev.titulo}</h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Autor: {ev.autor}
                      </p>
                      <p className="text-gray-700">{ev.descripcion}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eventos;
