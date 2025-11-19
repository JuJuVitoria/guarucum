import { useUser } from "@/context/userContext";
import { Error403 } from "@/pages/error/error403";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser, isLoading } = useUser();

  if (isLoading) {
    return <div>Carregando autenticação...</div>;
  }

  if (!currentUser) {
    return <Error403 />;
  }

  return <Outlet />;
}