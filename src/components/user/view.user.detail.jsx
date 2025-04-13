import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
	const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
	return (
		<Drawer
			width={"40vw"} //view width
			title="Detail User"
			onClose={() => {
				setDataDetail(null);
				setIsDetailOpen(false);
			}}
			open={isDetailOpen}
		>
			{dataDetail ? (
				<>
					<div>
						<img
							src={`${
								import.meta.env.VITE_BACKEND_URL
							}/images/avatar/${dataDetail.avatar}`}
							alt="avatar"
							style={{ width: "100px", height: "100px" }}
						/>
					</div>
					<div>
						<label
							htmlFor="uploadAvatar"
							style={{
								display: "block",
								width: "fit-content",
								marginTop: "15px",
								padding: "5px 10px",
								background: "orange",
								borderRadius: "5px",
								cursor: "pointer",
								marginBottom: "10px",
							}}
						>
							Chọn Avatar
						</label>
						<input
							type="file"
							hidden
							id="uploadAvatar"
							accept="image/*"
						/>
					</div>
					<Button type="primary">Upload Avatar</Button>
					<br />
					<br />
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
