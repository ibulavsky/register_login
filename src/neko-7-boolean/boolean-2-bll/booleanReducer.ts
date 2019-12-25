import {booleanInitialState, IBooleanObject, IBooleanState} from "./booleanInitialState";
import {ADD_BOOLEAN_OBJECT, IBooleanActions} from "./booleanActions";

const replaceBooleanObject = (booleanObject: IBooleanObject, state: IBooleanState) => {
    let booleansArr = [...state.booleans].filter(b => {
        return b.name !== booleanObject.name
    });
    booleansArr.push(booleanObject);
    return booleansArr
};

export const booleanReducer = (state = booleanInitialState, action: IBooleanActions) => {
    switch (action.type) {
        case ADD_BOOLEAN_OBJECT:
            return {
                ...state,
                booleans: replaceBooleanObject(action.booleanObject, state)
            };
        default: {
            return state;
        }
    }
};
