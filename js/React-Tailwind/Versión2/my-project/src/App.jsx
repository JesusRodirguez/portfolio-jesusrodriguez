import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./componentes/Login";
import "./index.css";
import Home from "./componentes/home";

function App() {
  const location = useLocation();

  // si estás en /login, no se muestra el Home (NavBar incluida)
  const hideHome = location.pathname === "/login";

  return (
    <div>
      {!hideHome && <Home />} {/* muestra Home solo si no estás en /login */}

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
