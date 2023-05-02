import { useContext } from "react";
import { StyledWishListModal } from "./styledWishList";
import { CartContext } from "../../providers/CartContext";

export const WishListModal = () => {
  const { setWishListModal } = useContext(CartContext);

  return (
    <StyledWishListModal>
      <div className="wishList__container">
        <header>
          <h3>Lista de favoritos</h3>
          <button onClick={() => setWishListModal(false)}>&#10005;</button>
        </header>
      </div>
    </StyledWishListModal>
  );
};
