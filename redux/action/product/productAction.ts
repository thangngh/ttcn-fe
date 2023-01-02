import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import axiosConfig from "../../../api-client/axios.config";
import { ProductAPI } from "../../../api-client/product/product-api";
import { IProduct } from "../../../type/product/product.interface";

export const CreateProduct = createAsyncThunk(
	"CREATE_PRODUCT",
	async ({ shopid, image, payload }: {
		shopid: string,
		image: File,
		payload: IProduct
	}) => {

		const response = await ProductAPI.createProduct({
			shopid,
			image,
			payload
		});
		return response;
	}
)

export const GetProductByShop = createAsyncThunk(
	"GET_PRODUCT_BY_SHOP",
	async (shopid: string) => {
		const response = await ProductAPI.getProductByShop(shopid);
		return response.data;
	}
)

export const getAllProductAction = createAsyncThunk(
	"GET_ALL_PRODUCT",
	async () => {
		const response = await ProductAPI.getAllProduct();
		return response.data;
	}
)

export const getAllProductByShopAction = createAsyncThunk(
	"GET_ALL_PRODUCT_BY_SHOP",
	async () => {
		const response = await ProductAPI.getAllProductByShop();
		return response.data;
	}
)

export const updateProductByShopAction = createAsyncThunk(
	"UPDATE_PRODUCT_BY_SHOP",
	async ({ productid, payload }: {
		productid: string,
		payload: IProduct
	}) => {
		const response = await ProductAPI.updateProductByShop({
			productid,
			payload
		});
		return response.data;
	}
)
