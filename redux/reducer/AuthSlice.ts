import { createSlice } from "@reduxjs/toolkit";
import { ProviderType } from "../../type/utils/utli.interface";
import { loginAction, loginWithGoogleAction, registerAction } from "../action/auth/AuthAction";

interface initState {
	error: any,
	isLoading: boolean,
	success: any,
	role: null,
}

const initState: initState = {
	error: null,
	isLoading: false,
	success: null,
	role: null,
}

const AuthSlice = createSlice({
	name: "auth",
	initialState: initState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerAction.pending, (state, action) => {
			})
			.addCase(registerAction.fulfilled, (state, action) => {
			})
			.addCase(registerAction.rejected, (state, action) => {
			})
		builder
			.addCase(loginAction.pending, (state, action) => {
			})
			.addCase(loginAction.fulfilled, (state, action) => {
			})
			.addCase(loginAction.rejected, (state, action) => {
			})
		builder
			.addCase(loginWithGoogleAction.pending, (state, action) => {
			})
			.addCase(loginWithGoogleAction.fulfilled, (state, action) => {
			})
			.addCase(loginWithGoogleAction.rejected, (state, action) => {
			})
	}

})

export default AuthSlice.reducer