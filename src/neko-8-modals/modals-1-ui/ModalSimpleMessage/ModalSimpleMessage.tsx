import React, {CSSProperties} from 'react';

interface IModal {
    children: any,
    show: boolean,
    blackout: boolean,
    top?: number
}


const Modal: React.FC<IModal> = ({children, show, blackout, top}) => {

    if (!show) return null;

    return (
        <>
            {blackout && <div style={{
                position: "fixed",
                top: '0px',
                left: '0px',
                width: '100vw',
                height: '100vh',
                backgroundColor: "black",
                opacity: "0.1"
            }}></div>}
            <div style={{
                position: "fixed",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                width: '300px',
                height: '200px',
                backgroundColor: "green",
                top: `${top}px`
            }}>
                {children}
            </div>
        </>
    );
};

export default Modal;
