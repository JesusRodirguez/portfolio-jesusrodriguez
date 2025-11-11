import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";

const GestionEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    fecha: "",
    titulo: "",
    descripcion: "",
    autor: "",
  });
  const [modoEdicion, setModoEdicion] = useState(false);

  // 🔹 Cargar eventos al iniciar
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("eventos")) || [];
    setEventos(data);
  }, []);

  // 🔹 Guardar eventos en LocalStorage
  const guardarEnLocalStorage = (data) => {
    localStorage.setItem("eventos", JSON.stringify(data));
  };

  // 🔹 Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Crear nuevo evento o actualizar existente
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fecha || !formData.titulo || !formData.descripcion || !formData.autor) {
      alert("Por favor completa todos los campos.");
      return;
    }

    let nuevosEventos;
    if (modoEdicion) {
      // 🔹 Editar evento existente
      nuevosEventos = eventos.map((ev) =>
        ev.id === formData.id ? formData : ev
      );
      setModoEdicion(false);
      
    } else {
      // 🔹 Crear nuevo evento
      const nuevoEvento = {
        ...formData,
        id: Date.now(), // ID único
      };
      nuevosEventos = [...eventos, nuevoEvento];
      
    }

    setEventos(nuevosEventos);
    guardarEnLocalStorage(nuevosEventos);

    // Limpiar formulario
    setFormData({
      id: null,
      fecha: "",
      titulo: "",
      descripcion: "",
      autor: "",
    });
  };

  // 🔹 Eliminar evento
  const eliminarEvento = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este evento?")) {
      const filtrados = eventos.filter((ev) => ev.id !== id);
      setEventos(filtrados);
      guardarEnLocalStorage(filtrados);
    }
  };

  // 🔹 Cargar datos de un evento para editar
  const editarEvento = (evento) => {
    setFormData(evento);
    setModoEdicion(true);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* 🔹 NavBar */}
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

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#7C3AED] mb-6">Gestión de Eventos</h1>

        {/* 🔹 Formulario de registro / edición */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-xl shadow-md mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:border-[#7C3AED] focus:outline-none"
            placeholder="Fecha"
          />
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:border-[#7C3AED] focus:outline-none"
            placeholder="Título del evento"
          />
          <input
            type="text"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:border-[#7C3AED] focus:outline-none"
            placeholder="Autor / DJ"
          />
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:border-[#7C3AED] focus:outline-none sm:col-span-2"
            placeholder="Descripción del evento"
          ></textarea>

          <button
            type="submit"
            className="bg-[#7C3AED] text-white py-2 rounded-md font-semibold hover:bg-[#6D28D9] transition-all sm:col-span-2"
          >
            {modoEdicion ? "Actualizar Evento" : "Agregar Evento"}
          </button>
        </form>

        {/* 🔹 Tabla de eventos */}
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-[#7C3AED] text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Fecha</th>
              <th className="border border-gray-300 px-4 py-2">Título</th>
              <th className="border border-gray-300 px-4 py-2">Autor</th>
              <th className="border border-gray-300 px-4 py-2">Descripción</th>
              <th className="border border-gray-300 px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {eventos.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-500 py-4 italic"
                >
                  No hay eventos registrados.
                </td>
              </tr>
            ) : (
              eventos.map((ev) => (
                <tr key={ev.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{ev.fecha}</td>
                  <td className="border border-gray-300 px-4 py-2">{ev.titulo}</td>
                  <td className="border border-gray-300 px-4 py-2">{ev.autor}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {ev.descripcion}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                    <button
                      onClick={() => editarEvento(ev)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarEvento(ev.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionEventos;
