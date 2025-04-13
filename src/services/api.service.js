import axios from "./axios.customize";
const createUserAPI = (fullName, email, password, phone) => {
	const URL_BACKEND = "api/v1/user";
	const data = {
		fullName,
		email,
		password,
		phone,
	};
	return axios.post(URL_BACKEND, data, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
		},
	});
};

const updateUserAPI = (_id, fullName, phone) => {
	const URL_BACKEND = "api/v1/user";
	const data = {
		_id: _id,
		fullName,
		phone,
	};
	return axios.put(URL_BACKEND, data, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
		},
	});
};

const deleteUserAPI = (dataDelete) => {
	const URL_BACKEND = `api/v1/user/${dataDelete}`;
	return axios.delete(URL_BACKEND, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
		},
	});
};

const fetchAllUserAPI = () => {
	const URL_BACKEND = "api/v1/user";
	return axios.get(URL_BACKEND, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
		},
	});
};

export { createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI };
