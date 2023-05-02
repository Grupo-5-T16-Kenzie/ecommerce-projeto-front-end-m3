import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCartModal } from "./styledCartModal";
import { CartTotal } from "./CartTotal/CartTotal";

export const CartModal = () => {
  const {
    cartProducts,
    setCartModal,
    addItemQuantity,
    removeItemQuantity,
    removeItemFromCart,
  } = useContext(CartContext);

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
                        <button onClick={() => addItemQuantity(item.id)}>
                          &#43;
                        </button>
                        <span className="itemQuantity">{item.quantity}</span>{" "}
                        <button onClick={() => removeItemQuantity(item.id)}>
                          &#8722;
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeItemFromCart(item.id)}>
                      TrashBin
                    </button>
                  </li>
                );
              })}
            </div>
            <CartTotal />
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
