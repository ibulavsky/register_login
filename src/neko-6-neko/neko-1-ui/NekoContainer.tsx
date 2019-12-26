import React, {useEffect, useState} from 'react';
import Neko from "./Neko";
import {getCookie, setCookie} from "../../neko-0-common/cookies";
import {getMe} from '../neko-2-bll/nekoThunks';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {SIGN_IN_PATH} from "../../neko-1-main/main-1-ui/Routes";
import {Redirect} from 'react-router-dom';
import {LOGIN_SUCCESS} from "../../neko-2-sign-in/sign-in-2-bll/signInActions";
import {PROFILE_ERROR, PROFILE_LOADING, profileSetName} from "../neko-2-bll/nekoActions";

const NekoContainer: React.FC = () => {

    const name = useSelector((store: IAppStore) => store.neko.name);
    // const isAuth = useSelector((store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_SUCCESS)[0].value);
    const isLoading = useSelector((store: IAppStore) => store.boolean.booleans.filter(b => b.name === PROFILE_LOADING)[0].value);
    const error = useSelector((store: IAppStore) => store.boolean.booleans.filter(b => b.name === PROFILE_ERROR)[0].message);
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const dispatch = useDispatch();
    // useEffects
    useEffect(() => {
        dispatch(getMe());
    }, []);

    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);
        else setShow(true);
    }, [name]);

    // callbacks
    const logoutCallback = () => {
        setCookie('token', '', -1000);
        dispatch(profileSetName(''));
    };


    // redirect logic
    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }
    if (!show) return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'orange',
            }}
        >
            Loading...
        </div>
    );


    return (<>
            <Neko
                name={name}
                isLoading={isLoading}
                error={error}
                logoutCallback={logoutCallback}/>
        </>
    );
};

export default NekoContainer;
