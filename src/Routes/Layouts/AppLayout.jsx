import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppFooter from "../../Components/App/AppFooter";
import AppHeader from "../../Components/App/AppHeader";
import AppSider from "../../Components/App/AppSider";
const { Content } = Layout;

const AppLayout = () => {
	return (
		<Layout hasSider className="app-layout">
			<AppSider />
			<Layout className="app-layout__layout">
				<AppHeader />
				<Content className="app-layout__content">
					<Outlet />
				</Content>
				<AppFooter />
			</Layout>
		</Layout>
	);
};
export default AppLayout;
