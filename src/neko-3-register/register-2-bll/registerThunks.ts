import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {RegisterAPI} from "../register-3-dal/RegisterAPI";
import {
    addBoolean,
    IBooleanActions
} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
import {REGISTER_ERROR, REGISTER_IS_LOADING, REGISTER_SUCCESS} from "./registerActions";
import {ISignInActions} from "../../neko-2-sign-in/sign-in-2-bll/signInActions";
import {passwordCoding} from "../../neko-5-helpers/password/passwordCoding";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register = (email: string, passwordFirst: string): ThunkAction<Return, IAppStore, ExtraArgument, IBooleanActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions | ISignInActions>, getStore: IGetStore) => {
        dispatch(addBoolean({name: REGISTER_IS_LOADING, value: true}));
        const response = await RegisterAPI.getSuccessRegister(email, passwordCoding(passwordFirst));
        dispatch(addBoolean({name: REGISTER_IS_LOADING, value: false}));
        if (response.data.success) {
            dispatch(addBoolean({name: REGISTER_SUCCESS, value: true}));
        } else {
            dispatch(addBoolean({name: REGISTER_ERROR, value: true, message: response.data.error}))
        }
    };
