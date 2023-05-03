import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"

export const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <LoginForm/>
      <div>
        <p>Ainda não possui conta?</p>
        <Link to="/register">CADASTRE-SE</Link>
      </div>
    </div>
  )
}

