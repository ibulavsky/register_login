export interface ISignInState {
    isAuth: boolean
    isError: boolean
    errorMessage: string | null
    name: string
    token: string
}

export const signInInitialState: ISignInState = {
    isAuth: false,
    isError: false,
    errorMessage: '',
    name: '',
    token: ''
};
