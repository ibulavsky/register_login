import React, {useState} from 'react';
import {connect} from "react-redux";
import {IAppStore} from "../neko-1-main/main-2-bll/store";
import Preloader from "../neko-0-common/common-1-ui/Preloader";
import {addBoolean, SUCCESS} from "./boolean-2-bll/booleanActions";
import {IBooleanObject} from "./boolean-2-bll/booleanInitialState";

interface BooleanContainerIProps {
    isLoading: boolean
    errorMessage: string | undefined
    isSuccess: boolean
    addBoolean: (booleanObject: IBooleanObject) => void
}

const BooleanForTesting: React.FC<BooleanContainerIProps> = (props) => {
    // const [email, changeEmail] = useState('email');
    // const [password, changePassword] = useState('test password');
    // const [isRememberMe, changeRememberMe] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    // logic

    return (
        <>
            {props.isLoading
                ? <Preloader/>
                : props.isSuccess
                    ? <div> Boolean is Success </div>
                    : <div>
                        <button onClick={()=>{props.addBoolean({name: SUCCESS, value: true})}}> Success </button>
                        Error: {props.errorMessage}
                    </div>

            }
        </>
    );
};

const mapStateToProps = (store: IAppStore) => ({
    // isAuth: store.signIn.isAuth,
    isLoading: store.boolean.booleans[0].value,
    errorMessage: store.boolean.booleans[1].message,
    isSuccess: store.boolean.booleans[2].value,
});

const BooleanContainer = connect(mapStateToProps, {addBoolean})(BooleanForTesting);

export default BooleanContainer;
