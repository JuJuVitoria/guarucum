//app
import { Dashboard } from "@/pages/app/Dashboard/Dashboard";
import { Estoque } from "@/pages/app/Estoque/Estoque";
import { MinhasVendas } from "@/pages/app/MinhasVendas/MinhasVendas";
//site
import { Home } from "@/pages/site/Home/Home";
import { SobrePFNMs } from "@/pages/site/SobrePFNMs/SobrePFNMs";
import { Contato } from "@/pages/site/Contato/Contato";
//error
import { Error404 } from "@/pages/error/error404";
//autenticacao
import { Auth } from "@/pages/app/Auth/Auth";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivatesRoute";
import { Informativo } from "@/pages/app/Informativo/Informativo";

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
          <Route path="/app/informativo" element={<Informativo />} />
          <Route path="/app/estoque" element={<Estoque />} />
          <Route path="/app/minhas-vendas" element={<MinhasVendas />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}