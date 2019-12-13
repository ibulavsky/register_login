import {signInInitialState} from "./signInInitialState";
import {ISignInActions, LOGIN_ERROR, LOGIN_SUCCESS} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case LOGIN_SUCCESS :
            return {
                ...state,
                isAuth: true,
                isError: false,
                errorMessage: undefined,
                username: action.obj.name
            };
        case LOGIN_ERROR :
            return {
                ...state,
                isAuth: false,
                isError: true,
                errorMessage: action.error
            };

        default: {
            return state;
        }
    }
};
