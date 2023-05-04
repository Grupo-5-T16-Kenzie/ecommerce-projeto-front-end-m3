import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  background-color: var(--color-secondary);

  .button--login {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    margin-top: 10px;
  }

  .button--login:hover {
    transform: scale(1.01);
    background-color: #343433;
  }

  .login-page__image {
    margin-top: 30px;
    width: 104px;
    height: 146px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .login-page__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .login-page__title {
      font-size: var(--font-size-3);
      font-weight: bold;
    }

    button {
      width: 288px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid var(--color-grey-2);
      font-size: var(--font-size-6);
      font-weight: 400;
    }
  }

  .login-page__redirect {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 70px;

    p {
      font-size: var(--font-size-8);
      color: var(--color-grey-2);
    }

    button {
      background-color: var(--color-grey-0);
      color: var(--color-grey-2);
    }

    button:hover {
      transform: scale(1.01);
      background-color: #343433;
      color: var(--color-secondary);
    }
  }

`;
