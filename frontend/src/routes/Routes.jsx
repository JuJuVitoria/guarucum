import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/app/pages/Dashboard";
import Estoque from "@/app/pages/Estoque";
import Home from "@/site/pages/Home";
import Error404 from "@/shared/Pages/error404";
import Contato from "@/site/pages/Contato/Contato";
import SobrePFNMs from "@/site/pages/SobrePFNMs/SobrePFNMs";
import PrivateRoute from "./PrivatesRoute";
import Auth from "@/app/pages/Auth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre-pfnms" element={<SobrePFNMs />} />
        <Route path="/auth" element={<Auth />} />

        {/* Rotas privadas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/estoque" element={<Estoque />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}