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
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2N2Y2OGY4MjFjNDNhYTBjOTkyZjM0ZjUiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NDQyOTI3NTksImV4cCI6MTc0NDMyODc1OX0.knQ1TOO_Gvs4BXg1QLebmbC9-ei5-aJGrTKxyEbj70c`,
		},
	});
};

const updateUserAPI = () => {};

const fetchAllUserAPI = () => {
	const URL_BACKEND = "api/v1/user";
	return axios.get(URL_BACKEND, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2N2Y2OGY4MjFjNDNhYTBjOTkyZjM0ZjUiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NDQyOTI3NTksImV4cCI6MTc0NDMyODc1OX0.knQ1TOO_Gvs4BXg1QLebmbC9-ei5-aJGrTKxyEbj70c`,
		},
	});
};

export { createUserAPI, updateUserAPI, fetchAllUserAPI };
