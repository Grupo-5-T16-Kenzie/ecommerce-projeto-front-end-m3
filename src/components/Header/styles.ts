import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 6.25rem;
  gap: 0.625rem;
  padding: 0 1rem;
  font-family: "Montserrat", sans-serif;
  background-color: var(--color-primary);
  color: var(--color-secondary);

  .header__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    gap: 10px;
    min-height: 50px;

    h1 {
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
      width: max-content;
    }

    img {
      max-height: 50px;
    }
  }

  .header__menu {
    display: flex;
    align-items: center;
    min-height: 50px;
    justify-content: space-between;
    padding-inline: 15px;
    padding-bottom: 10px;
    width: 100%;
  }

  .header__button__cart,
  .header__button__wishes,
  .header__button__userProfile,
  .header__button__signIn {
    width: 37px;
    height: 32px;
  }

  .header__button__cart:hover,
  .header__button__wishes:hover,
  .header__button__userProfile:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .header__button__login:hover {
    transform: scale(1.05);
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .header__button__login {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    height: 2.5rem;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    font-size: var(--font-size-4);
    font-weight: 500;
    line-height: 24px;
    border: none;
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .header__menu__left {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.625rem;
  }

  .header__button__userProfile{
    height: auto;
  }
  
  .header__button__leave{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    height: 38px;
    padding: 0.35rem;
    border-radius: var(--radius-default);
    margin-top: 0.rem;
  }

  .header__menu__right{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1.3rem;
  }

  @media (min-width: 1023px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 9rem;

    .header__logo {
      justify-content: left;
    }

    .header__menu {
      justify-content: right;
      padding-bottom: 0px;
      gap: 2rem;
      padding-inline: none;
    }

    .header__menu__left,
    .header__menu__right {
      width: max-content;
      justify-content: center;
      align-items: center;
    }

    .header__button__login {
      border: 1px solid var(--color-secondary);
      border-radius: var(--radius-default);
      width: 9rem;
    }

    .header__button__signIn,
    .header__button__cart,
    .header__button__wishes,
    .header__button__userProfile {
      width: 35px;
      height: 35px;
    }
    

  }
`;
