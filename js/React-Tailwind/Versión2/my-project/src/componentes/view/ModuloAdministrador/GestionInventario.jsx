import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import InPut from "../../InPut";
import Button from "../../Butomm";

const GestionInventario = () => {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    precio: "",
    stock: "",
    imagen: ""
  });
  const [editando, setEditando] = useState(false);

  // Cargar productos desde localStorage al iniciar
  useEffect(() => {
    const almacenados = JSON.parse(localStorage.getItem("productosMenu")) || [];
    setProductos(almacenados);
  }, []);

  // Guardar en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("productosMenu", JSON.stringify(productos));
  }, [productos]);

  // Manejar cambios de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Agregar producto
  const handleAgregar = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.precio || !formData.stock) {
      alert("Completa todos los campos obligatorios.");
      return;
    }
    const nuevoProducto = {
      id: Date.now(),
      nombre: formData.nombre,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock),
      imagen: formData.imagen || "/img/default.webp"
    };
    setProductos([...productos, nuevoProducto]);
    setFormData({ id: "", nombre: "", precio: "", stock: "", imagen: "" });
  };

  // Editar producto
  const handleEditar = (producto) => {
    setEditando(true);
    setFormData(producto);
  };

  // Guardar cambios de edición
  const handleGuardarEdicion = (e) => {
    e.preventDefault();
    setProductos(
      productos.map((p) => (p.id === formData.id ? formData : p))
    );
    setEditando(false);
    setFormData({ id: "", nombre: "", precio: "", stock: "", imagen: "" });
  };

  // Eliminar producto
  const handleEliminar = (id) => {
    if (window.confirm("¿Deseas eliminar este producto?")) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
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

      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Gestión de Inventario</h1>

      {/* Formulario */}
      <form
        onSubmit={editando ? handleGuardarEdicion : handleAgregar}
        className="bg-gray-50 border border-gray-300 rounded-2xl shadow-lg p-8 w-11/12 md:w-3/4 lg:w-2/3 mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InPut
            type="text"
            name="nombre"
            placeholder="Nombre del producto"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <InPut
            type="number"
            name="precio"
            placeholder="Precio de venta"
            value={formData.precio}
            onChange={handleChange}
            required
          />
          <InPut
            type="number"
            name="stock"
            placeholder="Cantidad disponible"
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <InPut
            type="text"
            name="imagen"
            placeholder="URL de la imagen (opcional)"
            value={formData.imagen}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
           type="submit"
           className={`${
           editando
           ? "bg-yellow-500 hover:bg-yellow-600"
           : "bg-green-600 hover:bg-green-700"
           } text-white px-4 py-2 rounded mr-2 cursor-pointer font-semibold`}
           >
           {editando ? "Guardar cambios" : "Agregar producto"}
           </button>
        </div>
      </form>

      {/* Tabla de productos */}
      <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Productos registrados</h2>
        <table className="w-full border border-gray-300 rounded-xl shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Imagen</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No hay productos registrados.
                </td>
              </tr>
            ) : (
              productos.map((producto) => (
                <tr key={producto.id} className="text-center border-b">
                  <td className="py-2 px-4">{producto.nombre}</td>
                  <td className="py-2 px-4">${producto.precio.toLocaleString()}</td>
                  <td className="py-2 px-4">{producto.stock}</td>
                  <td className="py-2 px-4">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-16 h-16 object-cover mx-auto rounded-xl border"
                    />
                  </td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    <button
                      onClick={() => handleEditar(producto)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-xl"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(producto.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl"
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

export default GestionInventario;
