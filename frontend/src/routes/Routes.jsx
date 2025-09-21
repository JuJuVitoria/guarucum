import Dashboard from "@/app/pages/Dashboard";
import Estoque from "@/app/pages/Estoque";
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
          path="/app/dashboard" 
          element={<Dashboard />}
        />
        <Route 
          path="/app/estoque" 
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