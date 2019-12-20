import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {ISignInActions, loginError, loginSuccess, toogleIsFetching} from "./signInActions";
import {INekoActions} from "../../neko-6-neko/neko-2-bll/nekoActions";
import {localStorageAPI, SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {addBoolean, ERROR, LOADING, SUCCESS} from "../../neko-7-boolean/boolean-2-bll/booleanActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {

    };

export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
        // dispatch(toogleIsFetching(true));
        dispatch(addBoolean({name: LOADING, value: true}));
        const response = await SignInAPI.login(email, password, rememberMe);
        // dispatch(toogleIsFetching(false));
        dispatch(addBoolean({name: LOADING, value: false}));
        if (response.data.error) {
            dispatch(addBoolean({name: ERROR, value: true, message: response.data.error}));
            // dispatch(loginError(response.data.error))
        } else {
            // dispatch(loginSuccess(response.data));
            dispatch(addBoolean({name: SUCCESS, value: true}));
            await localStorageAPI.saveToken(response.data.token)
        }
    };


export const getUser = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
        const token = await localStorageAPI.loadToken();
        const response = await SignInAPI.me(token);
        if (response.data.error) {
            dispatch(loginError(response.data.error))
        } else {
            dispatch(loginSuccess(response.data));
            await localStorageAPI.saveToken(response.data.token)
        }
    };
