import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {IBooleanActions} from "./booleanActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMeExample = (): ThunkAction<Return, IAppStore, ExtraArgument, IBooleanActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions>, getStore: IGetStore) => {

    };
