import { toast } from "react-toastify";
import { ILogin, ILoginGoogle } from "../../type/auth/login.inteface";
import { IRegister } from "../../type/auth/register.interface";
import axiosConfig from "../axios.config";

export const authAPI = {

	register: async ({ firstname, lastname, email, username, password, redirect }: IRegister) => {
		const payload = {
			firstname,
			lastname,
			email,
			username,
			password
		}
		try {
			const response = await axiosConfig.post("/auth/register", payload);

			toast.success(response.data.content);

			await new Promise((resolve) => setTimeout(() => {
				redirect();
			}, 1000));

		} catch (error: any) {
			toast.error(error.message);
			return error;
		}
	},

	login: async ({ username, password, redirect }: ILogin) => {
		const payLoad = { username, password };
		try {
			const response = await axiosConfig.post("/auth/login", payLoad);

			toast.success(response.data.message);

			if (response.data.accessToken) {
				localStorage.setItem("accessToken", response.data.accessToken);

				await new Promise((resolve) => setTimeout(() => {
					redirect();
				}, 1000));
			}

		} catch (error: any) {
			toast.error(error.message);
			return error;
		}

	},

	loginWithGoogle: async ({ accessToken, googleAddress, redirect }: ILoginGoogle) => {
		const payload = { accessToken, googleAddress };
		try {
			const response = await axiosConfig.post("/auth/loginWithGoogle", payload);

			toast.success(response.data.content);

			await new Promise((resolve) => setTimeout(() => {
				redirect();
			}, 1000));
		} catch (error: any) {
			toast.error(error.message)
		}
	},

	getRoles: async () => {
		try {
			const response = await axiosConfig.get("/users/get-role");
			return response.data;
		} catch (error: any) {
			toast.error(error.message);
			return error;
		}
	},


}