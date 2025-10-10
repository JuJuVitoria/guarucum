import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/context/useUser";

export default function PrivateRoute() {
  const { currentUser } = useUser();

  if (!currentUser) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}