import {shopInitialState} from "./shopInitialState";
import {IShopActions} from "./shopActions";
//
// export const REGISTER_USER_DATA = 'REGISTER/REGISTER-USER-DATA';
// export const REGISTER_ERROR = 'REGISTER/REGISTER-ERROR';
// export const TOGGLE_IS_FETCHING = 'REGISTER/TOGGLE-IS-FETCHING';

export const shopReducer = (state = shopInitialState, action: IShopActions) => {
    switch (action.type) {
        // case REGISTER_USER_DATA:
        //     return {
        //         ...state,
        //         success: action.success
        //     };
        // case REGISTER_ERROR :
        //     return {
        //         ...state,
        //         errorMessage: action.errorMessage
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

