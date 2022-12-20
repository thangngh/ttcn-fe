import { createSlice } from "@reduxjs/toolkit";
import { GetProductByShop } from "../action/product/productAction";

interface IFile {
	name: string,
	size: number,
	type: string,
	lastModified: number,
	lastModifiedDate: Date,
	webkitRelativePath: string,

}

interface initialState {
	imageList: IFile[],
	productShop: any[]
}

const initialState: initialState = {
	imageList: [],
	productShop: [],
}


const ProductSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addImage: (state, action) => {
			state.imageList.push(action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(GetProductByShop.pending, (state, action) => {

			})
			.addCase(GetProductByShop.fulfilled, (state, action) => {
				state.productShop = action.payload
			})
			.addCase(GetProductByShop.rejected, (state, action) => {
			})
	}

})

export const { addImage } = ProductSlice.actions

export default ProductSlice.reducer