import Icon from "@ant-design/icons/lib/components/Icon";
import { Col, List } from "antd";
import { CiSettings, CiUnlock, CiCircleInfo, CiMobile3 } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";
import { PiCurrencyDollarThin } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryCard = ({ index, data }) => {
	const icons = [
		CiSettings,
		IoLinkOutline,
		PiCurrencyDollarThin,
		CiUnlock,
		CiMobile3,
		CiCircleInfo,
	];
	const navigate = useNavigate();
	const location = useLocation();

	function navigateToQuestion(index, key) {
		return navigate(`/home/related-questions?card=${index}&question=${key}`, {
			replace: location.pathname.includes("related-questions"),
		});
	}

	return (
		<Col span={8} type="flex">
			<List
				className="card-container"
				split={false}
				size="small"
				header={
					<div className="card-header">
						<Icon component={icons[index]} style={{ color: data.color }} />
						{`${data.title} (${data.options.length})`}
					</div>
				}
				bordered
				dataSource={data.options}
				renderItem={(item, key) => (
					<List.Item
						className="card-item"
						onClick={() => navigateToQuestion(index, key)}
					>
						<span>&#x25EF;&nbsp; </span>
						{item}
					</List.Item>
				)}
			/>
		</Col>
	);
};

export default CategoryCard;
