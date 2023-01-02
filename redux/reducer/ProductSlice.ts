import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CreateProduct, getAllProductAction, getAllProductByShopAction, GetProductByShop, updateProductByShopAction } from "../action/product/productAction";

interface IFile {
	name: string,
	size: number,
	type: string,
	lastModified: number,
	lastModifiedDate: Date,
	webkitRelativePath: string,

}

interface initialState {
	// imageList: IFile,
	productShop: any[],
	product: any[],
	productByShop: any[],
}

const initialState: initialState = {
	// imageList: null,
	productShop: [],
	product: [],
	productByShop: [],
}


const ProductSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		// addImage: (state, action) => {
		// 	state.imageList.push(action.payload)
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(GetProductByShop.pending, (state, action) => {
			})
			.addCase(GetProductByShop.fulfilled, (state, action) => {
				state.productShop = action.payload
				console.log("payload", action.payload)
			})
			.addCase(GetProductByShop.rejected, (state, action) => {
			})
		builder
			.addCase(getAllProductAction.pending, (state, action) => {
			})
			.addCase(getAllProductAction.fulfilled, (state, action) => {
				state.product = action.payload
			})
			.addCase(getAllProductAction.rejected, (state, action) => {
			})
		builder
			.addCase(getAllProductByShopAction.pending, (state, action) => {
			})
			.addCase(getAllProductByShopAction.fulfilled, (state, action) => {
				state.productByShop = action.payload
			})
			.addCase(getAllProductByShopAction.rejected, (state, action) => {
			})
		builder
			.addCase(updateProductByShopAction.pending, (state, action) => {
			})
			.addCase(updateProductByShopAction.fulfilled, (state, action) => {
				// console.log("payload update", action.payload)
				toast.success("Update product success")
			})
			.addCase(updateProductByShopAction.rejected, (state, action) => {
			})

		builder
			.addCase(CreateProduct.pending, (state, action) => {
			})
			.addCase(CreateProduct.fulfilled, (state, action) => {
				// console.log("Create payload", action.payload)
				toast.success("Create product success")
			})
			.addCase(CreateProduct.rejected, (state, action) => {
			})
	}

})

// export const { addImage } = ProductSlice.actions

export default ProductSlice.reducer