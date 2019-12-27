export interface IShopState {
    success: boolean,
    errorMessage: string,
    isFetching: boolean,
}

export const shopInitialState: IShopState = {
    success: false,
    errorMessage: '',
    isFetching: false,
};
