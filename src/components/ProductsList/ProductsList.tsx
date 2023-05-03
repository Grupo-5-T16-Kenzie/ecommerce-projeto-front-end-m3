import { useContext } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { IProductsContext } from "../Interfaces/Interfaces";
import { AuthProductsContext } from "../../providers/productsContext";
import { StyledProductsList } from "./styles";

export const ProductsList = () => {
  const { products, category } =
    useContext<IProductsContext>(AuthProductsContext);

    console.log(products)
    console.log(category)
    

    return (
      <StyledProductsList>
        {category !== "todos" 
  ? products.filter(product => product.category.toLowerCase() === category.toLowerCase()).map((filtered) => ( 
      <ProductCard key={filtered.id} product={filtered} />
    )) 
  : products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
}

      </StyledProductsList>
    );



  };

