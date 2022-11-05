import { createAsyncThunk } from "@reduxjs/toolkit";
import { CustomerAPI } from "../../../api-client/customers/CustomerAPI";


export const getAllCustomers = createAsyncThunk(
	"/customer/get-all-customers",
	async () => {
		const response = await CustomerAPI.getCustomers()
		console.log("response", response)
		return response
	}
)