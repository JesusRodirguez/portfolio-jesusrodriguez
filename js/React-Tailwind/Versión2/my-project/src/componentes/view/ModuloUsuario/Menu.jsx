import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../NavBar";
import CustomLink from "../../CustomLink";
import { ShoppingCart, X } from "lucide-react";

const Menu = () => {
  const [licores, setLicores] = useState([
    { id: 1, nombre: "Whisky Midnight Gold", precio: 180000, stock: 12, imagen: "/img/licor1.webp" },
    { id: 2, nombre: "Ron Oscuro Eclipse", precio: 95000, stock: 20, imagen: "/img/licor2.webp" },
    { id: 3, nombre: "Vodka Polar Ice", precio: 80000, stock: 15, imagen: "/img/licor3.webp" },
    { id: 4, nombre: "Gin Cítrico Aurora", precio: 120000, stock: 8, imagen: "/img/licor4.webp" },
  ]);

  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(null);
  const timerRef = useRef(null);

  // Agregar producto al carrito
  const agregarAlCarrito = (licor) => {
    if (licor.stock <= 0) {
      alert("No hay más stock disponible de este producto.");
      return;
    }

    const existe = carrito.find((item) => item.id === licor.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === licor.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...licor, cantidad: 1 }]);
      if (!timerRef.current) iniciarTemporizador();
    }

    // Restar stock
    setLicores(
      licores.map((item) =>
        item.id === licor.id ? { ...item, stock: item.stock - 1 } : item
      )
    );
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    const producto = carrito.find((item) => item.id === id);
    if (!producto) return;

    // Regresar stock
    setLicores(
      licores.map((item) =>
        item.id === id
          ? { ...item, stock: item.stock + producto.cantidad }
          : item
      )
    );

    setCarrito(carrito.filter((item) => item.id !== id));
  };

  // Iniciar el temporizador de 15 minutos (900 segundos)
  const iniciarTemporizador = () => {
    setTiempoRestante(900); // 15 minutos en segundos

    timerRef.current = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          liberarCarrito();
          clearInterval(timerRef.current);
          timerRef.current = null;
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Liberar el carrito y restaurar stock
  const liberarCarrito = () => {
    if (carrito.length > 0) {
      setLicores((prev) =>
        prev.map((licor) => {
          const productoCarrito = carrito.find((p) => p.id === licor.id);
          return productoCarrito
            ? { ...licor, stock: licor.stock + productoCarrito.cantidad }
            : licor;
        })
      );
      setCarrito([]);
      alert("Tiempo expirado. Los productos fueron liberados.");
    }
  };

  // Mostrar el tiempo en formato mm:ss
  const formatearTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${minutos.toString().padStart(2, "0")}:${seg
      .toString()
      .padStart(2, "0")}`;
  };

  // Limpiar intervalo al salir del componente
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen relative">
      {/* Componenete Navbar */}
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
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">Menú de Licores</h1>

      {/* Contenedor de productos */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 pb-20">
        {licores.map((licor) => (
          <div
            key={licor.id}
            className="bg-gray-100 border border-gray-300 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={licor.imagen}
              alt={licor.nombre}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{licor.nombre}</h3>
            <p className="text-gray-700">Precio: ${licor.precio.toLocaleString()}</p>
            <p className="text-gray-600 mb-4">Stock: {licor.stock}</p>
            <button
              onClick={() => agregarAlCarrito(licor)}
              className="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Botón del carrito (verde) */}
      <button
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
        className="fixed top-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <ShoppingCart size={28} />
        {carrito.length > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {carrito.length}
          </span>
        )}
      </button>

      {/* Panel del carrito */}
      {mostrarCarrito && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl border-l border-gray-300 p-6 overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Tu carrito</h2>
            <button
              onClick={() => setMostrarCarrito(false)}
              className="text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>
          </div>

          {carrito.length === 0 ? (
            <p className="text-gray-600 text-center mt-20">
              No hay productos en el carrito.
            </p>
          ) : (
            <>
              {tiempoRestante !== null && (
                <p className="text-center font-semibold text-red-600 mb-4">
                  Tiempo restante para pagar: {formatearTiempo(tiempoRestante)}
                </p>
              )}

              {carrito.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col bg-gray-100 p-3 rounded-xl mb-4 shadow-sm border"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.nombre}</h3>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Quitar
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">Cantidad: {item.cantidad}</p>
                  <p className="text-sm text-gray-700">
                    Subtotal: ${(item.precio * item.cantidad).toLocaleString()}
                  </p>
                </div>
              ))}

              <hr className="my-4" />
              <p className="text-lg font-semibold text-center">
                Total:{" "}
                {carrito
                  .reduce((acc, item) => acc + item.precio * item.cantidad, 0)
                  .toLocaleString()}
              </p>

              <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition-all">
                Continuar compra
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
