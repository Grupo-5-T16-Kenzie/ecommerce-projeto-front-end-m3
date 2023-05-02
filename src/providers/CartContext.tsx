import { createContext, useState } from "react";
import {
  ICartContext,
  ICartProducts,
  ICartProviderProps,
} from "../Interfaces/Interfaces";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartModal, setCartModal] = useState(false);
  const [cartProducts, setCartProducts] = useState<ICartProducts[]>([]);

  return (
    <CartContext.Provider
      value={{ cartModal, setCartModal, cartProducts, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
