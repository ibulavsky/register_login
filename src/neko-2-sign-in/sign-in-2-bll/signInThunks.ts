import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {ISignInActions, LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "./signInActions";
import {IProfileActions} from "../../neko-6-neko/neko-2-bll/nekoActions";
import {localStorageAPI, SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {addBoolean} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
import {setCookie} from "../../neko-0-common/cookies";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signInExample = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | IProfileActions>, getStore: IGetStore) => {

    };

export const signIn = (email: string, password: string, rememberMe: boolean): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | IProfileActions>, getStore: IGetStore) => {
        dispatch(addBoolean({name: LOGIN_IS_LOADING, value: true}));
        try {
            const response = await SignInAPI.login(email, password, rememberMe);
            dispatch(addBoolean({name: LOGIN_IS_LOADING, value: false}));
            if (response.data.error) {
                dispatch(addBoolean({name: LOGIN_ERROR, value: true, message: response.data.error}));
            } else {
                dispatch(addBoolean({name: LOGIN_SUCCESS, value: true}));
                setCookie('token', response.data.token, 60 * 60 * 48); // age cookie - 2 days
            }
        } catch (e) {
            dispatch(addBoolean({name: LOGIN_IS_LOADING, value: false}));
            dispatch(addBoolean({name: LOGIN_ERROR, value: true, message: e.message}))
        }
    }
;

