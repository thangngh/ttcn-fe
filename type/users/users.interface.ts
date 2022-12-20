import { gender, IAddress, IFullName } from "../utils/utli.interface";

export interface IUser {
	id: string;
	firstname: string;
	lastname: string;
	gender: gender | null;
	avatar?: string | null;
	address: IAddress | null;
	phone: string | null;
	email: string;
	username: string;
	createdAt?: Date;
	updatedAt?: Date | null;
}