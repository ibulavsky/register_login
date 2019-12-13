import React from 'react';
import styles from './sign-in-1-ui-styles/SignIn.module.css'

interface SignInProps {
    login: string
    password: string
    authenticationError: boolean
    onLoginChanged: ()=> void
    onPasswordChanged: ()=>void
    onSubmit: ()=> void
}

const SignIn: React.FC<SignInProps> = ({
                                           login, password, authenticationError,
                                           onLoginChanged, onPasswordChanged, onSubmit
                                       }) => {

    return (
        <div className={styles.wrapper} >
            <h2>Форма входа</h2>
            <div className={styles.forms}>
                <div className={styles.form}>
                    <span>Логин: </span>
                    <input type={"login"} placeholder={'Имя пользователя'}
                           value={login}
                           onChange={onLoginChanged}/>
                </div>
                <div className={styles.form}>
                    <span>Пароль: </span>
                    <input type={"password"} placeholder={'Пароль'}
                           value={password}
                           onChange={onPasswordChanged}/>
                </div>
                {authenticationError && <mark>Имя пользователя или пароль введены не верно.</mark>}
                <button className={styles.button} onClick={onSubmit}>Войти</button>
            </div>
        </div>
    );
};

export default SignIn;
