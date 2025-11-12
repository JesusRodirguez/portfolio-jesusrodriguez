import { Routes, Route } from "react-router-dom";
// Modulo Home
import Home from "./view/ModuloHome/Home";
import Login from "./view/ModuloHome/Login";
import Registro from "./view/ModuloHome/Registro";
// Modulo Usuario 
import PaginaPrincipal from "./view/ModuloUsuario/PaginaPrincipal";
import AboutUs from "./view/ModuloUsuario/AboutUs";
import Ayuda from "./view/ModuloUsuario/Ayuda";
import Canciones from "./view/ModuloUsuario/Canciones";
import Reservas from "./view/ModuloUsuario/Reservas";
import Menu from "./view/ModuloUsuario/Menu";
import Eventos from "./view/ModuloUsuario/Eventos";
// Modulo Administrador
import PaginaPrincipalAdministrador from "./view/ModuloAdministrador/PaginaPrincipalAdministrador";
import GestionEventos from "./view/ModuloAdministrador/GestionEventos";
import GestionHorario from "./view/ModuloAdministrador/GestionHorario";
import GestionReserva from "./view/ModuloAdministrador/GestionReserva";
import GestionUsuario from "./view/ModuloAdministrador/GestionUsuario";
import GestionVentas from "./view/ModuloAdministrador/GestionVentas";
import GestionInventario from "./view/ModuloAdministrador/GestionInventario";
import GestionCanciones from "./view/ModuloAdministrador/GestionCanciones";
import GestionMenu from "./view/ModuloAdministrador/GestionMenu";
// modulo Empleado
import PaginaPrincipalEmpleado from "./view/ModuloEmpleado/PaginaPrincipalEmpleado";
import Horario from "./view/ModuloEmpleado/Horario";
import Inventario from "./view/ModuloEmpleado/Inventario";
import Ventas from "./view/ModuloEmpleado/Venta";

function App() {
  return (
    <div>
      <Routes>
        {/* Modulo Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Modulo Usuario */}
        <Route path="/pagina-principal" element={<PaginaPrincipal />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cancion" element={<Canciones />}/>
        <Route path="/Ayuda" element={<Ayuda />} />

        {/* Modulo Administrador */}
        <Route path="/PaginaPrincipalAdministrador" element={<PaginaPrincipalAdministrador />} />
        <Route path="/GestionEventos" element={<GestionEventos />} />
        <Route path="/GestionHorario" element={<GestionHorario />} />
        <Route path="/GestionReserva" element={<GestionReserva />} />
        <Route path="/GestionUsuario" element={<GestionUsuario />} />
        <Route path="/GestionVentas" element={<GestionVentas />} />
        <Route path="/GestionInventario" element={<GestionInventario />} />
        <Route path="/GestionCanciones" element={<GestionCanciones />} />
        <Route path="/GestionMenu" element={<GestionMenu />} />

        {/* Modulo Empleado */}
        <Route path="/PaginaPrincipalEmpleado" element={<PaginaPrincipalEmpleado />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/Ventas" element={<Ventas />} />
      </Routes>
    </div>
  );
}

export default App;
