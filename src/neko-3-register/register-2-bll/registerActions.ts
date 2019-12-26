export const REGISTER_SUCCESS = 'REGISTER-LOGIN-RESPONSE/REGISTER/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER-LOGIN-RESPONSE/REGISTER/REGISTER_ERROR';
export const REGISTER_IS_LOADING = 'REGISTER-LOGIN-RESPONSE/REGISTER/REGISTER_IS_LOADING';


interface ISomeAction {
    type: string
}//

// interface IRegisterUserDataAction {
//     type: typeof REGISTER_USER_DATA,
//     success: boolean
// }
//
// interface IRegisterErrorAction {
//     type: typeof REGISTER_ERROR,
//     errorMessage: string
// }
//
// interface IRegisterIsFetchingAction {
//     type: typeof TOGGLE_IS_FETCHING,
//     isFetching: boolean
// }

export type IRegisterActions = ISomeAction;
//
// export const registerUserData = (success: boolean) => {
//     return {
//         type: REGISTER_USER_DATA,
//         success
//     }
// };
//
// export const registerError = (errorMessage: string) => {
//     return {
//         type: REGISTER_ERROR, errorMessage
//     }
// };
// export const toogleIsFetching = (isFetching: boolean) => {
//     return {
//         type: TOGGLE_IS_FETCHING, isFetching
//     }
// };

