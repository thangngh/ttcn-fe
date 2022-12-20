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