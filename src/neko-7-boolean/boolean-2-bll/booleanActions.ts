export const SUCCESS = "REGISTER-LOGIN-RESPONSE/BOOLEAN/SUCCESS";
export const ERROR = "REGISTER-LOGIN-RESPONSE/BOOLEAN/ERROR";
export const LOADING = "REGISTER-LOGIN-RESPONSE/BOOLEAN/TOGGLE_IS_FETCHING";

interface ISomeAction {
    type: string;
}

interface IBooleanErrorAction {
    type: typeof ERROR;
    error: string
}


export type IBooleanActions = ISomeAction | IBooleanErrorAction;
