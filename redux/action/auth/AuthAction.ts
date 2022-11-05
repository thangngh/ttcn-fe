import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../../api-client/auth/authAPI";
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