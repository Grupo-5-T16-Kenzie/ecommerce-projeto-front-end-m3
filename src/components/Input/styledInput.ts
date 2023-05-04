import styled from "styled-components";

export const StyledInput = styled.div`
  width: 288px;
  height: 80px;

  display: flex;
  flex-direction: column;

  label {
    height: 20px;
    font-size: var(--font-size-6);
    color: var(--color-primary);
  }

  input {
    width: 280px;
    height: 40px;
    padding-left: 5px;
    border: 1px solid var(--color-grey-2);
    border-radius: 5px;
    font-size: var(--font-size-8);
    color: var(--color-grey-2);
    background-color: var(--color-grey-0);

  }

  p {
    font-size: var(--font-size-6);
    color: var(--color-negative);
  }
`;
