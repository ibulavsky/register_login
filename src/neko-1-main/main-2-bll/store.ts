import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../neko-2-sign-in/sign-in-2-bll/signInReducer";
import {registerReducer} from "../../neko-3-register/register-2-bll/registerReducer";
import {forgotReducer} from "../../neko-4-forgot/forgot-2-bll/forgotReducer";
import {nekoReducer} from "../../neko-6-neko/neko-2-bll/nekoReducer";
import {booleanReducer} from "../../neko-7-boolean/boolean-2-bll/booleanReducer";
import {shopReducer} from "../../neko-9-shop/shop-2-bll/shopReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,
    neko: nekoReducer,
    boolean: booleanReducer,
    shop: shopReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
