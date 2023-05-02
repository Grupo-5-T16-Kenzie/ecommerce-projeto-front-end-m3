import { createContext, useContext, useState } from "react";
import {
  ICartContext,
  ICartProducts,
  ICartProviderProps,
} from "../Interfaces/Interfaces";
import { AuthProductsContext } from "./productsContext";
import { toast } from "react-toastify";

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
      toast.success("Item adicionado ao carrinho");
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
