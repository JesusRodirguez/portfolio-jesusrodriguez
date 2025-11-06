import { Routes, Route } from "react-router-dom";
// Modulo Home
import Home from "./componentes/view/ModuloHome/Home";
import Login from "./componentes/view/ModuloHome/Login";
import Registro from "./componentes/view/ModuloHome/Registro";
// Modulo Usuario 
import PaginaPrincipal from "./componentes/view/ModuloUsuario/PaginaPrincipal";
import AboutUs from "./componentes/view/ModuloUsuario/AboutUs";
import Ayuda from "./componentes/view/ModuloUsuario/Ayuda";
import Canciones from "./componentes/view/ModuloUsuario/Canciones";
import Reservas from "./componentes/view/ModuloUsuario/Reservas";
import Menu from "./componentes/view/ModuloUsuario/Menu";
import Eventos from "./componentes/view/ModuloUsuario/Eventos";
// Modulo Administrador
import PaginaPrincipalAdministrador from "./componentes/view/ModuloAdministrador/PaginaPrincipalAdministrador";
import GestionEventos from "./componentes/view/ModuloAdministrador/GestionEventos";
import GestionHorario from "./componentes/view/ModuloAdministrador/GestionHorario";
import GestionReserva from "./componentes/view/ModuloAdministrador/GestionReserva";
import GestionUsuario from "./componentes/view/ModuloAdministrador/GestionUsuario";
import GestionVentas from "./componentes/view/ModuloAdministrador/GestionVentas";
import GestionInventario from "./componentes/view/ModuloAdministrador/GestionInventario";
import GestionCanciones from "./componentes/view/ModuloAdministrador/GestionCanciones";
import GestionMenu from "./componentes/view/ModuloAdministrador/GestionMenu";

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
      </Routes>
    </div>
  );
}

export default App;
