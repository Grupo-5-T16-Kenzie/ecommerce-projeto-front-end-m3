import { StyledHeader } from "./styles"

export const Header = () => {

    const token = localStorage.getItem('@token')


    return(
        <StyledHeader>
            <div className="header__logo">
                <img src="./src/assets/logo.png" alt="Logomarca Epic Style" />
                <h1>EPIC STYLE</h1>
            </div>
                {!token ? (
                    <div className="header__menu">
                        <div className="header__menu__left">
                            <button className="header__button__userProfile">
                                <img src="./src/assets/user.png" alt="Perfil do usuário" />
                            </button>
                            <button className="header__button__cart">
                                <img src="./src/assets/cart.png" alt="Carrinho de compras" />
                            </button>
                            <button className="header__button__wishes">
                                <img src="./src/assets/wishes.png" alt="Lista de desejos" />
                            </button>
                        </div>
                        <div className="header__menu__right">
                            <button className="header__button__login">
                                Entrar
                                <img className="header__button__signIn" src="./src/assets/signIn.png" alt="Entrar" />
                            </button>
                        </div>
                    </div>
                    ):(
                    <div className="header__menu">
                        <div className="header__menu__left">
                            <button className="header__button__cart">
                                <img src="./src/assets/cart.png" alt="Carrinho de compras" />
                            </button>
                            <button className="header__button__wishes">
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
    )
}