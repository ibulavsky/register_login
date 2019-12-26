import React, {useState} from 'react';
import Forgot from './Forgot';
import {useDispatch, useSelector} from "react-redux";
import {emailValidate} from "../../neko-0-common/validators/validator";
import {forgot} from "../forgot-2-bll/forgotThunks";
import {FORGOT_ERROR} from "../forgot-2-bll/forgotActions";
import {addBoolean} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
import {forgotErrorMessage, forgotLoading} from "../forgot-2-bll/forgotSelectors";
import Preloader from "../../neko-0-common/common-1-ui/Preloader";


interface IPropsForgotMail {
    // forgot: (email: string) => void,
    // forgotMailError: (errorMessage: string) => void,
    // errorMessage: string,
}

const ForgotContainer: React.FC<IPropsForgotMail> = (props) => {
    let [email, setEmail] = useState('mail@mail.com');

    // redux
    const dispatch = useDispatch();
    const errorMessage = useSelector(forgotErrorMessage);
    const isFetching = useSelector(forgotLoading);

    let onSetEmail = (email: string) => setEmail(email);

    let onSubmit = () => {
        const verification = emailValidate(email);
        if (verification) {
            dispatch(addBoolean({name: FORGOT_ERROR, value: true, message: verification}))
        } else {
            dispatch(forgot(email))
        }
    };
    return (
        <>
            {isFetching
                ? <Preloader/>
                : <Forgot email={email}
                          onSetEmail={onSetEmail}
                          onSubmit={onSubmit}
                          errorMessage={errorMessage}/>
            }
        </>
    );
};
// const mapStateToProps = (store: IAppStore) => {
//     return {
//         errorMessage: store.forgot.errorMessage,
//     }
// };

export default ForgotContainer;
