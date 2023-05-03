import { createContext, useEffect, useState } from "react";
import {
  IProduct,
  IProductsContext,
  IProductsProviderProps,
<<<<<<< HEAD
} from "../components/Interfaces/Interfaces";
import { toast } from "react-toastify";
=======
} from "../Interfaces/Interfaces";
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
import { api } from "../services/api";

export const AuthProductsContext = createContext({} as IProductsContext);

export const AuthProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<string>("todos");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("products");
<<<<<<< HEAD
        setProducts(response.data.map((product: { category: string; }) => ({ ...product, category: product.category.toLowerCase() })));

      } catch (error) {
        toast.error(
          "Não foi possível carregar a lista de produtos. Tente novamente!"
        );
=======
        setProducts(
          response.data.map((product: { category: string }) => ({
            ...product,
            category: product.category.toLowerCase(),
          }))
        );
      } catch (error) {
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const filterCategories = (selectedCategory: string) => {
<<<<<<< HEAD
    console.log("Selected category: ", selectedCategory);
    setCategory(selectedCategory);
  }
  

  return (
    <AuthProductsContext.Provider
      value={{ products, setProducts, category, setCategory , filterCategories}}
=======
    setCategory(selectedCategory);
  };

  return (
    <AuthProductsContext.Provider
      value={{ products, setProducts, category, setCategory, filterCategories }}
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
    >
      {children}
    </AuthProductsContext.Provider>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
