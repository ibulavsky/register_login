export interface IRegisterState {
    email: string,
    password: string,
}

export const registerInitialState: IRegisterState = {
    email: '',
    password: ''
};
