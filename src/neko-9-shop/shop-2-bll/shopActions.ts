import {IShopData} from "./shopInitialState";

export const GET_SHOP_DATA = 'SHOP/GET_SHOP_DATA';

interface IGetShopAction {
    type: typeof GET_SHOP_DATA,
    data: IShopData
}

// interface IRegisterUserDataAction {
//     type: typeof REGISTER_USER_DATA,
//     success: boolean
// }
//
// interface IRegisterErrorAction {
//     type: typeof REGISTER_ERROR,
//     errorMessage: string
// }
//
// interface IRegisterIsFetchingAction {
//     type: typeof TOGGLE_IS_FETCHING,
//     isFetching: boolean
// }

export type IShopActions = IGetShopAction;


export const getShopData = (data: IShopData): IShopActions => {
    return {
        type: GET_SHOP_DATA,
        data
    }
};
//
// export const registerError = (errorMessage: string) => {
//     return {
//         type: REGISTER_ERROR, errorMessage
//     }
// };
// export const toogleIsFetching = (isFetching: boolean) => {
//     return {
//         type: TOGGLE_IS_FETCHING, isFetching
//     }
// };

