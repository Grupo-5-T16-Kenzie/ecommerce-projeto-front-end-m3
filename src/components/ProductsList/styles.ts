import styled from "styled-components";

<<<<<<< HEAD
export const StyledProductsList = styled.ul`

display: flex;
align-items: center;
justify-content: left;
overflow-x: scroll;
gap: 1rem;
width: 100%;
margin-left: 1rem;
height: max-content;
`
=======
export const StyledProductsList = styled.div`
  padding: 0 0 0 1rem;
  flex-wrap: nowrap;
  overflow-x: scroll;

  .products__list {
    display: flex;
    align-items: center;
    justify-content: left;

    gap: 1rem;
    height: 25rem;
    width: max-content;
  }

  @media (min-width: 1023px) {
    margin: 0 auto;
    max-height: 810px;
    padding-inline: 70px;
    padding-block: 20px;

    .products__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      column-gap: 40px;
      align-items: center;
      overflow-y: auto;
      height: max-content;
    }
  }

  @media (min-width: 1140px) {
    .products__list {
      column-gap: 100px;
    }
  }
`;
>>>>>>> 6dec8665599d48d3fef1a60178dc4bd972939222
