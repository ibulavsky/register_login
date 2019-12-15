import React, {useState} from 'react';
import Register from './Register';
import {connect} from 'react-redux';
import {register} from "../register-2-bll/registerThunks";

// import {registerInitialState} from "../register-2-bll/registerInitialState";

interface IPropsRegister {
    success: boolean,
    register: (email: string, passwordFirst: string, passwordSecond: string) => void
}

const RegisterContainer: React.FC<IPropsRegister> = (props) => {
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
        props.register(email, passwordFirst, passwordSecond)
    };
    return (
        <>
            {props.success ? <div>Ты зареган</div> :
                <Register email={email} passwordFirst={passwordFirst} passwordSecond={passwordSecond}
                          onSetEmail={onSetEmail}
                          onSetFirstPassword={onSetFirstPassword} onSetSecondPassword={onSetSecondPassword}
                          onSubmit={onSubmit}/>}

        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        success: state.register.success
    }
};

export default connect(mapStateToProps, {register})(RegisterContainer);
