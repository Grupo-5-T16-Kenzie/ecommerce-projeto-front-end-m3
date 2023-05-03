import { createContext, useState } from "react";
import { IModalPatchProps, IPachUserContext } from "../Interfaces/Interfaces";


export const PatchContext = createContext({} as IPachUserContext);

export const PatchProvider = ({ children }: IModalPatchProps) => {
  const [patchModal, setPatchModal] = useState(false);



  return(
    <PatchContext.Provider
      value={{
      patchModal,
      setPatchModal
      }}
    >
      {children}
    </PatchContext.Provider>
  )
}