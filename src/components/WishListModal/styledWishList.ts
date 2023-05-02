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
`;
