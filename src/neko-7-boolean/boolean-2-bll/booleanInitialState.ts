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
            value: true,
            message: 'sd'
        },
        {
            name: SUCCESS,
            value: false,
            message: ''
        },
    ],
};
