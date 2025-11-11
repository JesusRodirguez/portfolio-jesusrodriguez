import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar"; // Componente Navbar
import CustomLink from "../../CustomLink"; // Componente de enlaces personalizados
import InPut from "../../InPut"; // Componente Input personalizado
import Button from "../../Butomm"; // Componente Button personalizado

const GestionInventario = () => {
  // Estado que almacena todos los productos del inventario
  const [productos, setProductos] = useState([]);

  // Estado que almacena los datos del formulario
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    precio: "",
    stock: "",
    imagen: ""
  });

  // Estado que indica si estamos editando un producto o agregando uno nuevo
  const [editando, setEditando] = useState(false);

  // useEffect para cargar los productos guardados en localStorage al montar el componente
  useEffect(() => {
    const almacenados = JSON.parse(localStorage.getItem("productosInventario")) || [];
    setProductos(almacenados);
  }, []);

  // useEffect que actualiza localStorage cada vez que cambia el array de productos
  useEffect(() => {
    localStorage.setItem("productosInventario", JSON.stringify(productos));
  }, [productos]);

  // Función para manejar los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza la propiedad correspondiente en formData
    setFormData({ ...formData, [name]: value });
  };

  // Función para agregar un producto nuevo
  const handleAgregar = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Validación: si falta algún campo obligatorio
    if (!formData.nombre || !formData.precio || !formData.stock) {
      alert("Completa todos los campos.");
      return;
    }

    // Crear objeto con los datos del producto
    const nuevoProducto = {
      id: Date.now(), // ID único basado en la fecha actual
      nombre: formData.nombre,
      precio: parseFloat(formData.precio), // Convertir a número decimal
      stock: parseInt(formData.stock), // Convertir a número entero
      imagen: formData.imagen || "/img/default.webp", // Imagen por defecto si no hay URL
      disponible: false // Por defecto, aún no está disponible en el menú
    };

    // Actualizar el array de productos agregando el nuevo
    setProductos([...productos, nuevoProducto]);

    // Limpiar el formulario
    setFormData({ id: "", nombre: "", precio: "", stock: "", imagen: "" });
  };

  // Función para cargar los datos de un producto en el formulario para editarlo
  const handleEditar = (producto) => {
    setEditando(true); // Activar modo edición
    setFormData(producto); // Cargar los datos en formData
  };

  // Función para guardar los cambios después de editar un producto
  const handleGuardarEdicion = (e) => {
    e.preventDefault(); // Evitar recarga

    // Actualizar el array de productos reemplazando el producto editado
    setProductos(
      productos.map((p) => (p.id === formData.id ? formData : p))
    );

    // Salir del modo edición y limpiar formulario
    setEditando(false);
    setFormData({ id: "", nombre: "", precio: "", stock: "", imagen: "" });
  };

  // Función para eliminar un producto
  const handleEliminar = (id) => {
    // Confirmación antes de eliminar
    if (window.confirm("¿Eliminar este producto?")) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar con enlaces */}
      <Navbar
        ClassHeader="w-screen flex flex-col items-center justify-center bg-white text-black py-4 border-b border-gray-300"
        ClassH1="text-3xl font-bold mb-2 text-center"
        TextoH1="MidnightCode"
        ClassUl="flex gap-8 justify-center"
      >
        {/* Enlaces del menú */}
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

      {/* Título de la página */}
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Gestión de Inventario</h1>

      {/* Formulario para agregar o editar productos */}
      <form
        onSubmit={editando ? handleGuardarEdicion : handleAgregar} // Decide si agrega o edita
        className="bg-gray-50 border border-gray-300 rounded-2xl shadow-lg p-8 w-11/12 md:w-3/4 lg:w-2/3 mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Campos del formulario */}
          <InPut type="text" name="nombre" placeholder="Nombre del producto" value={formData.nombre} onChange={handleChange} required />
          <InPut type="number" name="precio" placeholder="Precio de venta" value={formData.precio} onChange={handleChange} required />
          <InPut type="number" name="stock" placeholder="Cantidad disponible" value={formData.stock} onChange={handleChange} required />
          <InPut type="text" name="imagen" placeholder="URL de imagen (opcional)" value={formData.imagen} onChange={handleChange} />
        </div>

        <div className="flex justify-center mt-6">
          {/* Botón que cambia de texto y color según si se está editando */}
          <Button
            texto={editando ? "Guardar cambios" : "Agregar producto"}
            type="submit"
            ClassName={`${editando ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"} text-white px-4 py-2 rounded mr-2 cursor-pointer font-semibold`}
          />
        </div>
      </form>

      {/* Tabla de productos registrados */}
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
              // Mapear todos los productos y mostrar en la tabla
              productos.map((producto) => (
                <tr key={producto.id} className="text-center border-b">
                  <td className="py-2 px-4">{producto.nombre}</td>
                  <td className="py-2 px-4">${producto.precio.toLocaleString()}</td>
                  <td className="py-2 px-4">{producto.stock}</td>
                  <td className="py-2 px-4">
                    <img src={producto.imagen} alt={producto.nombre} className="w-16 h-16 object-cover mx-auto rounded-xl border" />
                  </td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    {/* Botón para editar */}
                    <button onClick={() => handleEditar(producto)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-xl">Editar</button>
                    {/* Botón para eliminar */}
                    <button onClick={() => handleEliminar(producto.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-xl">Eliminar</button>
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
