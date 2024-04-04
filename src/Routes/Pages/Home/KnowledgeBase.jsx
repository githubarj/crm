import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input, Row, Typography } from "antd";
import { knowledgeBaseCategories } from "../../../Components/KnowledgeBase/knowledgeBaseData";
import CategoryCard from "../../../Components/KnowledgeBase/CategoryCard";

function KnowledgeBase() {
	const { Title, Text } = Typography;
	return (
		<Flex vertical gap={10} className="knowledge-base">
			<Flex vertical align="center" gap={10} className="knowledge-base__header">
				<Flex vertical align="center" className="header-text">
					<Title level={3} style={{ color: "blue" }}>
						Hello, how can we help ?
					</Title>
					<Text>or choose a category to quickly find the help you need</Text>
				</Flex>
				<Input
					prefix={<SearchOutlined />}
					placeholder="Ask a question..."
					className="header-input"
				/>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#E4E8F6"
						fillOpacity="1"
						d="M0,32L1440,320L1440,320L0,320Z"
					></path>
				</svg>
			</Flex>
			<Row gutter={[16, 18]} className="knowledge-base__content"  >
				{knowledgeBaseCategories.map((item, index) => (
					<CategoryCard key={index} data={item} index ={index} />
				))}
			</Row>
		</Flex>
	);
}

export default KnowledgeBase;
