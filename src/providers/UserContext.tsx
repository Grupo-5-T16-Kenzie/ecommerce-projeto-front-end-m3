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
interface IUser {
  name: string;
  image_url: string;
  email: string;
  id: number;
  password_confirmation: string; //tenho que remover isso
}
interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      console.log(data);

      localStorage.setItem("@epicStyle:token", data.accessToken);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      await api.post<IUserRegisterResponse>("/users", formData);
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
