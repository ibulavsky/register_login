import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, MODALS_PATH, NEKO_PATH, REGISTER_PATH, SHOP_PATH, SIGN_IN_PATH} from './Routes';

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <button onClick={() => setShow(!show)}>{show ? 'hide dev header' : 'show dev header'}</button>
            {show && <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>}
            {show && <NavLink to={REGISTER_PATH}>register</NavLink>}
            {show && <NavLink to={FORGOT_PATH}>forgot</NavLink>}
            {show && <NavLink to={NEKO_PATH}>neko</NavLink>}
            {show && <NavLink to={MODALS_PATH}>modals</NavLink>}
            {show && <NavLink to={SHOP_PATH}>shop</NavLink>}
        </div>
    );
};

export default Header;
