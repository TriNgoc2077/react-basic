import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		loadUser();
	}, []);
	const loadUser = async () => {
		const response = await fetchAllUserAPI();
		setUsers(response.data);
	};
	return (
		<div style={{ padding: "20px" }}>
			<UserForm loadData={loadUser} />
			<UserTable dataSource={users} />
		</div>
	);
};

export default UserPage;
