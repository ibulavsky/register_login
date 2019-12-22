import React, {useState} from 'react';
import SignIn from "./SignIn";
import {connect, useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {loginThunk} from "../sign-in-2-bll/signInThunks";
import {Redirect} from 'react-router-dom';
import {NEKO_PATH} from "../../neko-1-main/main-1-ui/Routes";
import Preloader from "../../neko-0-common/common-1-ui/Preloader";
import {loginValidate} from "../../neko-0-common/validators/validator";
import {LOGIN_IS_LOADING, LOGIN_ERROR, LOGIN_SUCCESS} from "../../neko-7-boolean/boolean-2-bll/booleanActions";

const SignInContainer: React.FC = () => {
    const [email, changeEmail] = useState('email');
    const [password, changePassword] = useState('test password');
    const [isRememberMe, changeRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    //redux hooks
    const isAuth = useSelector((store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_SUCCESS)[0].value);
    const isFetching = useSelector((store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_IS_LOADING)[0].value);
    const errorMessageS = useSelector((store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_ERROR)[0].message);
    const dispatch = useDispatch();
    // callbacks
    const onEmailChange = (login: string) => {
        changeEmail(login)
    };
    const onPasswordChange = (password: string) => {
        changePassword(password)
    };
    const onRememberChange = (isRememberMe: boolean) => {
        changeRememberMe(isRememberMe)
    };
    const onSubmitLogin = () => {
        const errorText = loginValidate(email, password);
        if (errorText) {
            setErrorMessage(errorText)
        } else {
            setErrorMessage('');
            dispatch(loginThunk(email, password, isRememberMe))
        }
    };

    return (
        <>
            {isFetching
                ? <Preloader/>
                : isAuth
                    ? <Redirect to={NEKO_PATH}/>
                    : <SignIn rememberMe={isRememberMe} email={email} password={password}
                              errorMessage={errorMessageS + errorMessage}
                              onEmailChanged={onEmailChange} onPasswordChanged={onPasswordChange}
                              onSubmit={onSubmitLogin}
                              onRememberChange={onRememberChange}/>

            }
        </>
    );
};

export default connect(null, {loginThunk})(SignInContainer);
