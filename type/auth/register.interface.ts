import { IFullName } from "../utils/utli.interface";


export interface IPayLoad {
	fullName: IFullName;
	email: string;
	userName: string;
	passWord: string;
}

export interface IRedirect {
	redirect: () => void;
}

export interface IRegister extends IPayLoad, IRedirect { }