import { Drawer } from "antd";
import { useState } from "react";

const ViewBookDetail = (props) => {
	const {
		dataDetail,
		setDataDetail,
		isDetailOpen,
		setIsDetailOpen,
		loadData,
	} = props;
	const [selectedFile, setSelectedFile] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);
	return (
		<Drawer
			width={"40vw"} //view width
			title="Detail Book"
			onClose={() => {
				setDataDetail(null);
				setIsDetailOpen(false);
			}}
			open={isDetailOpen}
		>
			{dataDetail ? (
				<>
					<div
						style={{
							marginTop: "10px",
							height: "100px",
							width: "100px",
							border: "1px solid #ccc",
							borderRadius: "50%",
						}}
					>
						<img
							src={`${
								import.meta.env.VITE_BACKEND_URL
							}/images/book/${dataDetail.thumbnail}`}
							alt="thumbnail"
							style={{
								width: "100px",
								height: "100px",
								objectFit: "contain",
								borderRadius: "50%",
							}}
						/>
					</div>
					{/* <div>
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
							onChange={handleOnChangeAvatar}
						/>
					</div>
					{previewImage && (
						<>
							<div
								style={{
									marginTop: "10px",
									marginBottom: "20px",
									height: "100px",
									width: "100px",
									border: "1px solid #ccc",
									borderRadius: "50%",
								}}
							>
								<img
									src={previewImage}
									alt="avatar"
									style={{
										width: "100px",
										height: "100px",
										objectFit: "contain",
										borderRadius: "50%",
									}}
								/>
							</div>
							<Button type="primary" onClick={handleUploadAvatar}>
								Save
							</Button>
						</>
					)} */}
					<br />
					<br />
					<p>ID: {dataDetail._id}</p>
					<p>Tên: {dataDetail.mainText}</p>
					<p>Thể loại: {dataDetail.category}</p>
					<p>Tác giả: {dataDetail.author}</p>
					<p>Giá: {dataDetail.price}</p>
					<p>Đã bán: {dataDetail.sold}</p>
					<p>Số lượng: {dataDetail.quantity}</p>
				</>
			) : (
				<p>No data</p>
			)}
		</Drawer>
	);
};

export default ViewBookDetail;
