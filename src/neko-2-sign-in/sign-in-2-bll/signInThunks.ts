import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {ISignInActions, LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "./signInActions";
import {INekoActions} from "../../neko-6-neko/neko-2-bll/nekoActions";
import {localStorageAPI, SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {addBoolean} from "../../neko-7-boolean/boolean-2-bll/booleanActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signInExample = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {

    };

export const signIn = (email: string, password: string, rememberMe: boolean): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
        dispatch(addBoolean({name: LOGIN_IS_LOADING, value: true}));
        const response = await SignInAPI.login(email, password, rememberMe);
        dispatch(addBoolean({name: LOGIN_IS_LOADING, value: false}));
        if (response.data.error) {
            dispatch(addBoolean({name: LOGIN_ERROR, value: true, message: response.data.error}));
        } else {
            dispatch(addBoolean({name: LOGIN_SUCCESS, value: true}));
            await localStorageAPI.saveToken(response.data.token)
        }
    };


export const getUser = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
        const token = await localStorageAPI.loadToken();
        const response = await SignInAPI.me(token);
        if (response.data.error) {
            dispatch(addBoolean({name: LOGIN_ERROR, value: true, message: response.data.error}))
        } else {
            dispatch(addBoolean({name: LOGIN_SUCCESS, value: true}));
            await localStorageAPI.saveToken(response.data.token)
        }
    };
