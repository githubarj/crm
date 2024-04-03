import { Col, Row, Layout, Space, Button } from "antd";

const AppFooter = () => {
	const { Footer } = Layout;
	return (
		<Footer className="app-layout__footer">
			<Row type="flex" justify="space-between">
				<Col className="footer-text">
					©{new Date().getFullYear()} Made with
					<span>&hearts;</span> by Githuba R J
				</Col>
				<Col>
					<Space size="small">
						<Button type="link">Menu 1</Button>
						<Button type="link">Menu 2</Button>
						<Button type="link">Menu 3</Button>
						<Button type="link">Menu 4</Button>
					</Space>
				</Col>
			</Row>
		</Footer>
	);
};

export default AppFooter;
