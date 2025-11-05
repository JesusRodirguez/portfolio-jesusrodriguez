import { Routes, Route } from "react-router-dom";
import Home from "./componentes/view/Home";
import Login from "./componentes/view/Login";
import Registro from "./componentes/view/Registro";
import PaginaPrincipal from "./componentes/view/PaginaPrincipal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/pagina-principal" element={<PaginaPrincipal />} />
      </Routes>
    </div>
  );
}

export default App;
