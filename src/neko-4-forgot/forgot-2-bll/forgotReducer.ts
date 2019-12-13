import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions} from "./forgotActions";

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
