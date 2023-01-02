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

	updateCategory: async ({ id, name, updateat }: { id: string, name: string, updateat: Date }) => {
		const response = await axiosConfig.patch(`/category/update-category/${id}`, { name, updateat })
		return response.data;
	},

	getAllCategory: async () => {
		const response = await axiosConfig.get(`/category/get-all-categories`)
		return response.data;
	},

	findProductByCategory: async (name: string) => {
		const response = await axiosConfig.get(`/category/find-product-categories?name=${name}`)
		return response.data;
	}


}
