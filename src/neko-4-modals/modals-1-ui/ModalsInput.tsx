import React, {useState} from 'react';
import Modals from "./Modals";

const ModalInput: React.FC = () => {
    const [show, setShow] = useState(false);
    const [firstWord, setFirstInput] = useState("1");
    const [secondWord, setSecondInput] = useState("2");
    const [titleWord, setTitleInput] = useState("Test");


    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => setShow(true)}>show input Modal</button><div>{titleWord}-</div><div>{firstWord}</div><div>-{secondWord}</div>
            <Modals show={show} blackout={true}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    Input Modal:
                    <input type="text" placeholder='Title' onChange={(e) => {
                        setTitleInput(e.currentTarget.value)
                    }}/>
                    <input type="text" placeholder='Word' onChange={(e) => {
                        setFirstInput(e.currentTarget.value)
                    }}/>
                    <input type="text" placeholder='Word' onChange={(e) => {
                        setSecondInput(e.currentTarget.value)
                    }}/>
                    <button onClick={() => setShow(false)}>Ok</button>
                </div>
            </Modals>
        </div>
    );
};

export default ModalInput;
