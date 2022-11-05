import { createSlice } from "@reduxjs/toolkit";
import { ICustomer } from "../../type/customer/customer.interface";
import { getAllCustomers } from "../action/customers/CustomerAction";

interface initState {
	result: ICustomer[]
}

const initialState: initState = {
	result: []
}

const CustomerSlice = createSlice({
	name: "get all customers",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllCustomers.pending, (state, action) => {
			console.log("pending")
		})
			.addCase(getAllCustomers.fulfilled, (state, action) => {
				console.log(action.payload)
			})
			.addCase(getAllCustomers.rejected, (state, action) => {
				console.log("rejected")
			})
	}
})

export default CustomerSlice.reducer