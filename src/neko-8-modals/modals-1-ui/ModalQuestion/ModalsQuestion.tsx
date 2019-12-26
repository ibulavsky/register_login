import React, {useState} from 'react';
import Modals from "../ModalQuestion/ModalQuestion";

const ModalQuestion: React.FC = () => {
    const [show, setShow] = useState(false);
    const [response, setTitle] = useState("Test");

    const onClickResponse = (word: string) => {
        setShow(false);
        setTitle(word)
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button onClick={() => setShow(true)}>show Question Modal</button>
            <div>{response}</div>
            <Modals show={show} blackout={true}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    Question Modal:
                    <button onClick={() => onClickResponse('Yes')}>YES</button>
                    <button onClick={() => onClickResponse('No')}>NO</button>
                </div>
            </Modals>
        </div>
    );
};

export default ModalQuestion;
