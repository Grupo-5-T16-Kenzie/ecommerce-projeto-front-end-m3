import { useContext } from "react";
import { StyledHeader } from "./styles";
import { CartContext } from "../../providers/CartContext";
import LogoNoBackGround from "../../assets/CARTOLA-removebg-preview.png";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { setCartModal, setWishListModal } = useContext(CartContext);
  const { setPatchModal} = useContext(UserContext);

  const token = localStorage.getItem("@epicStyle:token") || "";

  return (
    <StyledHeader>
      <div className="header__logo">
        <img src={LogoNoBackGround} alt="Logomarca Epic Style" />
        <h1>EPIC STYLE</h1>
      </div>
      {!token ? (
        <div className="header__menu">
          <div className="header__menu__left">
            <button className="header__button__userProfile"  onClick={()=>setPatchModal(true) }>
              <img src="./src/assets/user.png" alt="Perfil do usuário" />
            </button>
            <button
              onClick={() => setCartModal(true)}
              className="header__button__cart"
            >
              <img src="./src/assets/cart.png" alt="Carrinho de compras" />
            </button>
            <button
              onClick={() => setWishListModal(true)}
              className="header__button__wishes"
            >
              <img src="./src/assets/wishes.png" alt="Lista de desejos" />
            </button>
          </div>
          <div className="header__menu__right">
            <button className="header__button__login">
              Entrar
              <img
                className="header__button__signIn"
                src="./src/assets/signIn.png"
                alt="Entrar"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="header__menu">
          <div className="header__menu__left">
            <button
              onClick={() => setCartModal(true)}
              className="header__button__cart"
            >
              <img src="./src/assets/cart.png" alt="Carrinho de compras" />
            </button>
            <button
              onClick={() => setWishListModal(true)}
              className="header__button__wishes"
            >
              <img src="./src/assets/wishes.png" alt="Lista de desejos" />
            </button>
          </div>
          <div className="header__menu__right">
            <button className="header__button__userProfile">
              <img src="./src/assets/user.png" alt="Perfil do usuário" />
            </button>
            <button className="header__button__leave">
              <img src="./src/assets/leave.png" alt="Entrar" />
            </button>
          </div>
        </div>
      )}
    </StyledHeader>
  );
};
