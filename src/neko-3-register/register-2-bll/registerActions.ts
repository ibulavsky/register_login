import {REGISTER_USER_DATA} from "./registerReducer";

interface IRegisterAction {
    type: typeof REGISTER_USER_DATA,
    success: boolean
}

export type IRegisterActions = IRegisterAction;

export const registerUserData = (success: boolean) => {
    return {
        type: REGISTER_USER_DATA,
        success
    }
};

