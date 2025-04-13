import React, { useState } from "react";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update-user.modal";
const UserTable = (props) => {
	const { dataSource } = props;
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	const [dataUpdate, setDataUpdate] = useState(null);

	const columns = [
		{
			title: "ID",
			dataIndex: "_id",
			render: (_, record) => {
				return <a href="#">{record._id}</a>;
			},
		},
		{
			title: "Full Name",
			dataIndex: "fullName",
		},
		{
			title: "Email",
			dataIndex: "email",
		},
		{
			title: "Phone",
			dataIndex: "phone",
		},
		{
			title: "Role",
			dataIndex: "role",
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<div style={{ display: "flex", gap: "20px" }}>
					<EditOutlined
						onClick={() => {
							setDataUpdate(record);
							setIsModalUpdateOpen(true);
						}}
						style={{ color: "#6d28d9", cursor: "pointer" }}
					/>
					<DeleteOutlined
						style={{ color: "#dc2626", cursor: "pointer" }}
					/>
				</div>
			),
		},
	];

	return (
		<>
			<UpdateUserModal
				isModalUpdateOpen={isModalUpdateOpen}
				setIsModalUpdateOpen={setIsModalUpdateOpen}
				dataUpdate={dataUpdate}
				setDataUpdate={setDataUpdate}
			/>
			<Table columns={columns} dataSource={dataSource} rowKey="_id" />
		</>
	);
};
export default UserTable;
