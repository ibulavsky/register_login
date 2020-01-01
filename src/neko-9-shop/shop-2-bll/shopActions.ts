import {IShopData} from "./shopInitialState";

export const GET_SHOP_DATA = 'SHOP/GET_SHOP_DATA';
export const SEARCH_PRODUCT_DATA = 'SHOP/SEARCH_PRODUCT_DATA';

interface IGetShopAction {
    type: typeof GET_SHOP_DATA,
    data: IShopData
}

interface ISearchProductDataAction {
    type: typeof SEARCH_PRODUCT_DATA,
    searchProduct: string
}

export type IShopActions = IGetShopAction | ISearchProductDataAction;


export const getShopData = (data: IShopData): IShopActions => {
    return {
        type: GET_SHOP_DATA,
        data
    }
};
export const searchProductData = (searchProduct: string): IShopActions => {
    return {
        type: SEARCH_PRODUCT_DATA,
        searchProduct
    }
};


