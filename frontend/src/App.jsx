import React from "react";
import AppRoutes from "@/routes/Routes";
import GlobalProviders from "./context/GlobalProviders";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/style/main.scss"

export default function App() {
  return (
    <GlobalProviders>
      <AppRoutes />
    </GlobalProviders>
  );
}