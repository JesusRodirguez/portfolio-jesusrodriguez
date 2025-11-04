import { Routes, Route } from "react-router-dom";
import Home from "./componentes/view/Home";
import Login from "./componentes/view/Login";
import Registro from "./componentes/view/Registro";

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
