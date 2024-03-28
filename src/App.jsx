import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Authentication from "./Routes/Layouts/Authentication"
import AuthForm from "./Routes/Pages/Authentication/AuthForm"
import LogIn from "./Components/Forms/Auth/LogIn"
import Register from "./Components/Forms/Auth/Register"


const routes = createBrowserRouter([
  {
    path : "/",
    element: <Authentication />,
    children: [
      {
        path: "/",
        element: <AuthForm  />,
        children: [
          {
            index: true,
            element: <LogIn />
          },
          {
            path: "register",
            element: <Register />
          }
        ]
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
