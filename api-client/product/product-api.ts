import { IProduct } from "../../type/product/product.interface";
import axiosConfig from "../axios.config";

export const ProductAPI = {
	createProduct: async ({ shopid, image, payload }: {
		shopid: string,
		image: File,
		payload: IProduct
	}) => {
		if (!shopid || !image) return null;
		try {
			const formData = new FormData();

			formData.append("file", image);
			formData.append("name", payload.name as string);
			formData.append("description", payload.description as string);
			formData.append("price", payload.price?.toString() as string);
			formData.append("quantity", payload.quantity?.toString() as string);
			formData.append("categoryid", payload.categoryid as string);


			const response = await axiosConfig.post(`/product/create-product/${shopid}`, formData)
			return response.data;
		} catch (error: any) {
			return error;
		}
	},

	getProductByShop: async (shopid: string) => {
		const response = await axiosConfig.get(`/product-shop/product-with-shop/${shopid}`)
		return response.data;
	},

	getAllProduct: async () => {
		const response = await axiosConfig.get(`/product/all-product`)
		return response.data;
	},

	getAllProductByShop: async () => {
		const response = await axiosConfig.get(`/product-shop/all-product-shop`)
		return response.data;
	},

	updateProductByShop: async ({ productid, payload }: {
		productid: string,
		payload: IProduct
	}) => {
		const response = await axiosConfig.patch(`/product-shop/update-product-shop/${productid}`, payload)
		return response.data;
	},

	getImageProduct: async (imgpath: string) => {
		if (!imgpath) {
			return "";
		}
		if (imgpath.includes("http")) {
			return imgpath;
		}
		return "http://localhost:3001/product/get-image/" + imgpath;
	}

}