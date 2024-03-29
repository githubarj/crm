import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Authentication from "./Routes/Layouts/Authentication"
import LogIn from "./Routes/Pages/Auth/LogIn"
import Register from "./Routes/Pages/Auth/Register"
import ForgotPassword from "./Routes/Pages/Auth/ForgotPassword"


const routes = createBrowserRouter([
  {
    path : "/",
    element: <Authentication />,
    children: [
      
          {
            index: true,
            element: <LogIn />
          },
          {
            path: "register",
            element: <Register />
          },{
            path: "forgot",
            element: <ForgotPassword />
          }
        ]
  }
])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App