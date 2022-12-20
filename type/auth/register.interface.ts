import { IFullName } from "../utils/utli.interface";


export interface IPayLoad {
	firstname: string;
	lastname: string;
	email: string;
	username: string;
	password: string;
}

export interface IRedirect {
	redirect: () => void;
}

export interface IRegister extends IPayLoad, IRedirect { }