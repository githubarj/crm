import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authentication from "./Routes/Layouts/Authentication";
import LogIn from "./Routes/Pages/Auth/LogIn";
import Register from "./Routes/Pages/Auth/Register";
import ForgotPassword from "./Routes/Pages/Auth/ForgotPassword";
import ResetPassword from "./Routes/Pages/Auth/ResetPassword";
import AppLayout from "./Routes/Layouts/AppLayout";
import KnowledgeBase from "./Routes/Pages/Home/KnowledgeBase";
import RelatedQuestions from "./Routes/Pages/Home/RelatedQuestions";
import Pricing from "./Routes/Pages/Home/Pricing";

const routes = createBrowserRouter([
	{
		path: "/",
		children: [
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
				path: "home",
				element: <AppLayout />,
				children: [
					{
						index: true,
						element: <KnowledgeBase />,
					},
					{
						path: "related-questions",
						element: <RelatedQuestions />,
					},
					{
						path: "pricing",
						element: <Pricing />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
