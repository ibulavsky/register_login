import {registerInitialState} from "./registerInitialState";
import {
    IRegisterActions
} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
