import { Button, Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
	const [id, setId] = useState("");
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
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
			setFullName(dataUpdate.fullName);
			setPhone(dataUpdate.phone);
		}
	}, [dataUpdate]);
	const handleSubmitBtn = async () => {
		const response = await updateUserAPI(id, fullName, phone);
		if (response.data) {
			notification.success({
				message: "update user",
				description: "cập nhật user thành công",
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
		setFullName("");
		setPhone("");
		setId("");
		setDataUpdate(null);
	};

	return (
		<Modal
			title="Update a User"
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
					<span>Full Name</span>
					<Input
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div>
					<span>Phone number</span>
					<Input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default UpdateUserModal;
