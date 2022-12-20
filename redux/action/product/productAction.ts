import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import axiosConfig from "../../../api-client/axios.config";
import { ProductAPI } from "../../../api-client/product/product-api";
import { IProduct } from "../../../type/product/product.interface";

export const CreateProduct = (payload: IProduct, shopid: string, image: File) => {
	return async (dispatch: Dispatch) => {
		const formData = new FormData();
		formData.append("file", image);
		const response = await axiosConfig.post(`/product/create-product/${shopid}`, formData);
		dispatch({
			type: "CREATE_PRODUCT",
			payload: response.data,
		});
	};

}

export const GetProductByShop = createAsyncThunk(
	"GET_PRODUCT_BY_SHOP",
	async (shopid: string) => {
		const response = await ProductAPI.getProductByShop(shopid);
		return response.data;
	}
)