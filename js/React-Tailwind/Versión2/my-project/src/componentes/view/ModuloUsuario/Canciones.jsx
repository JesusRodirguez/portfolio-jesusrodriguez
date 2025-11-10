import React, { useState } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import Title from "../../Title";
import InPut from "../../InPut";
import Button from "../../Butomm";

const Canciones = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [canciones, setCanciones] = useState([]);
  
  //  Cargar canciones desde localStorage
  const [cancionesGuardadas, setCancionesGuardadas] = useState(() => {
    const guardadas = localStorage.getItem("canciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });
  

  //  Buscar canciones (simulado)
  const buscarCanciones = async () => {
    if (!busqueda.trim()) {
      alert("Primero escribe el nombre de una canción");
      return;
    }

    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(busqueda)}`;
    const fakeResults = [
      { id: 1, titulo: `${busqueda} - Video 1`, url },
      { id: 2, titulo: `${busqueda} - Video 2`, url }
    ];
    setResultados(fakeResults);
  };

  //  Guardar una canción
  const guardarCancion = (titulo, url) => {
    const nueva = {
      id: Date.now(),
      titulo,
      url,
      fecha: new Date().toLocaleDateString("es-ES"),
    };
    // agregar cancion
    const actualizadas = [...cancionesGuardadas, nueva];
    setCancionesGuardadas(actualizadas);
    setCanciones(actualizadas);
    localStorage.setItem("canciones", JSON.stringify(actualizadas));
  };
  // elimar cancion
  const eliminarCancion = (id) => {
    const filtradas = canciones.filter((c) => c.id !== id);
    setCanciones(filtradas);
    localStorage.setItem("canciones", JSON.stringify(filtradas));
    // Recarga al eliminar
    window.location.reload();
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* NavBar */}
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

      {/* Título */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-2 text-center">Sugiere la canción</h1>
        {/* Compoenete Title */}
        <Title
          texto="Por favor, escribe el nombre de la canción y el cantante"
          className="text-4xl font-bold text-black mb-6"
        />
      </div>

      {/* Campo de búsqueda */}
      <div className="flex flex-col items-center gap-4 px-8">
        {/* compoenente InPut */}
        <InPut
          type="text"
          placeholder="Escribe el nombre de la canción o artista..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-[300px] px-6 py-3 text-lg rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-500 mx-auto block"
        />

        <div className="flex gap-4">
          {/* Componente Button */}
          <Button
            onClick={buscarCanciones}
            ClassName="bg-red-700 hover:bg-indigo-700 transition-all px-6 py-2 rounded-lg font-semibold text-white cursor-pointer"
            texto="Buscar en YouTube"
          />

          <Button
            onClick={() => {
              if (!busqueda.trim()) {
                alert("Necesito buscar una canción primero");
                return;
              }
              guardarCancion(
                busqueda,
                `https://www.youtube.com/results?search_query=${encodeURIComponent(busqueda)}`
              );
            }}
            ClassName="bg-green-600 hover:bg-green-700 transition-all px-6 py-2 rounded-lg font-semibold text-white cursor-pointer"
            texto="Guardar Manualmente"
          />
        </div>
      </div>

      {/* Resultados */}
      {resultados.length > 0 && (
        <div className="mt-10 px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Resultados de búsqueda</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resultados.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 hover:bg-gray-200 transition-all p-4 rounded-xl shadow-md border border-gray-300"
              >
                <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold block mb-2"
                >
                  Ver en YouTube
                </a>
                <Button
                  onClick={() => guardarCancion(item.titulo, item.url)}
                  ClassName="bg-green-600 hover:bg-green-700 transition-all px-4 py-2 rounded-lg font-semibold text-white cursor-pointer"
                  texto="Guardar canción"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Canciones guardadas */}
      {cancionesGuardadas.length > 0 && (
        <div className="mt-10 px-8 pb-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Canciones guardadas ({cancionesGuardadas.length})
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cancionesGuardadas.map((cancion) => (
              <div
                key={cancion.id}
                className="bg-gray-100 hover:bg-gray-200 transition-all p-4 rounded-xl shadow-md border border-gray-300"
              >
                <h3 className="font-semibold text-lg">{cancion.titulo}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Guardada el {cancion.fecha}
                </p>
                <a
                  href={cancion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold  px-4 py-2 rounded cursor-pointer"
                >
                  Ver en YouTube
                </a>
                <Button
                  onClick={() => eliminarCancion(cancion.id)}
                  ClassName="bg-red-600 hover:bg-red-700 text-white pl-5 px-4 py-2 rounded cursor-pointer"
                  texto="Eliminar"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Canciones;
