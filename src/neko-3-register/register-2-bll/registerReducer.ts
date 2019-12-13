import {registerInitialState} from "./registerInitialState";
import {IRegisterActions} from "./registerActions";

export const REGISTER_USER_DATA = 'REGISTER/REGISTER_USER_DATA';

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case REGISTER_USER_DATA:
            return {
                ...state,
                // ...action.payload,
            };
        default: {
            return state;
        }
    }
};
