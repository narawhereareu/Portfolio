import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Home />} />
      <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold">404 - Page Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;