import React, {useState} from 'react';
import Modals from "../ModalSimpleMessage/ModalSimpleMessage";

const ModalContainer: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>show simple Modal</button>
            <Modals show={show} blackout={true} >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                Simple Modal:<button onClick={() => setShow(false)}>Close</button>
                </div>
            </Modals>
        </>
    );
};

export default ModalContainer;
