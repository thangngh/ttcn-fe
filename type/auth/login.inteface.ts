

export interface IPayload {
	userName: string;
	passWord: string;
}

export interface IRedirect {
	redirect: () => void;
}
export interface ILogin extends IPayload, IRedirect {
}

export interface ILoginFaceBook {
	accessToken: string;
	provider: string;
}

export interface ILoginGoogle {
	name: string | null | undefined;
	emailAddress: string | null | undefined;
	accessToken: string | undefined;
	provider: string;
}
