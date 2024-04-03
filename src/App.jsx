import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authentication from "./Routes/Layouts/Authentication";
import LogIn from "./Routes/Pages/Auth/LogIn";
import Register from "./Routes/Pages/Auth/Register";
import ForgotPassword from "./Routes/Pages/Auth/ForgotPassword";
import ResetPassword from "./Routes/Pages/Auth/ResetPassword";
import AppLayout from "./Routes/Layouts/AppLayout";
import KnowledgeBase from "./Routes/Pages/Home/KnowledgeBase";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Authentication />,
		children: [
			{
				index: true,
				element: <LogIn />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "forgot",
				element: <ForgotPassword />,
			},
			{
				path: "reset",
				element: <ResetPassword />,
			},
		],
	},
	{
		path: "/home",
		element: <AppLayout />,
		children: [{ index: true, element: <KnowledgeBase /> }],
	},
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
