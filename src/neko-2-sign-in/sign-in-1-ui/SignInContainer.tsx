import React, {useState} from 'react';
import SignIn from "./SignIn";

const SignInContainer: React.FC = () => {
    const [login, changeLogin] = useState('login');
    const [password, changePassword] = useState('test password');
    const [isRememberMe, changeRememberMe] = useState(false);
    const [authenticationError, setAuthError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Имя пользователя или пароль введены не верно.');
    // logic
    const onLoginChange = (login: string) => {
        changeLogin(login)
    };
    const onPasswordChange = (password: string) => {
        changePassword(password)
    };
    const onRememberChange = (isRememberMe: boolean) => {
        changeRememberMe(isRememberMe)
    };
    const onSubmitLogin = () => {
        if (password.length < 7) {
            setErrorMessage('Длина пароля должна быть больше 7 символов.');
            setAuthError(true)
        }
        console.log(login, password)
    };

    return (
        <SignIn rememberMe={isRememberMe} login={login} password={password} authenticationError={authenticationError} errorMessage={errorMessage}
                onLoginChanged={onLoginChange} onPasswordChanged={onPasswordChange} onSubmit={onSubmitLogin} onRememberChange={onRememberChange}/>
    );
};

export default SignInContainer;
