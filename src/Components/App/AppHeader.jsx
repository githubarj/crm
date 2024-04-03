import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import {
	Layout,
	Button,
	Row,
	Col,
	Badge,
	Avatar,
	Dropdown,
	Flex,
	Typography,
} from "antd";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import {
	CiUser,
	CiInboxIn,
	CiChat1,
	CiSettings,
	CiCircleQuestion,
} from "react-icons/ci";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

const AppHeader = () => {
	const { Header } = Layout;
	const { Paragraph, Title, Text } = Typography;
	const items = [
		{
			label: (
				<Flex gap={10} align="center">
					<Avatar shape="circle" icon={<UserOutlined />} />
					<Paragraph style={{ marginBottom: "0" }}>
						<Title level={5} style={{ marginBottom: "0" }}>
							John Doe
						</Title>
						<Text>Admin</Text>
					</Paragraph>
				</Flex>
			),
			key: "0",
		},
		{
			type: "divider",
		},
		{
			label: "Profile",
			key: "1",
			icon: <CiUser />,
		},
		{
			label: "Inbox",
			key: "2",
			icon: <CiInboxIn />,
		},
		{
			label: "Chat",
			key: "3",
			icon: <CiChat1 />,
		},
		{
			type: "divider",
		},
		{
			label: "Settings",
			key: "4",
			icon: <CiSettings />,
		},
		{
			label: "Pricing",
			key: "5",
			icon: <LiaDollarSignSolid />,
		},
		{
			label: "Faqs",
			key: "6",
			icon: <CiCircleQuestion />,
		},
		{
			type: "divider",
		},
		{
			label: "Logout",
			key: "8",
			icon: <IoIosLogOut />,
		},
	];
	const menuProps = {
		items,
	};
	return (
		<Header className="app-layout__header">
			<Row type="flex" justify="space-between">
				<Col>
					<Button type="text" icon={<SearchOutlined />} />
				</Col>
				<Col className="header-btns">
					<Button shape="circle" type="text" icon={<IoMoonOutline />} />
					<Button shape="circle" type="text" icon={<GoBell />} />
					<Dropdown menu={menuProps}>
						<Badge dot>
							<Avatar shape="circle" icon={<UserOutlined />} />
						</Badge>
					</Dropdown>
				</Col>
			</Row>
		</Header>
	);
};

export default AppHeader;
