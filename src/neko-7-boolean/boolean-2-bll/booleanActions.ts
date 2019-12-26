import {IBooleanObject} from "./booleanInitialState";
export const ADD_BOOLEAN_OBJECT = "REGISTER-LOGIN-RESPONSE/BOOLEAN/ADD_BOOLEAN_OBJECT";

export const SUCCESS = "REGISTER-LOGIN-RESPONSE/BOOLEAN/SUCCESS";
export const ERROR = "REGISTER-LOGIN-RESPONSE/BOOLEAN/ERROR";
export const LOADING = "REGISTER-LOGIN-RESPONSE/BOOLEAN/TOGGLE_IS_FETCHING";

interface ISomeAction {
    type: string;
}

interface IBooleanObjectAction {
    type: typeof ADD_BOOLEAN_OBJECT;
    booleanObject: IBooleanObject;
}

export type IBooleanActions = IBooleanObjectAction;

export const addBoolean = (booleanObject: IBooleanObject) => {
    return {
        type: ADD_BOOLEAN_OBJECT, booleanObject
    }
};
