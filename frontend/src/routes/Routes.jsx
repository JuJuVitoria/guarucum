import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Dashboard from "@/app/pages/Dashboard";
import Estoque from "@/app/pages/Estoque";
import Login from "@/app/pages/Auth";
import Home from "@/site/pages/Home";

import PrivateRoutes from "./PrivatesRoutes";
import PublicRoutes from "./PublicRoutes";
import Error404 from "@/shared/Pages/error404";
import Contato from "@/site/pages/Contato/Contato";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />}/>

        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/estoque" element={<Estoque />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;