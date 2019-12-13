import React from 'react';
import styles from './sign-in-1-ui-styles/SignIn.module.css'

interface SignInProps {
    login: string
    password: string
    authenticationError: boolean
    rememberMe: boolean
    errorMessage: string
    onLoginChanged: (login: string) => void
    onPasswordChanged: (password: string) => void
    onRememberChange: (rememberMe: boolean) => void
    onSubmit: () => void
}

const SignIn: React.FC<SignInProps> = ({
                                           login, password, authenticationError, errorMessage, rememberMe, //variables
                                           onLoginChanged, onPasswordChanged, onRememberChange, onSubmit // callbacks
                                       }) => {

    return (
        <div className={styles.wrapper}>
            <h2>Форма входа</h2>
            <div className={styles.forms}>
                <div className={styles.form}>
                    <span>Логин: </span>
                    <input type={"login"} placeholder={'Имя пользователя'}
                           value={login}
                           onChange={e => onLoginChanged(e.currentTarget.value)}/>
                </div>
                <div className={styles.form}>
                    <span>Пароль: </span>
                    <input type={"password"} placeholder={'Пароль'}
                           value={password}
                           onChange={e => onPasswordChanged(e.currentTarget.value)}/>
                </div>
                <div className={styles.form}>
                    <span>Запомнить: </span>
                    <input type={"checkbox"} placeholder={'rememberMe'}
                           checked={rememberMe}
                           onChange={e => onRememberChange(e.currentTarget.checked)}/>
                </div>
                {authenticationError && <mark>{errorMessage}</mark>}
                <button className={styles.button} onClick={onSubmit}>Войти</button>
            </div>
        </div>
    );
};

export default SignIn;
