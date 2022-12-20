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


export interface IError {
	statusCode: number
	message: string;
}

export enum gender {
	FEMALE = 'FEMALE',
	MALE = 'MALE'
}