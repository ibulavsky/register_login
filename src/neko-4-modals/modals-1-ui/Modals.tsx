import React, {CSSProperties} from 'react';

interface IModal {
    children: any,
    show: boolean,
    blackout: boolean
}

const Modal: React.FC<IModal> = ({children, show, blackout}) => {

    if (!show) return null;

    return (
        <>
            {blackout && <div style={{
                position: "fixed",
                width: '100vw',
                height: '100vh',
                backgroundColor: "black",
                opacity: "0.1"}}></div>}
            <div style={{
                position: "fixed",
            }}>
                {children}
            </div>
        </>
    );
};

export default Modal;
