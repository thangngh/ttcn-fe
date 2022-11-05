import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./reducer/CustomerSlice";

const reducer = {
	CustomerReducer: CustomerSlice
}

const store = configureStore({ reducer })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;