import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
	handleUploadFile,
	updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
	const {
		dataDetail,
		setDataDetail,
		isDetailOpen,
		setIsDetailOpen,
		loadData,
	} = props;
	const [selectedFile, setSelectedFile] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);

	const handleOnChangeAvatar = (e) => {
		if (e.target.files.length === 0) {
			setSelectedFile(null);
			setPreviewImage(null);
			return;
		}
		const file = e.target.files[0];
		if (file) {
			setSelectedFile(file);
			setPreviewImage(URL.createObjectURL(file));
		}
	};
	const handleUploadAvatar = async () => {
		const resUpload = await handleUploadFile(selectedFile, "avatar");
		if (resUpload.data) {
			const newAvatar = resUpload.data.fileUploaded;
			const resUpdateAvatar = await updateUserAvatarAPI(
				dataDetail._id,
				dataDetail.fullName,
				dataDetail.phone,
				newAvatar
			);
			if (resUpdateAvatar.data) {
				setIsDetailOpen(false);
				setSelectedFile(null);
				setPreviewImage(null);
				await loadData();

				notification.success({
					message: "Update avatar successfully",
					description: JSON.stringify(resUpdateAvatar.message),
				});
			} else {
				notification.error({
					message: "Error update avatar",
					description: JSON.stringify(resUpdateAvatar.message),
				});
			}
		} else {
			notification.error({
				message: "Error upload file",
				description: JSON.stringify(resUpload.message),
			});
			return;
		}
	};

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
							}/images/avatar/${dataDetail.avatar}`}
							alt="avatar"
							style={{
								width: "100px",
								height: "100px",
								objectFit: "contain",
								borderRadius: "50%",
							}}
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
					)}
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
