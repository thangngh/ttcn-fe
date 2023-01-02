import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryAPI } from "../../../api-client/category/category-api";

export const getCategoryByShopIdAction = createAsyncThunk(
	"category_getCategoryByShopId",
	async (shopid: string) => {
		const response = await CategoryAPI.getCategoryByShop(shopid);
		return response;
	}
)

export const createCategoryAction = createAsyncThunk(
	"category_createCategory",
	async ({ name, shopid }: { name: string, shopid: string }) => {
		const response = await CategoryAPI.createCategory({ name, shopid });
		return response;
	}
)

export const updateCategoryAction = createAsyncThunk(
	"category_updateCategory",
	async ({ id, name, updateat }: { id: string, name: string, updateat: Date }) => {
		const response = await CategoryAPI.updateCategory({ id, name, updateat });
		return response;
	}
)

export const getAllCategoryAction = createAsyncThunk(
	"category_getAllCategory",
	async () => {
		const response = await CategoryAPI.getAllCategory();
		return response;
	}

)

export const findProductByCategoryAction = createAsyncThunk(
	"category_findProductByCategory",
	async (name: string) => {
		const response = await CategoryAPI.findProductByCategory(name);
		return response;
	}
)

