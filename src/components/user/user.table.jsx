import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
const UserTable = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		loadUser();
	}, []);
	const columns = [
		{
			title: "ID",
			dataIndex: "_id",
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
	];
	const loadUser = async () => {
		const response = await fetchAllUserAPI();
		setUsers(response.data);
	};
	return <Table columns={columns} dataSource={users} rowKey="_id" />;
};
export default UserTable;
