import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { IUserProfile } from "../../type/customer/customer.interface";
import { IUser } from "../../type/users/users.interface";
import { becomeShopper, editProfile, getAllUsersAction, getProfile, getRole, getShopByUser, uploadAvatar } from "../action/users/userAction";

interface initialState {
	error: any,
	isLoading: boolean,
	success: boolean,
	result: any[],
	authUser: IUserProfile,
	shop: any,
}

const initialState: initialState = {
	error: null,
	isLoading: false,
	success: false,
	result: [],
	authUser: {
		id: "",
		firstname: "",
		lastname: "",
		gender: null,
		address: null,
		phone: "",
		email: "",
		username: "",
	},
	shop: null,
}

const UserSlice = createSlice({
	name: "[user]",
	initialState: initialState,
	reducers: {
		resetSuccess: (state, action) => {
			state.success = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsersAction.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getAllUsersAction.fulfilled, (state, action) => {
				state.isLoading = false;
				state.result = action.payload;
			})
			.addCase(getAllUsersAction.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
		builder
			.addCase(getProfile.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.authUser = action.payload;
			})
			.addCase(getProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
		builder
			.addCase(becomeShopper.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(becomeShopper.fulfilled, (state, action) => {
				state.isLoading = false;
				state.success = action.payload;
				toast.success("Become Shopper Successfully");
			})
			.addCase(becomeShopper.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				toast.error("Become Shopper Failed");
			})
		builder
			.addCase(editProfile.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(editProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.success = action.payload;
				toast.success("Update profile successfully");
			})
			.addCase(editProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				toast.error("Update profile failed");
			})
		builder
			.addCase(getRole.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getRole.fulfilled, (state, action) => {
				state.isLoading = false;
				state.success = action.payload;
			})
			.addCase(getRole.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
		builder
			.addCase(uploadAvatar.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(uploadAvatar.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload?.statusCode === 413) {
					toast.error("File size is too large");
				} else {
					state.success = true;
					toast.success("Upload avatar successfully");
				}
			})
			.addCase(uploadAvatar.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
				toast.error("Upload avatar failed");
			})
		builder
			.addCase(getShopByUser.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getShopByUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.shop = action.payload?.content?.id;
			})
			.addCase(getShopByUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
})
export const { resetSuccess } = UserSlice.actions;
export default UserSlice.reducer