import axios from "./axios.customize";
const createUserAPI = (fullName, email, password, phone) => {
	const URL_BACKEND = "api/v1/user";
	const data = {
		fullName,
		email,
		password,
		phone,
	};
	return axios.post(URL_BACKEND, data, {});
};

const registerUserAPI = (fullName, email, password, phone) => {
	const URL_BACKEND = "api/v1/user/register";
	const data = {
		fullName,
		email,
		password,
		phone,
	};
	return axios.post(URL_BACKEND, data);
};

const loginUserAPI = (email, password) => {
	const URL_BACKEND = "api/v1/auth/login";
	const data = {
		username: email,
		password,
		delay: 500,
	};
	return axios.post(URL_BACKEND, data);
};

const updateUserAPI = (_id, fullName, phone) => {
	const URL_BACKEND = "api/v1/user";
	const data = {
		_id: _id,
		fullName,
		phone,
	};
	return axios.put(URL_BACKEND, data);
};

const deleteUserAPI = (dataDelete) => {
	const URL_BACKEND = `api/v1/user/${dataDelete}`;
	return axios.delete(URL_BACKEND);
};

const fetchAllUserAPI = (current, pageSize) => {
	const URL_BACKEND = `api/v1/user?current=${current}&pageSize=${pageSize}`;
	return axios.get(URL_BACKEND);
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
	return axios.put(URL_BACKEND, data);
};

const getAccountAPI = () => {
	const URL_BACKEND = "/api/v1/auth/account";
	return axios.get(URL_BACKEND);
};

const logoutAPI = () => {
	const URL_BACKEND = "/api/v1/auth/logout";
	return axios.post(URL_BACKEND);
};
export {
	createUserAPI,
	registerUserAPI,
	updateUserAPI,
	fetchAllUserAPI,
	deleteUserAPI,
	handleUploadFile,
	updateUserAvatarAPI,
	loginUserAPI,
	getAccountAPI,
	logoutAPI,
};
