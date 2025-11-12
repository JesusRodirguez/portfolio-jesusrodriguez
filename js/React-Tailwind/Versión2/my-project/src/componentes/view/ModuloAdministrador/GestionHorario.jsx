import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";

const GestionHorario = () => {
  const [horarios, setHorarios] = useState([]);
  const [horarioActual, setHorarioActual] = useState({
    id: "",
    dia: "",
    horaInicio: "",
    horaFin: "",
    empleado: "",
  });
  const [editando, setEditando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  // Cargar horarios guardados
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("horarios")) || [];
    setHorarios(guardados);
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem("horarios", JSON.stringify(horarios));
  }, [horarios]);

  // Manejar cambios de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHorarioActual((prev) => ({ ...prev, [name]: value }));
  };

  // Agregar horario
  const agregarHorario = (e) => {
    e.preventDefault();
    if (!horarioActual.dia || !horarioActual.horaInicio || !horarioActual.horaFin) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const nuevo = {
      ...horarioActual,
      id: Date.now(),
    };
    setHorarios([...horarios, nuevo]);
    limpiarFormulario();
  };

  // Editar horario
  const iniciarEdicion = (horario) => {
    setHorarioActual(horario);
    setEditando(true);
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    const actualizados = horarios.map((h) =>
      h.id === horarioActual.id ? horarioActual : h
    );
    setHorarios(actualizados);
    setEditando(false);
    limpiarFormulario();
  };

  // Eliminar horario
  const eliminarHorario = (id) => {
    const confirmacion = window.confirm("¿Deseas eliminar este horario?");
    if (confirmacion) {
      const filtrados = horarios.filter((h) => h.id !== id);
      setHorarios(filtrados);
    }
  };

  // Limpiar formulario
  const limpiarFormulario = () => {
    setHorarioActual({
      id: "",
      dia: "",
      horaInicio: "",
      horaFin: "",
      empleado: "",
    });
  };

  // Filtrar horarios
  const horariosFiltrados = horarios.filter(
    (h) =>
      h.dia.toLowerCase().includes(busqueda.toLowerCase()) ||
      h.empleado.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Barra de navegación */}
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

      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Gestión de Horarios</h1>

        {/* Buscador */}
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Buscar por día o empleado..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border p-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Formulario */}
        <form
          onSubmit={editando ? guardarEdicion : agregarHorario}
          className="bg-gray-100 p-6 rounded-2xl shadow-md mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="text"
              name="dia"
              value={horarioActual.dia}
              onChange={handleChange}
              placeholder="Día (Ej: Lunes)"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="time"
              name="horaInicio"
              value={horarioActual.horaInicio}
              onChange={handleChange}
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="time"
              name="horaFin"
              value={horarioActual.horaFin}
              onChange={handleChange}
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="empleado"
              value={horarioActual.empleado}
              onChange={handleChange}
              placeholder="Empleado (opcional)"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-5 flex gap-3">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer transition-all"
            >
              {editando ? "Guardar Cambios" : "Registrar Horario"}
            </button>
            {editando && (
              <button
                type="button"
                onClick={() => {
                  limpiarFormulario();
                  setEditando(false);
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer transition-all"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {/* Tabla de horarios */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3 text-left">Día</th>
                <th className="p-3 text-left">Hora Inicio</th>
                <th className="p-3 text-left">Hora Fin</th>
                <th className="p-3 text-left">Empleado</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {horariosFiltrados.length > 0 ? (
                horariosFiltrados.map((horario) => (
                  <tr key={horario.id} className="border-b hover:bg-gray-100 transition-all">
                    <td className="p-3">{horario.dia}</td>
                    <td className="p-3">{horario.horaInicio}</td>
                    <td className="p-3">{horario.horaFin}</td>
                    <td className="p-3">{horario.empleado || "N/A"}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <button
                        onClick={() => iniciarEdicion(horario)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded cursor-pointer transition-all"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarHorario(horario.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer transition-all"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-6 italic">
                    No hay horarios registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestionHorario;
