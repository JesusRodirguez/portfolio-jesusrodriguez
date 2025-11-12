import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";

const GestionMenu = () => {
  // Estado que guarda todos los productos del inventario
  const [productos, setProductos] = useState([]);

  // useEffect para cargar los productos guardados en localStorage al montar el componente
  useEffect(() => {
    const inventario = JSON.parse(localStorage.getItem("productosInventario")) || [];
    setProductos(inventario); // Actualiza el estado con los productos disponibles
  }, []);

  // Función que alterna si un producto está disponible o no
  const toggleDisponible = (id) => {
    const actualizado = productos.map((p) =>
      p.id === id ? { ...p, disponible: !p.disponible } : p // Cambia el estado 'disponible' del producto
    );
    setProductos(actualizado); // Actualiza el estado de productos
    localStorage.setItem("productosInventario", JSON.stringify(actualizado)); // Guarda los cambios en localStorage
  };

  // Función que actualiza la cantidad pública que se puede vender de cada producto
  const actualizarCantidadPublica = (id, cantidad) => {
    const actualizado = productos.map((p) =>
      p.id === id ? { ...p, cantidadPublica: Number(cantidad) } : p // Actualiza solo la cantidad del producto correspondiente
    );
    setProductos(actualizado); // Actualiza el estado
    localStorage.setItem("productosInventario", JSON.stringify(actualizado)); // Guarda los cambios
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
        {/* Enlaces de navegación */}
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
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Gestión del Menú</h1>

      {/* Tabla con productos */}
      <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto">
        {productos.length === 0 ? (
          // Mensaje si no hay productos
          <p className="text-center text-gray-500 mt-10">No hay productos en el inventario.</p>
        ) : (
          <table className="w-full border border-gray-300 rounded-xl shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Producto</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Precio</th>
                <th className="py-2 px-4 border-b">Cant. pública</th>
                <th className="py-2 px-4 border-b">Disponible</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id} className="text-center border-b">
                  <td className="py-2 px-4">{p.nombre}</td>
                  <td className="py-2 px-4">{p.stock}</td>
                  <td className="py-2 px-4">${p.precio.toLocaleString()}</td>
                  <td className="py-2 px-4">
                    {/* Input para definir la cantidad pública de venta */}
                    <input
                      type="number"
                      min="0" // No permite números negativos
                      max={p.stock} // No permite superar el stock
                      value={p.cantidadPublica || 0} // Valor actual
                      onChange={(e) => {
                        let valor = Number(e.target.value);
                        if (valor > p.stock) valor = p.stock; // Limita al stock disponible
                        if (valor < 0) valor = 0; // Limita a mínimo 0
                        actualizarCantidadPublica(p.id, valor); // Actualiza el estado
                      }}
                      className="w-20 text-center border border-gray-300 rounded-lg p-1"
                    />
                  </td>
                  <td className="py-2 px-4">
                    {/* Botón para alternar disponibilidad */}
                    <button
                      onClick={() => toggleDisponible(p.id)}
                      className={`${
                        p.disponible
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-400 hover:bg-gray-500"
                      } text-white px-4 py-1 rounded-xl`}
                    >
                      {p.disponible ? "En venta" : "No disponible"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GestionMenu;
