import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {FORGOT_ERROR, FORGOT_IS_LOADING} from "./forgotActions";


export const forgotLoading = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === FORGOT_IS_LOADING)[0].value;
export const forgotErrorMessage = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === FORGOT_ERROR)[0].message;
