import { Flex, Typography, Row, Col, Switch } from "antd";
import { pricingData } from "./pricingData";

const PricingPlans = () => {
	const { Title, Text } = Typography;
	const onChange = (checked) => {
		console.log(`switch to ${checked}`);
	};
	return (
		<Flex vertical gap={16} align="center" className="pricing-plans">
			<div className="pricing-plans__heading">
				<Title level={3}>Pricing Plans</Title>
				<Text>
					All Plans include 40+ adavanced tools and feature to boost your
					product.
					<br />
					Choose the best plan to suit your needs.
				</Text>
				<Flex gap={10} align="center">
					<Text>Montly</Text>
					<Switch size="small" onChange={onChange} />
					Annually
				</Flex>
			</div>
			<Row gutter={16} className="pricing-plans__content">
				{pricingData.map((item, index) => (
					<Col key={index} lg={8} sm={12} xs={24} className="card" >
						<img src={item.icon} alt=""  style={{width: "100%"}} />
					</Col>
				))}
			</Row>
		</Flex>
	);
};

export default PricingPlans;
