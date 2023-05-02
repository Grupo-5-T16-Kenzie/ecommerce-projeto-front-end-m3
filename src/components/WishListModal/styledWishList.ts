import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const StyledWishListModal = styled.div`
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

  .wishList__container {
    animation: ${AnimationFadeIn} 0.7s;
    background-color: white;
    width: 90%;
    border-radius: 5px;
    max-width: 550px;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
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

  .emptyWishList__container {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    gap: 10px;
  }

  .emptyWishList__container p {
    font-size: 1.375rem;
  }

  .emptyWishList__container span {
    color: #605f5f;
  }
`;
