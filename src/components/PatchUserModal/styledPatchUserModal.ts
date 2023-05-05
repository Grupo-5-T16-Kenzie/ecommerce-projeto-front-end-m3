import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const StyledPatchUserModal = styled.div`
  background-color: rgba(59, 58, 58, 0.8);
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  position: absolute;
  color: white;
  z-index: 1;

  .patchModal__container {
    animation: ${AnimationFadeIn} 0.7s;
    background-color: white;
    width: 90%;
    border-radius: 5px;
    max-width: 550px;
  }

  header {
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    font-weight: 600;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
      drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    border-radius: 2px 2px 0 0;
  }

  header button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
  }

  header button:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
    cursor: pointer;
  }

  form {
    background: #d9d9d9;
    padding: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    button {
      background-color: black;
      color: #fff;
      border-radius: 5px;
      max-width: 289px;
      min-width: 289px;
      padding: 15px 0px;
      border: none;
      width: 95%;
      transition: transform 0.2s;
      font-size: var(--font-size-4);
    }

    button:hover {
      transform: scale(1.02);
      background-color: #343433;
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    .patchModal__container {
      max-width: 550px;
    }

    form {
      button {
        max-width: 450px;
        height: 60px;
      }
    }
  }
`;
