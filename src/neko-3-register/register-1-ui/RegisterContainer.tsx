import React, {useState} from 'react';
import Register from './Register';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {register} from "../register-2-bll/registerThunks";
import {SIGN_IN_PATH} from '../../neko-1-main/main-1-ui/Routes';
import Preloader from "../../neko-0-common/common-1-ui/Preloader";
import {registerValidate} from "../../neko-0-common/validators/validator";
import {registerErrorMessage, registerLoading, registerSuccess} from "../register-2-bll/registerSelectors";
import {addBoolean} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
import {REGISTER_ERROR} from "../register-2-bll/registerActions";


interface IPropsRegister {
    }

const RegisterContainer: React.FC<IPropsRegister> = () => {
    let [email, setEmail] = useState('mail@mail.com');
    let [passwordFirst, setFirstPassword] = useState('');
    let [passwordSecond, setSecondPassword] = useState('');

    // redux
    const dispatch = useDispatch();
    const success = useSelector(registerSuccess);
    const isFetching = useSelector(registerLoading);
    const errorMessage = useSelector(registerErrorMessage);

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
        const verification = registerValidate(email, passwordFirst, passwordSecond);
        if (verification) {
            dispatch(addBoolean({name: REGISTER_ERROR, value: true, message: verification}))
            // props.registerError(verification)
        } else {
            dispatch(register(email, passwordFirst))
        }
    };
    return (
        <>
            {isFetching
                ? <Preloader/>
                : success ? <Redirect to={SIGN_IN_PATH}/> :
                    <Register email={email} passwordFirst={passwordFirst} passwordSecond={passwordSecond}
                              onSetEmail={onSetEmail}
                              onSetFirstPassword={onSetFirstPassword} onSetSecondPassword={onSetSecondPassword}
                              onSubmit={onSubmit} errorMessage={errorMessage}/>}
        </>
    );
};


export default RegisterContainer;
