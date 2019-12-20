import {ERROR, LOADING, SUCCESS} from "./booleanActions";

export interface IBooleanObject {
    name: string;
    value: boolean;
    message?: string;
}

export interface IBooleanState {
    booleans: IBooleanObject[];
}

export const booleanInitialState: IBooleanState = {
    booleans: [
        {
            name: LOADING,
            value: false,
            // message: ''
        },
        {
            name: ERROR,
            value: false,
            message: ''
        },
        {
            name: SUCCESS,
            value: false,
            message: ''
        },
    ],
};
