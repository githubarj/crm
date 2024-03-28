import { Outlet } from "react-router-dom"
import { Typography } from "antd"

function Authentication() {
  const {Title , Text} = Typography
  return (
    <section className="auth-container">
        <div className="auth-form" >
        <Title level={3} className="auth-form__title"  >Admin</Title>
        <div className="auth-form__paragraph">
            <Title level={4}>Welcome to your BMS</Title>
            <Text>Please Sign in to your account and start the adventure</Text>
        </div>
        <Outlet />
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ECECF2" fillOpacity="1" d="M0,256L1440,192L1440,320L0,320Z"></path></svg>
    </section>
  )
}

export default Authentication
