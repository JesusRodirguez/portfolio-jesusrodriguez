import React, { useState } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";
import Title from "../../componentes/Title";
import Button from "../../componentes/Butomm";
import InPut from "../../componentes/InPut";

// Luego lo vamos ha hacer localStorage

const GestionReserva = () => {
  // Estado inicial con reservas de ejemplo
  const [reservas, setReservas] = useState([
    {
      id: 1,
      nombre: "Carlos Pérez",
      correo: "carlos@example.com",
      telefono: "3001234567",
      tipo: "Mesa VIP",
      numeroPersonas: 4,
    },
    {
      id: 2,
      nombre: "Laura Gómez",
      correo: "laura@example.com",
      telefono: "3109876543",
      tipo: "General",
      numeroPersonas: 2,
    },
  ]);

  // Estado para formulario
  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
    correo: "",
    telefono: "",
    tipo: "",
    numeroPersonas: "",
  });

  // Control de edición
  const [editando, setEditando] = useState(false);

  // Manejar cambios de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Crear o actualizar reserva
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.correo ||
      !formData.telefono ||
      !formData.tipo ||
      !formData.numeroPersonas
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (editando) {
      // Actualizar reserva existente
      setReservas((prev) =>
        prev.map((res) => (res.id === formData.id ? formData : res))
      );
      setEditando(false);
    } else {
      // Crear nueva reserva
      setReservas((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    // Limpiar formulario
    setFormData({
      id: null,
      nombre: "",
      correo: "",
      telefono: "",
      tipo: "",
      numeroPersonas: "",
    });
  };

  // Editar reserva
  const handleEdit = (reserva) => {
    setFormData(reserva);
    setEditando(true);
  };

  // Eliminar reserva
  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta reserva?")) {
      setReservas((prev) => prev.filter((res) => res.id !== id));
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* NAVBAR ADMIN */}
      <Navbar
        ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
        ClassH1="text-3xl font-bold mb-2 text-center"
        TextoH1="MidnightCode - Admin"
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
        <CustomLink to="/GestionMenu" text="Menú" />
      </Navbar>

      {/* CONTENIDO */}
      <div className="flex flex-col items-center py-10 px-6">
        <Title textTitle="Gestión de Reservas" />

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-300 rounded-2xl shadow-lg p-8 w-full md:w-3/4 lg:w-2/3 mt-6 mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            {editando ? "Editar Reserva" : "Agregar Nueva Reserva"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InPut
              texto="Nombre completo"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingresa tu nombre completo..."
              value={formData.nombre}
              onChange={handleChange}
              required
              ClassName="w-full px-5 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
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
              ClassName="w-full px-5 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
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
              ClassName="w-full px-5 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />

            <InPut
              texto="Tipo de reserva"
              type="text"
              name="tipo"
              id="tipo"
              placeholder="Ej: VIP, General..."
              value={formData.tipo}
              onChange={handleChange}
              required
              ClassName="w-full px-5 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />

            <InPut
              texto="Número de personas"
              type="number"
              name="numeroPersonas"
              id="numeroPersonas"
              placeholder="Cantidad de personas"
              value={formData.numeroPersonas}
              onChange={handleChange}
              required
              ClassName="w-full px-5 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              texto={editando ? "Actualizar Reserva" : "Agregar Reserva"}
              ClassName="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mr-2 cursor-pointer"
            />
          </div>
        </form>

        {/* LISTADO */}
        <div className="w-full md:w-3/4 lg:w-2/3 mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Reservas registradas
          </h2>

          {reservas.length === 0 ? (
            <p className="text-center text-gray-500">
              No hay reservas registradas.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reservas.map((res) => (
                <div
                  key={res.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all p-6"
                >
                  <p>
                    <strong>Nombre:</strong> {res.nombre}
                  </p>
                  <p>
                    <strong>Correo:</strong> {res.correo}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {res.telefono}
                  </p>
                  <p>
                    <strong>Tipo:</strong> {res.tipo}
                  </p>
                  <p>
                    <strong>Personas:</strong> {res.numeroPersonas}
                  </p>

                  <div className="flex justify-center gap-4 mt-4">
                    <Button
                      type="button"
                      texto="Editar"
                      onClick={() => handleEdit(res)}
                      ClassName="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded cursor-pointer"
                    />
                    <Button
                      type="button"
                      texto="Eliminar"
                      onClick={() => handleDelete(res.id)}
                      ClassName="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionReserva;
