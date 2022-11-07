import { toast } from "react-toastify";
import { ILogin, ILoginGoogle } from "../../type/auth/login.inteface";
import { IRegister } from "../../type/auth/register.interface";
import axiosConfig from "../axios.config";

export const authAPI = {

	register: async ({ fullName, email, userName, passWord, redirect }: IRegister) => {
		const payload = {
			fullName,
			email,
			userName,
			passWord
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

	login: async ({ userName, passWord, redirect }: ILogin) => {
		const payLoad = { userName, passWord };
		try {
			const response = await axiosConfig.post("/auth/login", payLoad);

			toast.success(response.data.content);

			await new Promise((resolve) => setTimeout(() => {
				redirect();
			}, 1000));

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
	}
}