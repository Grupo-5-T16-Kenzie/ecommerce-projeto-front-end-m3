import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input/Input";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input type="email" {...register("email")} />
      <Input type="password" {...register("password")} />

      {/* <input placeholder="Email" type="email" {...register("email")} disabled={loading} />
      <input placeholder="Senha" type="password" {...register("password")} disabled={loading} />
       */}
      <button type="submit" disabled={loading}>
        {" "}
        {loading ? "ENTRANDO..." : "ENTRAR"}
      </button>
    </form>
  );
};
