export enum ProviderType {
	USERNAME = "USERNAME",
	GOOGLE = "GOOGLE",
	FACEBOOK = "FACEBOOK",
}
export interface IFullName {
	firstName: string;
	lastName: string;
}
export interface IAddress {
	city: string;
	district: string;
	street: string;
	country: string;
}

export interface IUser {
	address?: IAddress;
	avatarPath?: string;
	avatarThumbnailPath?: string;
	createdAt?: string;
	email?: string;
	fullName?: IFullName;
	id?: string;
	passWord?: string;
	phone?: string;
	providerType?: ProviderType;
	securityCode?: string;
	updatedAt?: string;
	userName?: string;
	sex?: string;

}

export interface IError {
	statusCode: number
	message: string;
}