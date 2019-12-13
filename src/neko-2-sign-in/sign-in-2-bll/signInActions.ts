export const LOGIN_SUCCESS = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN-SUCCESS";
export const LOGIN_ERROR = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN_ERROR";

interface IObjResponse {
    name: string
    token: string
    error: undefined
}

interface ILoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    obj: IObjResponse
}

interface ILoginErrorAction {
    type: typeof LOGIN_ERROR;
    error: string
}

export type ISignInActions = ILoginSuccessAction | ILoginErrorAction ;

export const loginSuccess = (obj: IObjResponse) => {
    return {
        type: LOGIN_SUCCESS, obj
    }
};

export const loginError = (error: string) => {
    return {
        type: LOGIN_ERROR, error
    }
};
