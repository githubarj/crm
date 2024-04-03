import React from "react";
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu } from "antd";

const AppSider = ({ collapsed, setCollapsed }) => {
	const { Sider } = Layout;
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
			breakpoint="lg"
			theme="light"
			collapsible
			collapsed={collapsed}
			trigger={null}
		>
			<Button
				type="text"
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => setCollapsed(!collapsed)}
				className="trigger-button"
				style={{
					fontSize: "16px",
					width: "100%",
					height: 64,
				}}
			/>
			<Menu
				className="__menu"
				mode="inline"
				defaultSelectedKeys={["1"]}
				items={items}
			/>
		</Sider>
	);
};

export default AppSider;
