import React from 'react';
import {useDispatch} from "react-redux";
import {addProduct} from "../../shop-2-bll/shopThunks";


export const Button: React.FC  = () => {

    const dispatch = useDispatch();
    const onAddProduct = (name: string = "Tesla", price: number = 5000) => {
        dispatch(addProduct(name, price))
    };

  return <button
        onClick={() => onAddProduct()}
        style={{width: '20%'}}> Add </button>;
};




