import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {
    addBoolean,
    IBooleanActions
} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
import {IShopActions} from "./shopActions";


type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const shop = (): ThunkAction<Return, IAppStore, ExtraArgument, IBooleanActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions | IShopActions>, getStore: IGetStore) => {
    //     dispatch(addBoolean({name: REGISTER_IS_LOADING, value: true}));
    //     const response = await RegisterAPI.getSuccessRegister(email, passwordCoding(passwordFirst));
    //     dispatch(addBoolean({name: REGISTER_IS_LOADING, value: false}));
    //     if (response.data.success) {
    //         dispatch(addBoolean({name: REGISTER_SUCCESS, value: true}));
    //     } else {
    //         dispatch(addBoolean({name: REGISTER_ERROR, value: true, message: response.data.error}))
    //     }
    };
