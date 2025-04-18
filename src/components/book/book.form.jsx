import { Button, Input, InputNumber, Modal, notification, Select } from "antd";
import { useState } from "react";
import { createBookAPI, handleUploadFile } from "../../services/api.service";

const BookForm = (props) => {
	const { loadData } = props;
	const [mainText, setMainText] = useState("");
	const [author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);
	const [isBtnLoading, setIsBtnLoading] = useState(false);

	const handleSubmitBtn = async () => {
		setIsBtnLoading(true);
		if (!selectedFile) {
			notification.error({
				message: "Tạo sách",
				description: "Vui lòng tải thumbnail !",
			});
			setIsBtnLoading(false);

			return;
		}
		const uploadThumbnail = await handleUploadFile(selectedFile, "book");
		if (!uploadThumbnail.data) {
			notification.error({
				message: "Không thể upload thumbnail !",
				description: uploadThumbnail.message,
			});
			setIsBtnLoading(false);

			return;
		}
		const data = {
			mainText,
			author,
			category,
			price,
			quantity,
			sold: 0,
			thumbnail: uploadThumbnail.data.fileUploaded,
			slider: [],
		};
		// setIsBtnLoading(true);
		const res = await createBookAPI(data);
		if (res.data) {
			notification.success({
				message: "Tạo sách",
				description: "Tạo sách thành công !",
			});
			await loadData();
			resetAndCloseModal();
		} else {
			notification.error({
				message: "Tạo sách",
				description: res.data,
			});
		}
		setIsBtnLoading(false);
	};
	const resetAndCloseModal = () => {
		setIsModalOpen(false);
		setMainText("");
		setAuthor("");
		setCategory("");
		setPrice("");
		setQuantity("");
		setSelectedFile(null);
		setPreviewImage(null);
	};
	const handleOnChangeThumbnail = (e) => {
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
	return (
		<div className="book-form" style={{ margin: "20px 0" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h3>Table Books</h3>
				<Button
					type="primary"
					onClick={() => setIsModalOpen(true)}
					style={{ backgroundColor: "#6d28d9" }}
				>
					Create Book
				</Button>
			</div>
			<Modal
				title="Create Book"
				open={isModalOpen}
				onOk={() => handleSubmitBtn()}
				onCancel={() => setIsModalOpen(false)}
				maskClosable={false}
				okText="CREATE"
				okButtonProps={{
					style: {
						backgroundColor: "#6d28d9",
					},
					loading: isBtnLoading,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<div>
						<span>Tên</span>
						<Input
							value={mainText}
							onChange={(e) => setMainText(e.target.value)}
						/>
					</div>
					<div>
						<span>Tác giả</span>
						<Input
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div>
						<span style={{ display: "block" }}>Thể loại</span>
						<Select
							style={{ width: 470 }}
							value={category}
							onChange={(e) => setCategory(e)}
							options={[
								{
									value: "Arts",
									label: "Arts",
								},
								{
									value: "Business",
									label: "Business",
								},
								{
									value: "Comics",
									label: "Comics",
								},
								{
									value: "Cooking",
									label: "Cooking",
								},
								{
									value: "Entertainment",
									label: "Entertainment",
								},
								{
									value: "History",
									label: "History",
								},
								{
									value: "Music",
									label: "Music",
								},
								{
									value: "Sports",
									label: "Sports",
								},
								{
									value: "Teen",
									label: "Teen",
								},
								{
									value: "Travel",
									label: "Travel",
								},
							]}
						/>
					</div>
					<div>
						<span style={{ display: "block" }}>Giá</span>
						<InputNumber
							style={{ width: 470 }}
							value={price}
							onChange={(e) => setPrice(e)}
						/>
					</div>
					<div>
						<span>Số lượng</span>
						<InputNumber
							style={{ width: 470 }}
							value={quantity}
							onChange={(e) => setQuantity(e)}
						/>
					</div>
					<div>
						<span>Thumbnail</span>
						<div>
							<label
								htmlFor="uploadThumbnail"
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
								Upload
							</label>
							<input
								type="file"
								hidden
								id="uploadThumbnail"
								accept="image/*"
								onChange={handleOnChangeThumbnail}
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
									}}
								>
									<img
										src={previewImage}
										alt="avatar"
										style={{
											width: "100px",
											height: "100px",
											objectFit: "contain",
										}}
									/>
								</div>
							</>
						)}
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default BookForm;
