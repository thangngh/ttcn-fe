import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../../api-client/users/users-api";
import { IUserProfile } from "../../../type/customer/customer.interface";

export const getAllUsersAction = createAsyncThunk(
	"admin/getAllUsers",
	async () => {
		const response = await UserAPI.getAllUsers();
		return response;
	}
)

export const getProfile = createAsyncThunk(
	"users/getProfile",
	async () => {
		const response = await UserAPI.getProfile();
		return response;
	}
)

export const becomeShopper = createAsyncThunk(
	"users/becomeShopper",
	async () => {
		const response = await UserAPI.becomeShopper();
		return response;
	}
)

export const editProfile = createAsyncThunk(
	"users/editProfile",
	async (payload: IUserProfile) => {
		const response = await UserAPI.editProfile(payload);
		return response;
	}
)

export const getRole = createAsyncThunk(
	"users/getRole",
	async () => {
		const response = await UserAPI.getRole();
		return response;
	}
)

export const uploadAvatar = createAsyncThunk(
	"users/upload-avatar",
	async ({ userId, file }: { userId: string, file: File }) => {
		const response = await UserAPI.uploadAvatar(userId, file)

		return response
	}
)

export const getAvatar = createAsyncThunk(
	"users/get-avatar",
	async (path: string) => {
		const response = await UserAPI.getImageAvatar(path);

		return response
	}
)

export const getShopByUser = createAsyncThunk(
	"shop/getShopByUser",
	async () => {
		const response = await UserAPI.getShopByUser();

		return response
	}
)

export const createShop = createAsyncThunk(
	"shop/createShop",
	async (payload: {
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
		const response = await UserAPI.createShop(payload);

		return response
	}
)

export const getShopById = createAsyncThunk(
	"shop/getShopById",
	async (id: string) => {
		const response = await UserAPI.getShopById(id);

		return response
	}
)

export const sendMailResetPassword = createAsyncThunk(
	"users/sendMailResetPassword",
	async (email: string) => {
		const response = await UserAPI.sendMailResetPassword(email);

		return response
	}
)

export const resetPasswordWithVerifyCode = createAsyncThunk(
	"users/resetPasswordWithVerifyCode",
	async (payload: { password: string, token: string }) => {
		const response = await UserAPI.resetPasswordWithVerifyCode(payload);

		return response
	}
)

export const changePassword = createAsyncThunk(
	"users/changePassword",
	async (payload: { oldPassword: string, newPassword: string }) => {
		const response = await UserAPI.resetPassword(payload);

		return response
	}
)