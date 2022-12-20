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