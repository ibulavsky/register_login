import {
    REGISTER_IS_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, FORGOT_IS_LOADING, FORGOT_SUCCESS, FORGOT_ERROR
} from "./booleanActions";
import {LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "../../neko-2-sign-in/sign-in-2-bll/signInActions";

export interface IBooleanObject {
    name: string;
    value: boolean;
    message?: string;
}

export interface IBooleanState {
    booleans: IBooleanObject[];
}

export const booleanInitialState: IBooleanState = {
    booleans: [
        {
            name: LOGIN_IS_LOADING,
            value: false,
        },
        {
            name: LOGIN_ERROR,
            value: false,
            message: ''
        },
        {
            name: LOGIN_SUCCESS,
            value: false,
            message: ''
        },
        {
            name: REGISTER_IS_LOADING,
            value: false,
        },
        {
            name: REGISTER_ERROR,
            value: false,
            message: ''
        },
        {
            name: REGISTER_SUCCESS,
            value: false,
            message: ''
        },
        {
            name: FORGOT_IS_LOADING,
            value: false,
        },
        {
            name: FORGOT_ERROR,
            value: false,
            message: ''
        },
        {
            name: FORGOT_SUCCESS,
            value: false,
            message: ''
        },
    ],
};
