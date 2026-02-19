import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ProtectedRoute = ({ role }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && role !== user.role) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet/>
};

export default ProtectedRoute