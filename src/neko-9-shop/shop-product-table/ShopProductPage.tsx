import React, {useEffect} from 'react';
import Table from "./table/Table";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {addProduct, getShop} from "../shop-2-bll/shopThunks";
import {Button} from "./table/TableElements";
import UpdateAndAddModal from "./table/UpdateAndAddButtons";

const ShopProductPage: React.FC = () => {

    const productsData = useSelector((store: IAppStore) => store.shop.data.products);

    const dispatch = useDispatch();

    // // callbacks
    const onAddProduct = (name: string, price: number) => {
        dispatch(addProduct(name, price))
    };
    const onUpdateProduct = (name: string, price: number) => {
        alert(`${name} - ${price}`)
    };

    const onDeleteProduct = () => {
        alert('delete')
    };
    const onAddToCart = () => {
        alert('add to Cart')
    };


    useEffect(() => {
        dispatch(getShop());
    }, []);

    const model = [
        {
            title: (i: number) => <div key={i} style={{width: '35%'}}> Product </div>,
            render: (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                                   style={{width: '35%'}}> {dataItem.productName}</div>
        },
        {
            title: (i: number) => <div key={i} style={{width: '35%'}}> Price </div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                               style={{width: '35%'}}> {dataItem.price} </div>
        },
        {
            title: (i: number) => <UpdateAndAddModal key={i} title='Add to table'
                                                     setProduct={(name, price) => {
                                                         onAddProduct(name, price)
                                                     }}
                                                     style={{width: '20%'}}/>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <>
                    <UpdateAndAddModal key={modelIndex} title='Add to table'
                                       setProduct={(name, price) => onAddProduct(name, price)}
                                       style={{width: '20%'}}/>
                    <UpdateAndAddModal key={modelIndex} title="Update"
                                       setProduct={(name, price) => onUpdateProduct(name, price)}
                                       style={{width: '10%'}}/>
                    <Button key={modelIndex} name="Delete" onClickEvent={() => onDeleteProduct()}
                            style={{width: '10%'}}/>
                </>
        },
        {
            title: (i: number) => <div key={i} style={{width: '10%', textAlign: 'center'}}><a href={'#'}>Cart</a></div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <>
                    <Button key={modelIndex} name="Add to Cart" onClickEvent={() => onAddToCart()}
                            style={{width: '10%'}}/>
                </>
        }
    ];


    return (
        <>
            <
                Table
                model={model}
                data={productsData}
            />

        </>
    )
};

export default ShopProductPage;
