import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Página inicial</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/error" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
