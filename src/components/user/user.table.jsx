import React, { useState } from "react";
import { notification, Popconfirm, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";
const UserTable = (props) => {
	const {
		dataSource,
		loadData,
		current,
		pageSize,
		total,
		setCurrent,
		setPageSize,
	} = props;
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
	const [dataUpdate, setDataUpdate] = useState(null);
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [dataDetail, setDataDetail] = useState(null);

	const handleDeleteUser = async (id) => {
		const response = await deleteUserAPI(id);
		if (response.data) {
			notification.success({
				message: "delete user",
				description: "xóa user thành công",
			});
			await loadData();
		} else {
			notification.error({
				message: "Error delete user",
				description: JSON.stringify(response.message),
			});
		}
	};
	const columns = [
		{
			title: "STT",
			render: (_, record, index) => {
				return <>{index + 1 + (current - 1) * pageSize}</>;
			},
		},
		{
			title: "ID",
			dataIndex: "_id",
			render: (_, record) => {
				return (
					<a
						href="#"
						onClick={() => {
							setDataDetail(record);
							setIsDetailOpen(true);
						}}
					>
						{record._id}
					</a>
				);
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
					<Popconfirm
						title="Xóa người dùng"
						description="Bạn chắc chắn xóa
						người dùng này ?"
						onConfirm={() => handleDeleteUser(record._id)}
						okText="Yes"
						cancelText="No"
						placement="left"
					>
						<DeleteOutlined
							style={{ color: "#dc2626", cursor: "pointer" }}
						/>
					</Popconfirm>
				</div>
			),
		},
	];
	const onChange = (pagination, filters, sorter, extra) => {
		// change cureent
		if (pagination && pagination.current) {
			if (+pagination.current !== +current) {
				setCurrent(+pagination.current);
			}
		}

		//change page size
		if (pagination && pagination.pageSize) {
			if (+pagination.pageSize !== +pageSize) {
				setPageSize(+pagination.pageSize);
			}
		}
		console.log({ pagination, filters, sorter, extra });
	};
	return (
		<>
			<UpdateUserModal
				isModalUpdateOpen={isModalUpdateOpen}
				setIsModalUpdateOpen={setIsModalUpdateOpen}
				dataUpdate={dataUpdate}
				setDataUpdate={setDataUpdate}
				loadData={loadData}
			/>
			<Table
				columns={columns}
				dataSource={dataSource}
				rowKey="_id"
				pagination={{
					current: current,
					pageSize: pageSize,
					showSizeChanger: true,
					total: total,
					showTotal: (total, range) => {
						return (
							<div>
								{range[0]}-{range[1]} trên {total} rows
							</div>
						);
					},
				}}
				onChange={onChange}
			/>
			<ViewUserDetail
				dataDetail={dataDetail}
				setDataDetail={setDataDetail}
				isDetailOpen={isDetailOpen}
				setIsDetailOpen={setIsDetailOpen}
				loadData={loadData}
			/>
		</>
	);
};
export default UserTable;
