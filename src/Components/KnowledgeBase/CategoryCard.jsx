import Icon from "@ant-design/icons/lib/components/Icon";
import { Col, List } from "antd";
import { CiSettings, CiUnlock, CiCircleInfo, CiMobile3 } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";
import { PiCurrencyDollarThin } from "react-icons/pi";

const CategoryCard = ({ index, data }) => {
	console.log(index);

	const icons = [
		CiSettings,
		IoLinkOutline,
		PiCurrencyDollarThin,
		CiUnlock,
		CiMobile3,
		CiCircleInfo,
	];

	console.log(icons[index].icon);

	return (
		<Col span={8}>
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
				renderItem={(item) => (
					<List.Item className="card-item" >
						<span>&#x25EF;&nbsp; </span>
						{item}
					</List.Item>
				)}
			/>
		</Col>
	);
};

export default CategoryCard;
