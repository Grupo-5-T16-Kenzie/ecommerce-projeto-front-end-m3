import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ResetStyle } from "./styles/reset";
import { BrowserRouter } from "react-router-dom";
import { AuthProductsProvider } from "./providers/productsContext";
import { CartProvider } from "./providers/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyles />
      <ToastContainer position="bottom-left" autoClose={2100} theme="dark" />
      <AuthProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
