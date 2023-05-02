import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ResetStyle } from "./styles/reset";
import { BrowserRouter } from "react-router-dom";
import { AuthProductsProvider } from "./providers/productsContext";
import { CartProvider } from "./providers/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <AuthProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
