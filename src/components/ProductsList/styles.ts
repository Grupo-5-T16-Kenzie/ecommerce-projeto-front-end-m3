import styled from "styled-components";

export const StyledProductsList = styled.div`
padding: 0 0 0 1rem;


.products__list{
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 1rem;
    height: 25rem;
    width: max-content;
}



@media(min-width:1023px){
    
    justify-content: center;
    height: max-content;
    padding: 0 9rem;
}

.products__list{
    /* width: 60rem;  //verificar com os meninos
    flex-wrap: wrap; */
    justify-content: space-between;
    overflow: hidden;
    height: max-content;
    margin: auto;
} 

`