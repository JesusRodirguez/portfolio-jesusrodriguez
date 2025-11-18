import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";
import InPut from "../../componentes/InPut";
import Button from "../../componentes/Butomm";

const Inventario = () => {
  const [productos, setProductos] = useState([]);

  // Formulario
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: ""
  });

  // Cargar inventario de localStorage
  useEffect(() => {
    const almacenados = JSON.parse(localStorage.getItem("productosInventario")) || [];
    setProductos(almacenados);
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem("productosInventario", JSON.stringify(productos));
  }, [productos]);

  // Manejar cambios del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // AGREGAR producto (empleado)
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
      imagen: formData.imagen || "/img/default.webp",
      disponible: false
    };

    setProductos([...productos, nuevoProducto]);

    // limpiar formulario
    setFormData({ nombre: "", precio: "", stock: "", imagen: "" });
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
        <CustomLink to="/PaginaPrincipalEmpleado" text="Home" />
        <CustomLink to="/Horario" text="Horario" />
        <CustomLink to="/Ventas" text="Ventas" />
        <CustomLink to="/Inventario" text="Inventario" />
      </Navbar>

      <h1 className="text-4xl font-bold mb-8 text-center mt-6">Inventario</h1>

      
      <form
        onSubmit={handleAgregar}
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
            placeholder="Precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
          <InPut
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <InPut
            type="text"
            name="imagen"
            placeholder="URL de imagen (opcional)"
            value={formData.imagen}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center mt-6">
          <Button
            texto="Agregar producto"
            type="submit"
            ClassName="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold"
          />
        </div>
      </form>

      {/* Tabla solo lectura */}
      <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Productos registrados</h2>

        <table className="w-full border border-gray-300 rounded-xl shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Imagen</th>
            </tr>
          </thead>

          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Inventario;
