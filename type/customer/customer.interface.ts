import { IUser } from "../utils/utli.interface";

export interface ICustomer extends IUser {
	role?: string;
}