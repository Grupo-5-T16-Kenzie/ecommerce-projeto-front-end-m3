import { IProductCardProps } from "../../../Interfaces/Interfaces";
import { StyledProductcard } from "./styles";

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <StyledProductcard>
      <div className="product__divImg__card">
        <img
          className="product__img__card"
          src={product.img}
          alt={product.name}
        />
        <img
          className="product__imgLike__card"
          src="./src/assets/like.png"
          alt="like"
        />
      </div>
      <div className="product__divInfo__card">
        <h2 className="product__name__card">{product.name.toUpperCase()}</h2>
        <div className="product__divCategoryPrice__card">
          <h4 className="product__category__card">
            {product.category.toUpperCase()}
          </h4>
          <span className="product__price__card">R$ {product.price}</span>
        </div>
        <button className="product__button__addToCart">
          ADICIONE AO CARRINHO
        </button>
      </div>
    </StyledProductcard>
  );
};
