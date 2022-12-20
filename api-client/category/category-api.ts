import axiosConfig from "../axios.config";

export const CategoryAPI = {
	getCategoryByShop: async (shopid: string) => {
		const response = await axiosConfig.get(`/category/category-shop/${shopid}`)
		return response.data;
	},

	createCategory: async ({ name, shopid }: { name: string, shopid: string }) => {
		const response = await axiosConfig.post(`/category/create-category`, { name, shopid })
		return response.data;
	},

}