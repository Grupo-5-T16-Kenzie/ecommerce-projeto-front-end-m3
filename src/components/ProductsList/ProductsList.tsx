import { useContext } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
<<<<<<< HEAD
import { IProductsContext } from "../Interfaces/Interfaces";
=======
import { IProductsContext } from "../../Interfaces/Interfaces";
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
import { AuthProductsContext } from "../../providers/productsContext";
import { StyledProductsList } from "./styles";

export const ProductsList = () => {
  const { products, category } =
    useContext<IProductsContext>(AuthProductsContext);

<<<<<<< HEAD
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

=======
  return (
    <StyledProductsList>
      <ul className="products__list">
        {category !== "todos"
          ? products
              .filter(
                (product) =>
                  product.category.toLowerCase() === category.toLowerCase()
              )
              .map((filteredProduct) => (
                <ProductCard
                  key={filteredProduct.id}
                  product={filteredProduct}
                />
              ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ul>
    </StyledProductsList>
  );
};
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
