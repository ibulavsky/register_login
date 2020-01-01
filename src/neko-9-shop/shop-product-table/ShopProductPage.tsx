import React, {useEffect} from 'react';
import Table from "./table/Table";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {addProduct, getShop} from "../shop-2-bll/shopThunks";
import {Button} from "./table/TableElements";

const ShopProductPage: React.FC = () => {

        const productsData = useSelector((store: IAppStore) => store.shop.data.products);


        const dispatch = useDispatch();

        const onAddProduct = (name: string = "Tesla", price: number = 5000) => {
            dispatch(addProduct(name, price))
        };
        const onUpdateProduct = () => {
            alert('update')
        };
        const onDeleteProduct = () => {
            alert('delete')
        };


        useEffect(() => {
            dispatch(getShop());
        }, []);

        const model = [
            {
                title: (i: number) => <div key={i} style={{width: '40%'}}> Product </div>,
                render: (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                                       style={{width: '40%'}}> {dataItem.productName}</div>
            },
            {
                title: (i: number) => <div key={i} style={{width: '40%'}}> Price </div>,
                render:
                    (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                                   style={{width: '40%'}}> {dataItem.price} </div>
            },
            {
                title: (i: number) => <Button key={i} onClickEvent={() => onAddProduct()} name="Add"
                                              style={{width: '20%'}}/>,
                render:
                    (dataItem: any, modelIndex: number, dataIndex: number) => <>
                        <Button key={modelIndex} name="Update" onClickEvent={() => onUpdateProduct()}
                                style={{width: '10%'}}/>
                        <Button key={modelIndex} name="Delete" onClickEvent={() => onDeleteProduct()}
                                style={{width: '10%'}}/>
                    </>
            }
        ];


        return (
            < >
        <
        Table
        model = {model}
        data = {productsData}
        />
    </>
    )
        ;
    }
;

export default ShopProductPage;
