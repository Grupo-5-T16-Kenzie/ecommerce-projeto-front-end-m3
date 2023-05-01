import styled from "styled-components";

export const StyledNavBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 100vw;

.buttons__category__container{
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    background-color: #000000;
    color: #FFFFFF;
    margin: 1.875rem 1rem;
}

.category-select{
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
}

@media(min-width:1023px){

    padding: 0 9rem;
    
}
`