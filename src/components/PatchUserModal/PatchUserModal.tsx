import { Context, useContext } from "react";
import { StyledPatchUserModal } from "./styledPatchUserModal"
import { Input } from "../Input/Input";
import { UserContext } from "../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Schema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TPatchFormValues, patchFormSchema } from "./patchFormSchema";

 
export const PatchUserModal = () => {
  const { setPatchModal,patchUser} = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPatchFormValues>({
    resolver: zodResolver(patchFormSchema),
  });
  
  
  const submit: SubmitHandler<TPatchFormValues> = (formData) => {
    patchUser(formData);
  };


return(

<StyledPatchUserModal>
 <div className="patchModal__container">
       <header>
          <h3>ATUALIZAR DADOS</h3>
          <button onClick={() =>setPatchModal(false)}>&#10005;</button>
        </header>
   
         <form onSubmit={handleSubmit(submit)}>
         <Input
        type="text"
        label="Nome"
        placeholder="NOME ATUAL"
        id="name"
        {...register("name")}
       
      />
        <Input
        type="text"
        label="Foto"
        placeholder="URL DA FOTO"
        id="image_url"
        {...register("photo")}
       
      />
        <Input
        type="text"
        label="Email"
        placeholder="EMAIL ATUAL"
        id="email"
        {...register("email")}
      />

      <button type="submit">ATUALIZAR</button>
        </form>
       
        </div>
</StyledPatchUserModal>

)

}

