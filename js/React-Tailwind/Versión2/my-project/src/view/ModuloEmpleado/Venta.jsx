import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/NavBar";
import CustomLink from "../../componentes/CustomLink";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [ventaActual, setVentaActual] = useState({
    producto: "",
    cantidad: "",
    precio: "",
    empleado: "Empleado", // Puedes cambiar esto cuando tengas login
  });

  // Cargar ventas de localStorage
  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("ventas")) || [];
    setVentas(guardadas);
  }, []);

  // Manejar inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVentaActual((prev) => ({ ...prev, [name]: value }));
  };

  // Registrar venta
  const registrarVenta = (e) => {
    e.preventDefault();

    if (!ventaActual.producto || !ventaActual.cantidad || !ventaActual.precio) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevaVenta = {
      ...ventaActual,
      id: Date.now(),
      fecha: new Date().toLocaleDateString(),
    };

    const nuevasVentas = [...ventas, nuevaVenta];
    setVentas(nuevasVentas);
    localStorage.setItem("ventas", JSON.stringify(nuevasVentas));

    setVentaActual({
      producto: "",
      cantidad: "",
      precio: "",
      empleado: "Empleado",
    });

    alert("Venta registrada exitosamente.");
  };

  // Filtrar ventas SOLO por el empleado actual
  const ventasEmpleado = ventas.filter(
    (v) => v.empleado.toLowerCase() === ventaActual.empleado.toLowerCase()
  );

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
        <CustomLink to="/PaginaPrincipalEmpleado" text="Home" />
        <CustomLink to="/Horario" text="Horario" />
        <CustomLink to="/Ventas" text="Ventas" />
        <CustomLink to="/Inventario" text="Inventario" />
      </Navbar>

      <h1 className="text-4xl font-bold mb-8 text-center">Registrar Venta</h1>

      {/* Formulario */}
      <form
        onSubmit={registrarVenta}
        className="max-w-lg mx-auto bg-gray-100 p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="producto"
          placeholder="Producto"
          value={ventaActual.producto}
          onChange={handleChange}
          className="w-full mb-3 border p-2 rounded"
          required
        />

        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={ventaActual.cantidad}
          onChange={handleChange}
          className="w-full mb-3 border p-2 rounded"
          required
        />

        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={ventaActual.precio}
          onChange={handleChange}
          className="w-full mb-3 border p-2 rounded"
          required
        />

        {/* Empleado se puede ocultar si ya tienes login */}
        <input
          type="text"
          name="empleado"
          placeholder="Empleado"
          value={ventaActual.empleado}
          onChange={handleChange}
          className="w-full mb-3 border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 w-full text-white py-2 rounded cursor-pointer"
        >
          Registrar Venta
        </button>
      </form>

      {/* Tabla de ventas del empleado */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Mis Ventas Registradas
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-xl">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3">Producto</th>
                <th className="p-3">Cantidad</th>
                <th className="p-3">Precio</th>
                <th className="p-3">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {ventasEmpleado.length > 0 ? (
                ventasEmpleado.map((v) => (
                  <tr key={v.id} className="border text-center">
                    <td className="p-3">{v.producto}</td>
                    <td className="p-3">{v.cantidad}</td>
                    <td className="p-3">${v.precio}</td>
                    <td className="p-3">{v.fecha}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-4 text-center text-gray-500" colSpan="4">
                    No tienes ventas registradas
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

export default Ventas;
