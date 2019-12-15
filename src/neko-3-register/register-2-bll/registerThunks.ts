import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {IRegisterActions, registerUserData} from "./registerActions";
import {RegisterAPI} from "../register-3-dal/RegisterAPI";
import {INekoActions} from "../../neko-6-neko/neko-2-bll/nekoActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register = (email: string, passwordFirst: string, passwordSecond: string): ThunkAction<Return, IAppStore, ExtraArgument, IRegisterActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IRegisterActions| INekoActions>, getStore: IGetStore) => {
        debugger
        if (passwordFirst === passwordSecond) {
            const response = await RegisterAPI.getSuccessRegister(email, passwordFirst);
            console.log(response);
            let success = response.data.success;
            dispatch(registerUserData(success));
        }
    };
