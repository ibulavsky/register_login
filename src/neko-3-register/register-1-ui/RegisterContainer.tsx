import React, {useState} from 'react';
import Register from './Register';

const RegisterContainer: React.FC = () => {
    let [email, setEmail] = useState('Your-mail');
    let [passwordFirst, setFirstPassword] = useState('Your password');
    let [passwordSecond, setSecondPassword] = useState('Your password');

    let onSetEmail = (email: string) => {
        setEmail(email)
    };
    let onSetFirstPassword = (passwordFirst: string) => {
        setFirstPassword(passwordFirst)
    };

    let onSetSecondPassword = (passwordSecond: string) => {
        setSecondPassword(passwordSecond)
    };
    let onSubmit = () => {
        console.log(email, passwordFirst, passwordSecond)
    };
    return (
        <Register email={email} passwordFirst={passwordFirst} passwordSecond={passwordSecond} onSetEmail={onSetEmail}
                  onSetFirstPassword={onSetFirstPassword} onSetSecondPassword={onSetSecondPassword}
                  onSubmit={onSubmit}/>
    );
};

export default RegisterContainer;
