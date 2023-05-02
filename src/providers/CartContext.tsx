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

  const removeItemFromCart = (id: number) => {
    const newList = cartProducts.filter((item) => item.id !== id);
    setCartProducts(newList);
  };

  const addItemQuantity = (id: number) => {
    if (cartProducts.length > 0) {
      const foundItem = cartProducts.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1;
        foundItem.finalPrice = foundItem.price * foundItem.quantity;
      }

      setCartProducts([...cartProducts]);
    }

    return cartProducts;
  };

  const removeItemQuantity = (id: number) => {
    if (cartProducts.length > 0) {
      const foundItem = cartProducts.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity = foundItem.quantity - 1;
        foundItem.finalPrice = foundItem.price * foundItem.quantity;
      }

      setCartProducts([...cartProducts]);

      if (foundItem?.quantity === 0) {
        removeItemFromCart(foundItem.id);
      }
    }

    return cartProducts;
  };

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        cartProducts,
        setCartProducts,
        handleAddItemToCart,
        removeItemFromCart,
        addItemQuantity,
        removeItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
