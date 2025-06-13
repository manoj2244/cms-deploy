import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PostForm from "../pages/PostForm";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* Redirect root to /admin-login */}
      <Route path="/" element={<Navigate to="/admin-login" replace />} />

      {/* Admin Login */}
      <Route path="/admin-login" element={<Login />} />

      {/* Admin Panel (Protected) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create" element={<PostForm />} />
        <Route path="edit/:id" element={<PostForm />} />
        
      </Route>
    </Routes>
  );
};

export default AppRouter;
