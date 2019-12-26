import React, {useEffect, useState} from 'react';
import ModalMessage from "./ModalMessage";

interface IModalMessage {
    show: boolean,
    message: () => void,
    styleTop: () => string,
    top: number,
    step: number,
    startTop: number,
    endTop: number,
    time: number,
}

const ModalMessageComponent: React.FC = () => {
        const [show, setShow] = useState(false);
        const [top, changeTop] = useState(-100);
        const [startTop, changeStartValue] = useState(-50);
        const [endTop, changeEndValue] = useState(50);
        const [time, changePause] = useState(2000);
        const [step, setStep] = useState(10);


        useEffect(() => {
            if (show) {
                let localStart = startTop;
                let localEnd = endTop;
                const timer = setInterval(() => {
                    if (localStart + step > localEnd) {
                        setTimeout(() => {
                            clearTimeout(timer);
                            const downMove = setInterval(() => {
                                localStart -= step;
                                changeTop(localStart);
                                if (localStart < startTop) {
                                    clearInterval(downMove);
                                    changeTop(startTop);
                                    setShow(false);
                                }
                            }, 30)
                        }, time)
                    } else {
                        localStart += step;
                        changeTop(localStart)
                    }
                }, 30)
            }
        }, [show]);


        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                <button onClick={() => setShow(true)}>show Message Moved Modal</button>
                <ModalMessage
                    show={show}
                    blackout={true}
                    top={top}
                >
                    Try
                </ModalMessage>
            </div>
        );
    }
;

export default ModalMessageComponent;
