import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Button, Row, Col, Badge, Avatar } from "antd";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
const AppHeader = () => {
	const { Header } = Layout;
	return (
		<Header className="app-layout__header">
			<Row type="flex" justify="space-between">
				<Col>
					<Button type="text" icon={<SearchOutlined />} />
				</Col>
				<Col className="header-btns">
					<Button shape="circle" type="text" icon={<IoMoonOutline />} />
					<Button shape="circle" type="text" icon={<GoBell />} />
					<Badge dot>
						<Avatar shape="circle" icon={<UserOutlined />} />
					</Badge>
				</Col>
			</Row>
		</Header>
	);
};

export default AppHeader;
