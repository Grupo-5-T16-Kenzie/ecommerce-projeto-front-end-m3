import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCartModal } from "./styledCartModal";

export const CartModal = () => {
  const { cartProducts, setCartModal } = useContext(CartContext);

  return (
    <StyledCartModal role="dialog">
      <div className="cartModal__container">
        <header>
          <h3>Carrinho de Compras</h3>
          <button onClick={() => setCartModal(false)}>&#10005;</button>
        </header>
        {cartProducts.length > 0 ? (
          <>
            <div className="notEmptyCart__container">
              {cartProducts.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="item__info">
                      <span className="item__name">
                        {item.name.substring(0, 15)}...
                      </span>
                      <span className="item__price">
                        Preço: R$ {item.price}
                      </span>
                      <div className="itemQuantity__container">
                        <button>&#43;</button>
                        <span className="itemQuantity">
                          {item.quantity}
                        </span>{" "}
                        <button>&#8722;</button>
                      </div>
                    </div>
                    <button>TrashBin</button>
                  </li>
                );
              })}
            </div>
          </>
        ) : (
          <div className="emptyCart__container">
            <h3>Seu carrinho está vazio</h3>
            <span>Adicine itens</span>
          </div>
        )}
      </div>
    </StyledCartModal>
  );
};
