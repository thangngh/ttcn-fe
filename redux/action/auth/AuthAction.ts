import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../../api-client/auth/authAPI";
import { ILogin, ILoginGoogle } from "../../../type/auth/login.inteface";
import { IRegister } from "../../../type/auth/register.interface";

export const registerAction = createAsyncThunk(
	"auth/register",
	async ({
		fullName,
		email,
		userName,
		passWord,
		redirect
	}: IRegister) => {
		const payload = {
			fullName,
			email,
			userName,
			passWord
		}
		const response = await authAPI.register({ ...payload, redirect });
		// return response;
	}
)

export const loginAction = createAsyncThunk(
	"auth/login",
	async ({
		userName,
		passWord,
		redirect
	}: ILogin) => {
		const payLoad = { userName, passWord };
		const response = await authAPI.login({ ...payLoad, redirect });
		return response;
	})

export const loginWithGoogleAction = createAsyncThunk(
	"auth/loginWithGoogle",
	async ({ accessToken, googleAddress, redirect }: ILoginGoogle) => {
		const payLoad = { accessToken, googleAddress };
		const response = await authAPI.loginWithGoogle({ ...payLoad, redirect })
	}
)

export const getRoleUserAction = createAsyncThunk(
	"auth/getRoleUser",
	async (userName: string) => {
		const response = await authAPI.getRoleUser(userName);
		return response;
	}
)

export const getProfileUserAction = createAsyncThunk(
	"users/getProfileUser",
	async (accessToken: string) => {
		const response = await authAPI.getProfileUser(accessToken);
		return response;
	}
)