import React from 'react';
import Table from "./table/Table";

const ShopProductPage: React.FC = () => {

    const arrData = [{product: 'car', price: 40000}, {product: 'car2', price: 40000}, {product: 'car3', price: 40000}];

    const model = [
        {
            title: (i: number) => <div style={{width: '33%'}}> Product </div>,
            render: (dataItem: any, modelIndex: number, dataIndex: number) => <div
                style={{width: '33%'}}> {dataItem.product}</div>
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
                   data={arrData}/>
        </>
    );
};

export default ShopProductPage;
