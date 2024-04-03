import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppFooter from "../../Components/App/AppFooter";
import AppHeader from "../../Components/App/AppHeader";
import AppSider from "../../Components/App/AppSider";
import { useState } from "react";
const { Content } = Layout;

const AppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout className="app-layout">
			<AppSider collapsed={collapsed} setCollapsed={setCollapsed} />
			<Layout
				className="app-layout__layout"
				style={{ marginLeft: collapsed ? "80px" : "200px" }}
			>
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
