import { useContext } from "react";
import { StyledWishListModal } from "./styledWishList";
import { CartContext } from "../../providers/CartContext";

export const WishListModal = () => {
  const { setWishListModal, wishListProducts } = useContext(CartContext);

  return (
    <StyledWishListModal>
      <div className="wishList__container">
        <header>
          <h3>Lista de favoritos</h3>
          <button onClick={() => setWishListModal(false)}>&#10005;</button>
        </header>
        <div className="emptyWishList__container">
          <p>Sua lista de favoritos está vazia</p>
          <span>Adicione itens</span>
        </div>
        <div className="wishList__container">
          {wishListProducts.map((item) => {
            return (
              <li key={item.id}>
                <img className="product__image" src={item.img} alt="" />
              </li>
            );
          })}
        </div>
      </div>
    </StyledWishListModal>
  );
};
