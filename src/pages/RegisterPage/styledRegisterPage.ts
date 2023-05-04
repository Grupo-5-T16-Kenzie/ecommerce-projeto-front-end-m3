import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  background-color: var(--color-secondary);

  .login-page__image {
    margin-top: 30px;
    width: 104px;
    height: 146px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .register-page__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .register-page__form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: 30px;
      margin-bottom: 10px;

      .login-page__title {
        font-size: var(--font-size-3);
        font-weight: bold;
      }

      .login-page__redirect {
        font-size: var(--font-size-7);
        color: (--color-grey-2);
      }
    }

    button {
      width: 288px;
      height: 40px;
      margin-top: 10px;
      border-radius: 5px;
      border: 1px solid var(--color-grey-2);
      font-size: var(--font-size-6);
      font-weight: 400;
      background-color: var(--color-primary);
      color: var(--color-secondary);
      margin-top: 10px;
    }

    button:hover {
      transform: scale(1.01);
      background-color: #343433;
    }
  }
`;
