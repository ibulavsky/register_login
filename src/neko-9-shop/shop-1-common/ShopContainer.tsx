import React from 'react';
import ShopSearchPage from "../shop-search/ShopSearchPage";
import ShopProductPage from "../shop-product-table/ShopProductPage";


interface IPropsShopConatiner {
}

const ShopContainer: React.FC<IPropsShopConatiner> = () => {

    return (
        <>
            <ShopSearchPage/>
            <ShopProductPage/>
        </>
    );
};


export default ShopContainer;
