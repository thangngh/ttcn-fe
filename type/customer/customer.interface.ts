import { IUser } from "../users/users.interface";

export interface IUserProfile extends IUser {
	role?: string;
}