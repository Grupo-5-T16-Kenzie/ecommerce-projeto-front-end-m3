import { createContext, useEffect, useState } from "react";
import {
  IProduct,
  IProductsContext,
  IProductsProviderProps,
} from "../Interfaces/Interfaces";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthProductsContext = createContext({} as IProductsContext);

export const AuthProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<string>("todos");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data.map((product: { category: string; }) => ({ ...product, category: product.category.toLowerCase() })));
        toast.success('Lista de produtos carregada com sucesso. Boas compras!')
      } catch (error) {
        toast.error(
          "Não foi possível carregar a lista de produtos. Tente novamente!"
        );
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const filterCategories = (selectedCategory: string) => {
    console.log("Selected category: ", selectedCategory);
    setCategory(selectedCategory);
  }


  
  return (
    <AuthProductsContext.Provider
      value={{ products, setProducts, category, setCategory, filterCategories }}
    >
      {children}
    </AuthProductsContext.Provider>
  );
}