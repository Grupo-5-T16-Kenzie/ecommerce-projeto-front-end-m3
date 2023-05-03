import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { HomePage } from "../pages/Home/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
