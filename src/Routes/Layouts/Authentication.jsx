import { Outlet, useLocation } from "react-router-dom"
import { Typography } from "antd"
import {headers} from "../Pages/Auth/authData"

function Authentication() {
  const {Title , Text} = Typography

  const location = useLocation()
  const displayHeaderData = headers[location.pathname.substring(1) ]?? headers.login

  return (
    <section className="auth-container">
        <div className="auth-form" >
        <Title level={3} className="auth-form__title"  >Admin</Title>
        <div className="auth-form__paragraph">
            <Title level={4}>{displayHeaderData.title}</Title>
            <Text>{displayHeaderData.text}</Text>
        </div>
        <Outlet />
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ECECF2" fillOpacity="1" d="M0,256L1440,192L1440,320L0,320Z"></path></svg>
    </section>
  )
}

export default Authentication
