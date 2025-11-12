import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";

const GestionVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [ventaActual, setVentaActual] = useState({
    id: "",
    producto: "",
    cantidad: "",
    precio: "",
    empleado: "",
  });
  const [editando, setEditando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  // Cargar ventas guardadas
  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("ventas")) || [];
    setVentas(guardadas);
  }, []);

  // Guardar ventas en localStorage
  useEffect(() => {
    localStorage.setItem("ventas", JSON.stringify(ventas));
  }, [ventas]);

  // Manejar inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVentaActual((prev) => ({ ...prev, [name]: value }));
  };

  // Agregar nueva venta
  const agregarVenta = (e) => {
    e.preventDefault();
    if (!ventaActual.producto || !ventaActual.cantidad || !ventaActual.precio) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const nueva = {
      ...ventaActual,
      id: Date.now(),
      fecha: new Date().toLocaleDateString(),
    };

    setVentas([...ventas, nueva]);
    limpiarFormulario();
  };

  // Editar venta
  const iniciarEdicion = (venta) => {
    setVentaActual(venta);
    setEditando(true);
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    const actualizadas = ventas.map((v) =>
      v.id === ventaActual.id ? ventaActual : v
    );
    setVentas(actualizadas);
    setEditando(false);
    limpiarFormulario();
  };

  // Eliminar venta
  const eliminarVenta = (id) => {
    const confirmacion = window.confirm("¿Deseas eliminar esta venta?");
    if (confirmacion) {
      const filtradas = ventas.filter((v) => v.id !== id);
      setVentas(filtradas);
    }
  };

  // Limpiar formulario
  const limpiarFormulario = () => {
    setVentaActual({
      id: "",
      producto: "",
      cantidad: "",
      precio: "",
      empleado: "",
    });
  };

  // Filtrar ventas
  const ventasFiltradas = ventas.filter(
    (v) =>
      v.producto.toLowerCase().includes(busqueda.toLowerCase()) ||
      v.empleado.toLowerCase().includes(busqueda.toLowerCase())
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
        <h1 className="text-4xl font-bold mb-8 text-center">Gestión de Ventas</h1>

        {/* Buscador */}
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Buscar por producto o empleado..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border p-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Formulario de registro / edición */}
        <form
          onSubmit={editando ? guardarEdicion : agregarVenta}
          className="bg-gray-100 p-6 rounded-2xl shadow-md mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="producto"
              value={ventaActual.producto}
              onChange={handleChange}
              placeholder="Producto"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="number"
              name="cantidad"
              value={ventaActual.cantidad}
              onChange={handleChange}
              placeholder="Cantidad"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="number"
              name="precio"
              value={ventaActual.precio}
              onChange={handleChange}
              placeholder="Precio"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="empleado"
              value={ventaActual.empleado}
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
              {editando ? "Guardar Cambios" : "Registrar Venta"}
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

        {/* Tabla de ventas */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3 text-left">Producto</th>
                <th className="p-3 text-left">Cantidad</th>
                <th className="p-3 text-left">Precio</th>
                <th className="p-3 text-left">Empleado</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ventasFiltradas.length > 0 ? (
                ventasFiltradas.map((venta) => (
                  <tr
                    key={venta.id}
                    className="border-b hover:bg-gray-100 transition-all"
                  >
                    <td className="p-3">{venta.producto}</td>
                    <td className="p-3">{venta.cantidad}</td>
                    <td className="p-3">${venta.precio}</td>
                    <td className="p-3">{venta.empleado || "N/A"}</td>
                    <td className="p-3">{venta.fecha}</td>
                    <td className="p-3 flex justify-center gap-2">
                      <button
                        onClick={() => iniciarEdicion(venta)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded cursor-pointer transition-all"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarVenta(venta.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer transition-all"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-6 italic"
                  >
                    No hay ventas registradas
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

export default GestionVentas;
