import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "./signInActions";

export const signInSuccess = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_SUCCESS)[0].value;
export const signInLoading = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_IS_LOADING)[0].value;
export const signInErrorMessage = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_ERROR)[0].message;
