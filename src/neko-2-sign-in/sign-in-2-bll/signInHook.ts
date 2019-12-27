import {useDispatch, useSelector} from "react-redux";
import {signInErrorMessage, signInLoading, signInSuccess} from "./signInSelectors";
import {useEffect, useState} from "react";
import {getMe} from "../../neko-6-neko/neko-2-bll/nekoThunks";
import {loginValidate} from "../../neko-5-helpers/validators/validator";
import {signIn} from "./signInThunks";

export const useSignInReduxHook = () => {
    const isAuth = useSelector(signInSuccess);
    const isFetching = useSelector(signInLoading);
    const errorMessageFromRedux = useSelector(signInErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe())
    }, []);

    return {
        isAuth,
        isFetching,
        errorMessageFromRedux
    }
};

export const useSignInLocalStateHook = () => {

    const [email, changeEmail] = useState('email');
    const [password, changePassword] = useState('test password');
    const [isRememberMe, changeRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
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

    return {
        email, onEmailChange,
        password, onPasswordChange,
        isRememberMe, onRememberChange,
        errorMessage, onSubmitLogin
    }
};
