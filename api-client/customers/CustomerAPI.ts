import axiosConfig from "../axios.config"

export const CustomerAPI = {

	getCustomers: async () => {
		const response = await axiosConfig.get("/customer/get-all-customers")
		console.log(response)
		return response.data
	}
}