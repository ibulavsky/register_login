import {REGISTER_USER_DATA} from "./registerReducer";

interface ISomeAction {
    type: string
}

export type IRegisterActions = ISomeAction;

export const registerUserData = (email: string, password: string) => {
    return {
        type: REGISTER_USER_DATA,
        payload: {
            email,
            password,
        }
    }
};

