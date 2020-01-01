import React from 'react';
// import {useDispatch} from "react-redux";
// import {addProduct} from "../../shop-2-bll/shopThunks";

// callbacks
// const dispatch = useDispatch();
// export const onAddProduct = (name: string = "Tesla", price: number = 5000) => {
//     dispatch(addProduct(name, price))
// };

interface IButtonProps {
    name: string
    onClickEvent: () => void
    style: object // must changed
}

export const Button: React.FC<IButtonProps> = ({name, onClickEvent, style}) => {
    return <button
        onClick={() => onClickEvent()}
        style={style}> {name} </button>;
};




