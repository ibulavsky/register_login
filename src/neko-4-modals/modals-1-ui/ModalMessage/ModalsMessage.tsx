import React, {useEffect, useState} from 'react';
import ModalMessage from "./ModalMessage";

interface IModalMessage {
    show: boolean,
    message: () => void,
    styleTop: () => string,
    top: number
}

const ModalMessageComponent: React.FC = () => {
        const [show, setShow] = useState(false);
        const [top, changeTop] = useState(-100);
        const [step, setStep] = useState(10);

        let timer = () => setTimeout(() => {
            let topSize = top + step;
            changeTop(topSize);
            console.log(topSize)
        }, 30);

        useEffect(() => {
                if (show) {
                    if ((top < 40) && (top >= -100)) {
                        console.log('timer');
                        timer();
                    } else {
                        setStep(-10);
                        setTimeout(() => {
                            console.log('show');
                            if (top >= -100) {
                                timer();
                            } else {
                                setStep(10);
                                setShow(false);
                                changeTop(-100);
                            }
                        }, 2000);
                    }
                    return () => clearTimeout(timer())
                }
            },
            [show, top]
        );

        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                <button onClick={() => setShow(true)}>show message Modal</button>
                <ModalMessage show={show} blackout={true} top={top}>Try</ModalMessage>
            </div>
        );
    }
;

export default ModalMessageComponent;
