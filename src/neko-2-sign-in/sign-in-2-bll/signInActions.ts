export const LOGINSUCCESS = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN-SUCCESS";

interface IObjResponse {
    name: string
    token: string
    error: undefined
}

interface ILoginSuccessAction {
    type: string;
    obj: IObjResponse
}

export type ISignInActions = ILoginSuccessAction;

export const loginSuccess = (obj: IObjResponse) => {
    return {
        type: LOGINSUCCESS, obj
    }
};

