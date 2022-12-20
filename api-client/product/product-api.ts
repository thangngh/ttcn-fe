import { IProduct } from "../../type/product/product.interface";
import axiosConfig from "../axios.config";

export const ProductAPI = {

	CreateProduct: async ({
		name,
		description,
		price,
		quantity,
		categoryid,
	}: IProduct, shopid: string, image: File) => {
		const formData = new FormData();
		formData.append("file", image);
		const payload = { name, description, price, quantity, categoryid, image }
		const response = await axiosConfig.post(`/product/create-product/${shopid}`, payload)
		return response.data;
	},

	getProductByShop: async (shopid: string) => {
		const response = await axiosConfig.get(`/product-shop/product-with-shop/${shopid}`)
		return response.data;
	}
}