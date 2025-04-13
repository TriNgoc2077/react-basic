import { Drawer } from "antd";

const ViewUserDetail = (props) => {
	const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
	return (
		<Drawer
			title="Detail User"
			onClose={() => {
				setDataDetail(null);
				setIsDetailOpen(false);
			}}
			open={isDetailOpen}
		>
			{dataDetail ? (
				<>
					<p>ID: {dataDetail._id}</p>
					<p>Full Name: {dataDetail.fullName}</p>
					<p>Email: {dataDetail.email}</p>
					<p>Phone: {dataDetail.phone}</p>
					<p>Role: {dataDetail.role}</p>
				</>
			) : (
				<p>No data</p>
			)}
		</Drawer>
	);
};

export default ViewUserDetail;
