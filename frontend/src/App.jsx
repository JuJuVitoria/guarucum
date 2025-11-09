import React from "react";
import AppRoutes from "@/routes/Routes";
import { UserProvider } from "@/context/userContext";

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}