import { Flex } from "antd";
import CategoryCard from "../../../Components/KnowledgeBase/CategoryCard";
import { knowledgeBaseCategories } from "../../../Components/KnowledgeBase/knowledgeBaseData";
import { useSearchParams } from "react-router-dom";

const RelatedQuestions = () => {
	const [searchParams] = useSearchParams();
	// Access query parameters using the get method
	const key = searchParams.get("card");
	const index = searchParams.get("question");
	console.log(key, index);
	return (
		<Flex gap={10}>
			<CategoryCard index={0} data={knowledgeBaseCategories[0]} />
		</Flex>
	);
};

export default RelatedQuestions;
