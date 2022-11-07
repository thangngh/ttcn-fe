import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginAction, registerAction } from "../action/auth/AuthAction";

const initState = {
	error: null,
	isLoading: false,
	success: null
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
	}

})

export default AuthSlice.reducer