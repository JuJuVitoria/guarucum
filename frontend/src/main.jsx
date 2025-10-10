import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "@/routes/Routes";
import { UserProvider } from "@/context/UserProvider";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </StrictMode>
);