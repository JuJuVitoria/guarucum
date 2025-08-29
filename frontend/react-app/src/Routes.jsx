import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard />}
        />
        <Route 
          path="/estoque" 
          element={<Estoque />}
        />
        <Route 
          path="*"
          element={<div>Página não encontrada</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes