import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;