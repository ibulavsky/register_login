import {booleanInitialState} from "./booleanInitialState";
import {IBooleanActions} from "./booleanActions";


export const booleanReducer = (state = booleanInitialState, action: IBooleanActions) => {
    switch (action.type) {
        // case SUCCESS:
        //     return {
        //         ...state,
        //         success: action.success
        //     };
        // case ERROR :
        //     return {
        //         ...state,
        //         errorMessage: action.errorMessage
        //     };
        // case TOGGLE_IS_LOADING: {
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
