import { Context, useContext } from "react";
import { IPachUserContext } from "../../Interfaces/Interfaces";
import { PatchContext } from "../../providers/modalPatchContext";
import { StyledPatchUserModal } from "./styledPatchUserModal"


export const PatchUserModal = () => {
  const { setPatchModal} = useContext(PatchContext);

return(

<StyledPatchUserModal>
 <div className="patchModal__container">
       <header>
          <h3>ATUALIZAR DADOS</h3>
          <button onClick={() =>setPatchModal(false)}>&#10005;</button>
        </header>
   
         <div className="form">
        <p>Nome</p>
        <input type="text"  />
        <p>Foto</p>
        <input type="text"  />
        <p>Email</p>
        <input type="email"  />
        <button>ATUALIZAR</button>
        </div>
     
        </div>
</StyledPatchUserModal>

)

}

