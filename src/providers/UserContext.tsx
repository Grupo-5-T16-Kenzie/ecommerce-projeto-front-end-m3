import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { IRegisterFormData } from "../components/RegisterForm/RegisterForm";
import { ILoginFormData } from "../components/LoginForm/LoginForm";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (formData: ILoginFormData) => Promise<void>;
  userRegister: (formData: IRegisterFormData) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState(null);

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@epicStyle:token", data.accessToken);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      await api.post("/users", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
