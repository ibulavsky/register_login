// import {LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
//
// interface IObjResponse {
//     name: string
//     token: string
//     error: undefined
// }

interface ISomeAction {
    type: string;
}
//
// interface ILoginSuccessAction {
//     type: typeof LOGIN_SUCCESS;
//     obj: IObjResponse
// }
//
// interface ILoginErrorAction {
//     type: typeof LOGIN_ERROR;
//     error: string
// }
//
// interface IToggleIsFetchingAction {
//     type: typeof TOGGLE_IS_FETCHING;
//     isFetching: boolean
// }

export type ISignInActions = ISomeAction ;

// export const loginSuccess = (obj: IObjResponse) => {
//     return {
//         type: LOGIN_SUCCESS, obj
//     }
// };
//
// export const loginError = (error: string) => {
//     return {
//         type: LOGIN_ERROR, error
//     }
// };
// export const loginIsLoading = (isLoading: boolean) => {
//     return {
//         type: LOGIN_IS_LOADING, isLoading
//     }
// };
