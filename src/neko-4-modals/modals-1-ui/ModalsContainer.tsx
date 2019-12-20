import React, {useState} from 'react';
import Modals from "./Modals";

const ModalContainer: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>show simple Modal</button>
            <Modals show={show} blackout={true}>
                Simple Modal:<button onClick={() => setShow(false)}>Close</button>
            </Modals>
        </>
    );
};

export default ModalContainer;
