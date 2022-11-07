import { createSlice } from "@reduxjs/toolkit";
import { getRoleUserAction, loginAction, loginWithGoogleAction, registerAction } from "../action/auth/AuthAction";

const initState = {
	error: null,
	isLoading: false,
	success: null,
	content: null,
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
		builder
			.addCase(getRoleUserAction.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getRoleUserAction.fulfilled, (state, action) => {
				state.isLoading = false;
				state.content = action.payload;
			})
			.addCase(getRoleUserAction.rejected, (state, action) => {
				state.isLoading = false;
				console.log(action.error);
			})
	}

})

export default AuthSlice.reducer