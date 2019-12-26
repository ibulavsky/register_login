import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {FORGOT_IS_LOADING, IForgotActions} from "./forgotActions";
import {ForgotAPI} from "../forgot-3-dal/ForgotAPI";
import {addBoolean} from "../../neko-7-boolean/boolean-2-bll/booleanActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const forgot = (email: string): ThunkAction<Return, IAppStore, ExtraArgument, IForgotActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IForgotActions>, getStore: IGetStore) => {
        dispatch(addBoolean({name: FORGOT_IS_LOADING, value: true}));
        const response = await ForgotAPI.sendMessageMail(email);
        console.log(response.data);
        dispatch(addBoolean({name: FORGOT_IS_LOADING, value: false}));
        // dispatch(forgotMailError('Сервак не работает'))
    };
