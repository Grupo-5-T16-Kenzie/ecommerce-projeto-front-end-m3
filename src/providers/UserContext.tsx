import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IRegisterFormData } from "../components/RegisterForm/RegisterForm";
import { ILoginFormData } from "../components/LoginForm/LoginForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: React.ReactNode;
}
interface IUserContext {
  userLogin: (formData: ILoginFormData) => Promise<void>;
  userRegister: (formData: IRegisterFormData) => Promise<void>;
  userLogout: () => void;
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

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@epicStyle:token");
    const userId = localStorage.getItem("@epicStyle:id");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@epicStyle:token");
        localStorage.removeItem("@epicStyle:id");
      }
    };

    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@epicStyle:token", data.accessToken);
      localStorage.setItem("@epicStyle:id", String(data.user.id));
      setUser(data.user);
      toast.success("Login efetuado com sucesso!", {
        onClose: () => {
          navigate("/dashboard");
        },
      });
    } catch (error) {
      toast.error("Erro ao fazer login. Tente novamente.");
      console.log(error);
    }
  };

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Conta criada com sucesso!", {
        onClose: () => {
          navigate("/login");
        },
      });
    } catch (error) {
      toast.error("Erro ao criar conta. Tente novamente.");
      console.log(error);
    }
  };

  //Adicionar no dashboard depois
  const userLogout = () => {
    localStorage.removeItem("@epicStyle:token");
    localStorage.removeItem("@epicStyle:id");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
