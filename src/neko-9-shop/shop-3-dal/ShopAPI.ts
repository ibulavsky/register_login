import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const ShopAPI = {
    getShopData() {
        return instance.get(`shop/`,)
    },
    addProduct(productName: string, price: number) {
        return instance.post(`shop/`, {product:{productName, price}})
    },
};
