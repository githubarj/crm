import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import {
	Layout,
	Button,
	Row,
	Col,
	Badge,
	Avatar,
	Dropdown,
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

const AppHeader = () => {
	const { Header } = Layout;
	const items = [
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
