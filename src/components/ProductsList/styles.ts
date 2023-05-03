import styled from "styled-components";

export const StyledProductsList = styled.div`

    padding: 0 0 0 1rem;
    flex-wrap: nowrap;
    overflow-x: scroll;

.products__list{
    display: flex;
    align-items: center;
    justify-content: left;
    
    gap: 1rem;
    height: 25rem;  
    width: max-content;
}

@media(min-width:1023px){
    justify-content: center;
    height: max-content;
    width: fit-content;
    padding: 0 9rem;

    .products__list{
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        height: max-content;
        
    
    } 

}


`