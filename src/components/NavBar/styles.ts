import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 100%;
  font-family: "Montserrat", sans-serif;

  #category-select {
    display: block;
    font-size: 16px;
    padding: 10px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 5px;
    width: 100%;
    height: 3.5rem;
    background-color: #000000;
    color: #ffffff;
    margin: 1.875rem 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    @media (min-width: 1023px) {
      display: none;
    }
  }

  .option-category {
    padding: 0.625rem;
  }

  #buttons_categories {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 9rem;

    @media (max-width: 1022px) {
      display: none;
    }
  }

  .category-button {
    border: none;
    padding: 10px 20px;
    font-size: 1.125rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #000000;
    color: #ffffff;
  }

  .category-button:hover {
    transform: scale(1.05);
  }
`;
