import {signInInitialState} from "./signInInitialState";
import {
    ISignInActions, LOGINSUCCESS
} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case LOGINSUCCESS :
            return {
                ...state,
                // name: action.obj.name,
                isAuth: true,
                isError: false,
                // token: action.obj.token,
                errorMessage: action.obj.error
            };
        default: {
            return state;
        }
    }
};
