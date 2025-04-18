import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
	const [users, setUsers] = useState([]);
	const [current, setCurrent] = useState(1);
	const [pageSize, setPageSize] = useState(9);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		loadUser();
	}, [current, pageSize]);
	const loadUser = async () => {
		const response = await fetchAllUserAPI(current, pageSize);
		if (response.data) {
			setUsers(response.data.result);
			// setCurrent(response.data.meta.current);
			// setPageSize(response.data.meta.pageSize);
			setTotal(response.data.meta.total);
		}
	};
	return (
		<div style={{ padding: "20px" }}>
			<UserForm loadData={loadUser} />
			<UserTable
				dataSource={users}
				loadData={loadUser}
				current={current}
				pageSize={pageSize}
				total={total}
				setCurrent={setCurrent}
				setPageSize={setPageSize}
			/>
		</div>
	);
};

export default UserPage;
