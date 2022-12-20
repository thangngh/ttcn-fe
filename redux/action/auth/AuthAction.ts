import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../../api-client/auth/authAPI";
import { ILogin, ILoginGoogle } from "../../../type/auth/login.inteface";
import { IRegister } from "../../../type/auth/register.interface";

export const registerAction = createAsyncThunk(
	"auth/register",
	async ({
		firstname,
		lastname,
		email,
		username,
		password,
		redirect
	}: IRegister) => {
		const payload = {
			firstname,
			lastname,
			email,
			username,
			password
		}
		await authAPI.register({ ...payload, redirect });
	}
)

export const loginAction = createAsyncThunk(
	"auth/login",
	async ({
		username,
		password,
		redirect
	}: ILogin) => {
		const payLoad = { username, password };
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

