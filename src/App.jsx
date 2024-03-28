import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Authentication from "./Routes/Layouts/Authentication"
import LogIn from "./Routes/Pages/Auth/LogIn"
import Register from "./Routes/Pages/Auth/Register"


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
