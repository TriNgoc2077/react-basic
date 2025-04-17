import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateBookAPI } from "../../services/api.service";

const UpdateBookModal = (props) => {
	const [id, setId] = useState("");
	const [mainText, setMainText] = useState("");
	const [author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	const [sold, setSold] = useState("");
	const [quantity, setQuantity] = useState("");
	const [slider, setSlider] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const {
		isModalUpdateOpen,
		setIsModalUpdateOpen,
		dataUpdate,
		setDataUpdate,
		loadData,
	} = props;

	useEffect(() => {
		if (dataUpdate) {
			setId(dataUpdate._id);
			setMainText(dataUpdate.mainText);
			setAuthor(dataUpdate.author);
			setCategory(dataUpdate.category);
			setPrice(+dataUpdate.price);
			setSold(+dataUpdate.sold);
			setQuantity(+dataUpdate.quantity);
			setSlider(dataUpdate.slider);
			setThumbnail(dataUpdate.thumbnail);
		}
	}, [dataUpdate]);

	const handleSubmitBtn = async () => {
		const data = {
			mainText,
			author,
			category,
			price,
			sold,
			quantity,
			slider,
			thumbnail,
		};
		const response = await updateBookAPI(id, data);
		if (response.data) {
			notification.success({
				message: "update book",
				description: "cập nhật sách thành công",
			});
			resetAndCloseModal();
			await loadData();
		} else {
			notification.error({
				message: "Error update user",
				description: JSON.stringify(response.message),
			});
		}
	};
	const resetAndCloseModal = () => {
		setIsModalUpdateOpen(false);
		setId("");
		setMainText("");
		setAuthor("");
		setCategory("");
		setPrice("");
		setSold("");
		setQuantity("");
		setDataUpdate(null);
	};

	return (
		<Modal
			title="Update a Book"
			open={isModalUpdateOpen}
			onOk={() => handleSubmitBtn()}
			onCancel={() => setIsModalUpdateOpen(false)}
			maskClosable={false}
			okText="UPDATE"
			okButtonProps={{
				style: {
					backgroundColor: "#6d28d9",
				},
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
					<span>ID</span>
					<Input value={id} disabled />
				</div>
				<div>
					<span>Tên</span>
					<Input
						value={mainText}
						onChange={(e) => setMainText(e.target.value)}
					/>
				</div>
				<div>
					<span>Thể loại</span>
					<Input
						value={category}
						onChange={(e) => setCategory(e.target.value)}
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
					<span>Giá</span>
					<Input
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div>
					<span>Đã bán</span>
					<Input
						value={sold}
						onChange={(e) => setSold(e.target.value)}
					/>
				</div>
				<div>
					<span>Số lượng</span>
					<Input
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default UpdateBookModal;
