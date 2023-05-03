import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 6.25rem;
gap: 0.625rem;
box-shadow: 0px 4px 4px 0px #00000040;
padding: 0 1rem;    

.header__logo{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    
    h1{
        font-family: 'Cinzel', serif;
        font-size: 30px;
        font-weight: 700;
        line-height: 40px;
    }
}

.header__menu{
    display: flex;
    align-items: center;
    min-height: 50px;
    justify-content: space-between;
    width: 100%;
}

.header__button__signIn{
    width: 22px;
    height: 20px;
}

.header__button__cart{
    width: 37px;
    height: 32px;
}

.header__button__wishes{
    width: 34.5px;
    height: 30px;
}

.header__button__userProfile{
    width: 31.67px;
    height: 28.33px;
}

button{
    background: transparent;
    border: none;
}

.header__button__login{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8rem;
    height: 2.5rem;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
}

.header__menu__left{
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.625rem
}

@media(min-width:1023px){
    flex-direction: row;
    justify-content: space-between;
    padding: 0 9rem;
    
    
    .header__logo{
        justify-content: left;
    }
    
    .header__menu{
        justify-content: right;
        gap: 2rem;
    }
    
    .header__button__signIn, .header__button__cart, .header__button__wishes, .header__button__userProfile{
        width: 35px;
        height: 35px;
    }

}


`