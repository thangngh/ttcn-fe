

export interface IPayload {
	userName: string;
	passWord: string;
}

export interface IRedirect {
	redirect: () => void;
}
export interface ILogin extends IPayload, IRedirect {
}

export interface ILoginGoogleResponse {
	accessToken: string;
	googleAddress: string;
}

export interface ILoginGoogle extends ILoginGoogleResponse, IRedirect {

}

export interface ILoginFacebook {
	emailAddress: string | null | undefined;
	accessToken: string | undefined;
	provider: string;
}
