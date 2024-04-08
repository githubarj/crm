import { Flex } from "antd";
import CategoryCard from "../../../Components/KnowledgeBase/CategoryCard";
import { knowledgeBaseCategories } from "../../../Components/KnowledgeBase/knowledgeBaseData";
import { useSearchParams } from "react-router-dom";

const RelatedQuestions = () => {
	const [searchParams] = useSearchParams();
	// Access query parameters using the get method
	const card = searchParams.get("card");
	const question = searchParams.get("question");
	return (
		<Flex gap={10}>
			<CategoryCard index={card} data={knowledgeBaseCategories[card]} />
			{question}
		</Flex>
	);
};

export default RelatedQuestions;
