import { Typography } from "antd"
import { Outlet } from "react-router-dom"

function AuthForm() {

    const {Title , Text} = Typography
  return (
    <div className="auth-form" >
        <Title level={3} className="auth-form__title"  >Materio</Title>
        <div className="auth-form__paragraph">
            <Title level={3}>Welcome to Materialize</Title>
            <Text>Please Sign in to your account and start the adventure</Text>
        </div>
        <Outlet />
    </div>
  )
}

export default AuthForm
