export const PROFILE_SET_NAME = 'REGISTER-LOGIN-RESPONSE/PROFILE/PROFILE_SET_NAME';
export const PROFILE_LOADING = 'REGISTER-LOGIN-RESPONSE/PROFILE/PROFILE_LOADING';
export const PROFILE_ERROR = 'REGISTER-LOGIN-RESPONSE/PROFILE/PROFILE_ERROR';

interface ISomeAction {
    type: string;
}


interface IProfileSetName {
    type: typeof PROFILE_SET_NAME;
    name: string;
}

export type IProfileActions = IProfileSetName;

export const profileSetName = (name: string): IProfileActions => ({
    type: PROFILE_SET_NAME,
    name,
});
