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

    useEffect( () => {
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
            title: (i: number) => <Button key={i} />,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                    style={{width: '20%'}}> {dataItem.price} </div>
        }
    ];


    return (
        <>
            <Table model={model}
                   data={productsData}/>
        </>
    );
};

export default ShopProductPage;
