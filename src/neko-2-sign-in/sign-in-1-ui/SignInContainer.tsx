import React from 'react';
import SignIn from "./SignIn";
import {Redirect} from 'react-router-dom';
import {NEKO_PATH} from "../../neko-1-main/main-1-ui/Routes";
import Preloader from "../../neko-0-common/preloader/Preloader";
import {useSignInLocalStateHook, useSignInReduxHook} from "../sign-in-2-bll/signInHook";

const SignInContainer: React.FC = () => {

    //from redux hooks
    const {isAuth, isFetching, errorMessageFromRedux} = useSignInReduxHook();

    //from local state hooks
    const {
        email, onEmailChange, password, onPasswordChange, isRememberMe, onRememberChange,
        errorMessage, onSubmitLogin
    } = useSignInLocalStateHook();

    return (
        <>
            {isFetching
                ? <Preloader/>
                : isAuth
                    ? <Redirect to={NEKO_PATH}/>
                    : <SignIn rememberMe={isRememberMe} email={email} password={password}
                              errorMessage={errorMessageFromRedux + errorMessage}
                              onEmailChanged={onEmailChange} onPasswordChanged={onPasswordChange}
                              onSubmit={onSubmitLogin}
                              onRememberChange={onRememberChange}/>
            }
        </>
    );
};

export default SignInContainer;
