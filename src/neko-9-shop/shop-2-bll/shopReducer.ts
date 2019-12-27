import {shopInitialState} from "./shopInitialState";
import {GET_SHOP_DATA, IShopActions} from "./shopActions";


export const shopReducer = (state = shopInitialState, action: IShopActions) => {
    switch (action.type) {
        case GET_SHOP_DATA:
            return {
                ...state,
                data: action.data
            };
        // case REGISTER_ERROR :
        //         //     return {
        //         //         ...state,
        //         //         errorMessage: action.errorMessage
        //         //     };
        //         // case TOGGLE_IS_FETCHING: {
        //         //     return {
        //         //         ...state,
        //         //         isFetching: action.isFetching
        //         //     }
        //         // }
        default: {
            return state;
        }
    }
};

