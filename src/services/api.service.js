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

const registerUserAPI = (fullName, email, password, phone) => {
	const URL_BACKEND = "api/v1/user/register";
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

const fetchAllUserAPI = (current, pageSize) => {
	const URL_BACKEND = `api/v1/user?current=${current}&pageSize=${pageSize}`;
	return axios.get(URL_BACKEND, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
		},
	});
};

const handleUploadFile = (file, folder) => {
	const URL_BACKEND = `api/v1/file/upload`;
	const config = {
		headers: {
			"upload-type": folder,
			"Content-Type": "multipart/form-data",
		},
	};
	const bodyFormData = new FormData();
	bodyFormData.append("fileImg", file);
	return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (_id, fullName, phone, avatar) => {
	const URL_BACKEND = "api/v1/user";
	const data = {
		_id: _id,
		fullName: fullName,
		phone: phone,
		avatar: avatar,
	};
	return axios.put(URL_BACKEND, data, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
		},
	});
};

export {
	createUserAPI,
	registerUserAPI,
	updateUserAPI,
	fetchAllUserAPI,
	deleteUserAPI,
	handleUploadFile,
	updateUserAvatarAPI,
};
