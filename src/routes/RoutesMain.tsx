import { Route, Routes } from "react-router-dom";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Página inicial</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="/products" element={<h1>Products</h1>} />
      <Route path="/error" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
