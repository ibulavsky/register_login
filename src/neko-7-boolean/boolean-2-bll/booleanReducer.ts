import {booleanInitialState} from "./booleanInitialState";
import {IBooleanActions} from "./booleanActions";

export const booleanReducer = (state = booleanInitialState, action: IBooleanActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
