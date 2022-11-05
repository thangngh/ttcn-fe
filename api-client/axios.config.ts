import axios, { AxiosError } from "axios";

const axiosConfig = axios.create({
	baseURL: "http://localhost:3001",
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
})

axiosConfig.interceptors.request.use(
	(request) => {
		const accessToken = localStorage.getItem('accessToken');
		const accessHeader = `Bearer ${accessToken}`;
		if (request.headers) {
			request.headers["Authorization"] = accessHeader;
		}
		return request;
	},
	(error: AxiosError) => {
		return Promise.reject(error.response?.data);
	}
);

axiosConfig.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: AxiosError) => {
		return Promise.reject(error.response?.data);
	}
);

export default axiosConfig;