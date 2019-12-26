import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions} from "./forgotActions";

export const FORGOT_MAIL_ERROR = 'REGISTER/FORGOT-MAIL-ERROR';


export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT_MAIL_ERROR :
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default: {
            return state;
        }
    }
};
