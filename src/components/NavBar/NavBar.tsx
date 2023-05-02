import { useContext } from "react";
import { StyledNavBar } from "./styles";
import { IProductsContext } from "../../Interfaces/Interfaces";
import { AuthProductsContext } from "../../providers/productsContext";

export const NavBar = () => {
    const { filterCategories } = useContext<IProductsContext>(AuthProductsContext);
  
    const handleCategorySelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      filterCategories(event.target.value);
    };

    const handleCategoryButtonChange = (selectedCategory: string) => {
      filterCategories(selectedCategory);
    }
  
    return (
      
      <StyledNavBar>
        <select
          id="category-select"
          onChange={handleCategorySelectChange}
          // style={{ display: "none" }}
        >
          <option className="option-category" value="todos" >SELECIONE NOSSAS OPÇÕES</option>
          <option className="option-category" value="camisetas" >CAMISETAS</option>
          <option className="option-category" value="calças" >CALÇAS</option>
          <option className="option-category" value="acessorios">ACESSÓRIOS</option>
          <option className="option-category" value="jaquetas" >JAQUETAS</option>
         </select>
         <div 
            id="buttons_categories"
            // style={{ display: "block" }}
            >
          <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("todos")}
          value="todos"
        >
          TODOS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("camisetas")}
          value="camisetas"
        >
          CAMISETAS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("calças")}
          value="calças"
        >
          CALÇAS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("acessorios")}
          value="acessorios"
        >
          ACESSÓRIOS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("jaquetas")}
          value="jaquetas"
        >
          JAQUETAS
        </button>
         </div>
    </StyledNavBar>
    )
    }