import { IUserProfile } from "../../type/customer/customer.interface";
import { IUser } from "../../type/users/users.interface";
import axiosConfig from "../axios.config";

export const UserAPI = {
	getAllUsers: async () /* : Promise<IUser[]>*/ => {
		try {
			const response = await axiosConfig.get("/admin/all-users");
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	getProfile: async () => {
		try {
			const response = await axiosConfig.get("/users/profile");
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	becomeShopper: async () => {
		try {
			const response = await axiosConfig.post("/users/become-shopper");
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	editProfile: async (payload: IUserProfile) => {
		try {
			const response = await axiosConfig.patch("/users/edit-profile", payload);
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	getRole: async () => {
		try {
			const response = await axiosConfig.get("/users/get-role");
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	uploadAvatar: async (userId: string, image: File) => {
		if (!userId || !image) return null;
		try {
			const formData = new FormData();
			formData.append("file", image);
			const response = await axiosConfig.post(`/users/upload-image/${userId}/image`, formData)

			return response.data
		} catch (error: any) {
			return error;
		}
	},

	getImageAvatar: (path: string) => {
		if (!path) {
			return "";
		}
		if (path.includes("http")) {
			return path;
		}
		return "http://localhost:3001/users/get-image/" + path;
	},

	getShopByUser: async () => {
		try {
			const response = await axiosConfig.get("/shop/get-shop/onwer");
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	createShop: async (payload: {
		name: string,
		description: string
		phone?: string,
		email?: string,
		userid: string,
		address?: {
			city: string,
			district: string,
			country: string,
			street: string,
		}
	}) => {
		try {
			const response = await axiosConfig.post("/shop/create-shop/owner", payload);
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	getShopById: async (shopId: string) => {
		try {
			const response = await axiosConfig.get(`/shop/get-shop/${shopId}`);
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	sendMailResetPassword: async (email: string) => {
		try {
			const response = await axiosConfig.post("/auth/reset-password", email);
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	resetPasswordWithVerifyCode: async ({
		password,
		token
	}: { password: string, token: string }) => {
		try {
			const response = await axiosConfig.post("/auth/change-password-with-verify-token", { password, token });
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	resetPassword: async (
		{
			oldPassword,
			newPassword
		}: { oldPassword: string, newPassword: string }
	) => {
		try {
			const response = await axiosConfig.post("/auth/change-password", { oldPassword, newPassword });
			return response.data;
		} catch (error: any) {
			return error;
		}
	},
}