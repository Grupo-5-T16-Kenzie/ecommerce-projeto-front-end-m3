import { useContext } from "react";
import { StyledNavBar } from "./styles";
import { IProductsContext } from "../Interfaces/Interfaces";
import { AuthProductsContext } from "../../providers/productsContext";

export const NavBar = () => {
    const { filterCategories } = useContext<IProductsContext>(AuthProductsContext);
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      filterCategories(event.target.value);
    };
  
    return (
      
      <StyledNavBar>
        <select
          id="category-select"
          className="buttons__category__container"
          onChange={handleCategoryChange}
        >
          <option value="todos">SELECIONE NOSSAS OPÇÕES</option>
          <option value="camisetas">CAMISETAS</option>
          <option value="calças">CALÇAS</option>
          <option value="shorts">SHORTS</option>
          <option value="jaquetas">JAQUETAS</option>
         </select>
    </StyledNavBar>
    )}