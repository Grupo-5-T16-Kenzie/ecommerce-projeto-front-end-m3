import { Context, useContext } from "react";
import { StyledPatchUserModal } from "./styledPatchUserModal"
import { Input } from "../Input/Input";
import { UserContext } from "../../providers/UserContext";


export const PatchUserModal = () => {
  const { setPatchModal} = useContext(UserContext);

return(

<StyledPatchUserModal>
 <div className="patchModal__container">
       <header>
          <h3>ATUALIZAR DADOS</h3>
          <button onClick={() =>setPatchModal(false)}>&#10005;</button>
        </header>
   
           
            <Input type='text' placeholder='Email' />

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

