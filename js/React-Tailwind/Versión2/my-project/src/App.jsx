import { Routes, Route } from "react-router-dom";
import Home from "./componentes/view/Home";
import Login from "./componentes/view/Login";
import Registro from "./componentes/view/Registro";
import PaginaPrincipal from "./componentes/view/ModuloUsuario/PaginaPrincipal";
import AboutUs from "./componentes/view/ModuloUsuario/AboutUs";
import Ayuda from "./componentes/view/ModuloUsuario/Ayuda";
import Canciones from "./componentes/view/ModuloUsuario/Canciones";
import Reservas from "./componentes/view/ModuloUsuario/Reservas";
import Menu from "./componentes/view/ModuloUsuario/Menu";
import Eventos from "./componentes/view/ModuloUsuario/Eventos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/pagina-principal" element={<PaginaPrincipal />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cancion" element={<Canciones />}/>
        <Route path="/Ayuda" element={<Ayuda />} />
      </Routes>
    </div>
  );
}

export default App;
