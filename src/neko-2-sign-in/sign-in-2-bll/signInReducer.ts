import {signInInitialState} from "./signInInitialState";
import {ISignInActions} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
