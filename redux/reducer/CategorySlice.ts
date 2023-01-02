import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { createCategoryAction, getAllCategoryAction, getCategoryByShopIdAction, updateCategoryAction } from "../action/category/categoryAction"

interface initialState {
	categoryList: any[],
	allCategory: any[],
}

const initialState: initialState = {
	categoryList: [],
	allCategory: [],
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
		builder
			.addCase(updateCategoryAction.pending, (state, action) => {
			})
			.addCase(updateCategoryAction.fulfilled, (state, action) => {
				console.log("action update", action.payload)
				toast.success("Update category successfully")
				if (state.categoryList.find((category) => category.id === action.payload?.data?.id)) {
					const index = state.categoryList.find((category) => category.id === action.payload?.data?.id)
					index.name = action.payload?.data?.name
					index.updatedat = action.payload?.data?.updatedat
				}
			})
			.addCase(updateCategoryAction.rejected, (state, action) => {
			})
		builder
			.addCase(getAllCategoryAction.pending, (state, action) => {
			})
			.addCase(getAllCategoryAction.fulfilled, (state, action) => {
				state.allCategory = action.payload
			})
			.addCase(getAllCategoryAction.rejected, (state, action) => {
			})
	}
})

export const { pushCategory } = CategorySlice.actions
export default CategorySlice.reducer