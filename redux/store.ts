import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducer/AuthSlice";
import CategorySlice from "./reducer/CategorySlice";
import ProductSlice from "./reducer/ProductSlice";
import UserSlice from "./reducer/UserSlice";

const reducer = {
	AuthReducer: AuthSlice,
	UserReducer: UserSlice,
	ProductReducer: ProductSlice,
	CategoryReducer: CategorySlice,
}

const store = configureStore({ reducer })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;