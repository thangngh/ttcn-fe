import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { createCategoryAction, getCategoryByShopIdAction } from "../action/category/categoryAction"

interface initialState {
	categoryList: any[]
}

const initialState: initialState = {
	categoryList: [],
}

const CategorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		pushCategory: (state, action) => {
			state.categoryList.push(action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCategoryByShopIdAction.pending, (state, action) => {
			})
			.addCase(getCategoryByShopIdAction.fulfilled, (state, action) => {
				state.categoryList = action.payload?.categories
			})
			.addCase(getCategoryByShopIdAction.rejected, (state, action) => {
			})
		builder
			.addCase(createCategoryAction.pending, (state, action) => {
			})
			.addCase(createCategoryAction.fulfilled, (state, action) => {
				toast.success("Create category successfully")
			})
			.addCase(createCategoryAction.rejected, (state, action) => {
			})
	}
})

export const { pushCategory } = CategorySlice.actions
export default CategorySlice.reducer