import { Col, Row, Layout } from "antd";

const AppFooter = () => {
	const { Footer } = Layout;
	return (
		<Footer className="app-layout__footer">
			<Row type="flex" justify="space-between">
				<Col>
					©{new Date().getFullYear()} Made with <span>&hearts;</span> by Githuba
					R J
				</Col>
				<Col></Col>
			</Row>
		</Footer>
	);
};

export default AppFooter;
