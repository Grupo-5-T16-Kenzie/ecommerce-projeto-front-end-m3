import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input placeholder="Email" type="email" {...register("email")} />
      <input placeholder="Senha" type="password" {...register("password")} />
      <button type="submit">LOGIN</button>
    </form>
  );
};
