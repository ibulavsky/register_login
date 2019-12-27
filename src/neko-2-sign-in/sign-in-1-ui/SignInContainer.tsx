import React, {useState} from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../sign-in-2-bll/signInThunks";
import {Redirect} from 'react-router-dom';
import {NEKO_PATH} from "../../neko-1-main/main-1-ui/Routes";
import Preloader from "../../neko-0-common/preloader/Preloader";
import {loginValidate} from "../../neko-5-helpers/validators/validator";
import {signInErrorMessage, signInLoading, signInSuccess} from "../sign-in-2-bll/signInSelectors";

const SignInContainer: React.FC = () => {
    const [email, changeEmail] = useState('email');
    const [password, changePassword] = useState('test password');
    const [isRememberMe, changeRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    //redux hooks
    const isAuth = useSelector(signInSuccess);
    const isFetching = useSelector(signInLoading);
    const errorMessageS = useSelector(signInErrorMessage);
    const dispatch = useDispatch();
    // callbacks
    const onEmailChange = (login: string) => changeEmail(login);
    const onPasswordChange = (password: string) => changePassword(password);
    const onRememberChange = (isRememberMe: boolean) => changeRememberMe(isRememberMe);
    const onSubmitLogin = () => {
        const errorText = loginValidate(email, password);
        if (errorText) {
            setErrorMessage(errorText)
        } else {
            setErrorMessage('');
            dispatch(signIn(email, password, isRememberMe))
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

export default SignInContainer;
