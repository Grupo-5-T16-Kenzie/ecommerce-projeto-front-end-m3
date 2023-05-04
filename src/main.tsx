import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ResetStyle } from "./styles/reset";
import { BrowserRouter } from "react-router-dom";
import { AuthProductsProvider } from "./providers/ProductsContext";
import { CartProvider } from "./providers/CartContext";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/globalStyles";
import {UserProvider } from "./providers/UserContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyles />
      <ToastContainer position="bottom-left" autoClose={2100} theme="dark" />

      <UserProvider>
        <AuthProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
