import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  return (
    <div>
      <div>
        <h1>Cadastro</h1>
        <Link to="/login">ir para o login</Link>
      </div>
      <RegisterForm />
    </div>
  );
};
