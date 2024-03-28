import { Outlet } from "react-router-dom"

function Authentication() {
  return (
    <section className="auth-container">
      <Outlet />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ECECF2" fillOpacity="1" d="M0,256L1440,192L1440,320L0,320Z"></path></svg>
    </section>
  )
}

export default Authentication
