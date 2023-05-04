import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TRegisterFormValues } from "../components/RegisterForm/regiterFormSchema";
import { TLoginFormValues } from "../components/LoginForm/loginFormSchema";

interface IUserProviderProps {
  children: React.ReactNode;
}
interface IUserContext {
  userLogin: (formData: TLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  userRegister: (formData: TRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
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
  const [patchModal, setPatchModal] = useState(false);


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

  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Conta criada com sucesso!", {
        onClose: () => {
          navigate("/login");
        },
      });
    } catch (error) {
      toast.error("Erro ao criar conta. Tente novamente.");
      console.log(error);
    } finally {
      setLoading(false);
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
