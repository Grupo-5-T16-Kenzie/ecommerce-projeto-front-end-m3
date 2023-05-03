import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";

export interface IRegisterFormData {
  name: string;
  image_url: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>();

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input placeholder="Nome" type="text" {...register("name")} />
      <input placeholder="Url da foto de perfil" type="text" {...register("image_url")} />
      <input placeholder="Email" type="email" {...register("email")} />
      <input placeholder="Senha" type="password" {...register("password")} />
      <input
        placeholder="Confirmação de senha"
        type="password"
        {...register("password_confirmation")}
      />
      <button type="submit">CADASTRAR</button>
    </form>
  );
};
