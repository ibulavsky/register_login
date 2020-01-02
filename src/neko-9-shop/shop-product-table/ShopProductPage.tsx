import React, {useEffect} from 'react';
import Table from "./table/Table";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {addProduct, getShop} from "../shop-2-bll/shopThunks";
import {Button} from "./table/TableElements";
import UpdateProductModal from "./table/modals/UpdateForm";
import ProductDeleteModal from "./table/modals/QuestionForm";

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

    const onDeleteProduct = (id: number) => {
        alert(`${id}`)
    };
    const onAddToCart = () => {
        alert('add to Cart')
    };


    useEffect(() => {
        dispatch(getShop());
    }, []);

    const model = [
        {
            title: (i: number) => <div key={i} style={{width: '30%'}}> Product </div>,
            render: (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                                   style={{width: '30%'}}> {dataItem.productName}</div>
        },
        {
            title: (i: number) => <div key={i} style={{width: '35%'}}><span>Price</span>
            <div>
                <button>Big</button>
                <button>Small</button>
            </div>
            </div>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex}
                                                                               style={{width: '35%'}}> {dataItem.price} </div>
        },
        {
            title: (i: number) => <UpdateProductModal key={i} title='Add to table'
                                                      setProduct={(name, price) => {
                                                          onAddProduct(name, price)
                                                      }}
                                                      style={{width: '15%'}}/>,
            render:
                (dataItem: any, modelIndex: number, dataIndex: number) => <div key={modelIndex} style={{
                    width: '15%',
                    textAlign: 'center'
                }}>
                    <UpdateProductModal key={modelIndex} title="Update"
                                        setProduct={(name, price) => onUpdateProduct(name, price)}
                                        style={{width: '10%'}}/>
                    <ProductDeleteModal id={dataItem.id} title='Delete' style={{width: '10%'}}
                                        deleteProduct={(id) => onDeleteProduct(id)}/>
                </div>
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
