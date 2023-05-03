import { useForm, SubmitHandler } from "react-hook-form";

interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input placeholder="Email" type="email" {...register("email")} />
      <input placeholder="Senha" type="password" {...register("password")} />
      <button type="submit">LOGIN</button>
    </form>
  );
};
