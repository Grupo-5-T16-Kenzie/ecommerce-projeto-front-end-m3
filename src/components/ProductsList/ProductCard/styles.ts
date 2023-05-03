import styled from "styled-components";

export const StyledProductcard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  min-height: max-content;
  width: 17rem;
  font-family: "Montserrat", sans-serif;

  .product__divImg__card {
    width: 100%;
    height: 10rem;
  }

  .product__img__card {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product__imgLike__card {
    height: 30px;
    width: 30px;
    position: relative;
    bottom: 2.8rem;
    left: 14.3rem;
  }

  .product__imgLike__card:hover {
    transform: scale(1.12);
    cursor: pointer;
  }

  .product__divInfo__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

  .product__name__card {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    min-height: 3rem;
    margin-top: 1rem;
  }

  .product__divCategoryPrice__card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
  }

  .product__category__card {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  }

  .product__price__card {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  .product__button__addToCart {
    width: 100%;
    height: 3rem;
    background-color: #000000;
    color: #ffffff;
    margin-bottom: 1rem;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  .product__button__addToCart:hover {
    transform: scale(1.04);
    cursor: pointer;
  }

  @media (min-width: 1023px) {
    width: 18.75rem;
  }

  .product__divImg__card {
    width: 100%;
  }

  .product__img__card {
    width: 100%;
    height: 10.625rem;
  }
`;
