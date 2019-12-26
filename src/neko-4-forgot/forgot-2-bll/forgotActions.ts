export const FORGOT_SUCCESS = 'REGISTER-LOGIN-RESPONSE/FORGOT/FORGOT_SUCCESS';
export const FORGOT_ERROR = 'REGISTER-LOGIN-RESPONSE/FORGOT/FORGOT_ERROR';
export const FORGOT_IS_LOADING = 'REGISTER-LOGIN-RESPONSE/FORGOT/FORGOT_IS_LOADING';


interface ISomeAction {
    type: string,
    // errorMessage: string
}
export type IForgotActions = ISomeAction;
//
// export const forgotMailError = (errorMessage: string) => {
//     return {
//         type: FORGOT_MAIL_ERROR, errorMessage
//     }
// };
