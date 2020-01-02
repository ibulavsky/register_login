import React, {useState} from 'react';
import Modals from "../../../../neko-8-modals/modals-1-ui/ModalQuestion/ModalQuestion";

interface IObjectStyle {
    width: string
}

interface IModalQuestionProps {
    id: number
    title: string
    style: IObjectStyle
    deleteProduct: (id: number) => void
}

const ProductDeleteModal: React.FC<IModalQuestionProps> = ({id, style, title, deleteProduct}) => {
    const [show, setShow] = useState(false);
    const onSubmit = () => {
        setShow(false);
        deleteProduct(id)
    };

    const onExit = () => {
        setShow(false);
    };

    return (
        <>
            <button onClick={() => setShow(true)}>{title}</button>
            <Modals show={show} blackout={true}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    Delete Product:
                    <button onClick={() => onSubmit()}>YES</button>
                    <button onClick={() => onExit()}>NO</button>
                </div>
            </Modals>
        </>
    );
};

export default ProductDeleteModal;
