import { SearchOutlined } from "@ant-design/icons";
import { Layout, Button, Row, Col } from "antd";
import { IoMoonOutline } from "react-icons/io5";
const AppHeader = () => {
	const { Header } = Layout;
	return (
		<Header className="app-layout__header">
			<Row type="flex" justify="space-between">
				<Col>
					<Button type="text" icon={<SearchOutlined />} />
				</Col>
				<Col>
					<Button type="text" icon={<IoMoonOutline />} />
					<Button type="text" icon={<SearchOutlined />} />
					<Button type="text" icon={<SearchOutlined />} />
				</Col>
			</Row>
		</Header>
	);
};

export default AppHeader;
