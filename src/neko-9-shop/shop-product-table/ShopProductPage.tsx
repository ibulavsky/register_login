import React, {useEffect} from 'react';
import Table from "./table/Table";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {getShop} from "../shop-2-bll/shopThunks";

const ShopProductPage: React.FC = () => {

    const productsData = useSelector((store: IAppStore) => store.shop.data.products);

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getShop());
    }, []);

    const model = [
        {
            title: (i: number) => <div style={{width: '33%'}}> Product </div>,
            render: (dataItem: any, modelIndex: number, dataIndex: number) => <div
                style={{width: '33%'}}> {dataItem.productName}</div>
        },
        {
            title: (i: number) => <div style={{width: '33%'}}> Price </div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div
                    style={{width: '33%'}}> {dataItem.price} </div>
        },
        {
            title: (i: number) => <button style={{width: '33%'}}> Add </button>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div
                    style={{width: '33%'}}> {dataItem.price} </div>
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
