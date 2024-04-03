import React, { useState } from "react";
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";

const AppSider = () => {
	const { Sider } = Layout;
	const [collapsed, setCollapsed] = useState(false);
	console.log(collapsed);

	const items = [
		UserOutlined,
		VideoCameraOutlined,
		UploadOutlined,
		BarChartOutlined,
		CloudOutlined,
		AppstoreOutlined,
		TeamOutlined,
		ShopOutlined,
	].map((icon, index) => ({
		key: String(index + 1),
		icon: React.createElement(icon),
		label: `nav ${index + 1}`,
	}));
	return (
		<Sider
			className="app-layout__sider"
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div className="demo-logo-vertical" />
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={["4"]}
				items={items}
			/>
		</Sider>
	);
};

export default AppSider;
