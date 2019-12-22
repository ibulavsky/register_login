import {signInInitialState} from "./signInInitialState";
import {ISignInActions} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        // case LOGIN_SUCCESS :
        //     return {
        //         ...state,
        //         isAuth: true,
        //         errorMessage: undefined,
        //         username: action.obj.name
        //     };
        // case LOGIN_ERROR :
        //     return {
        //         ...state,
        //         isAuth: false,
        //         errorMessage: action.error
        //     };
        // case TOGGLE_IS_FETCHING: {
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     }
        // }
        default: {
            return state;
        }
    }
};
