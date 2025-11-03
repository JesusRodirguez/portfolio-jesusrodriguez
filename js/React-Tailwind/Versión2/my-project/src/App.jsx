import { Routes, Route } from "react-router-dom";
import Home from "./componentes/home";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
