import { createContext, useContext, useState } from "react";
import {
  ICartContext,
  ICartProducts,
  ICartProviderProps,
} from "../Interfaces/Interfaces";
import { AuthProductsContext } from "./productsContext";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const { products } = useContext(AuthProductsContext);
  const [cartModal, setCartModal] = useState(false);
  const [cartProducts, setCartProducts] = useState<ICartProducts[]>([]);

  const handleAddItemToCart = (id: number) => {
    const productExists = cartProducts.find((item) => item.id === id);

    if (productExists) {
      const foundProducts = cartProducts.map((product) => {
        if (productExists.id === product.id) {
          product.quantity = product.quantity + 1;
          product.finalPrice = product.price * product.quantity;
        }

        return product;
      });
      setCartProducts(foundProducts);
      console.log(cartProducts);
    } else {
      const foundProduct = products.find((product) => product.id === id);

      const productWithQuantity = {
        ...foundProduct,
        quantity: 1,
        finalPrice: 0,
      };

      setCartProducts([
        ...cartProducts,
        productWithQuantity,
      ] as ICartProducts[]);
      console.log(cartProducts);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        cartProducts,
        setCartProducts,
        handleAddItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
