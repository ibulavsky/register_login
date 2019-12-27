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
        debugger
        return instance.put(`shop/`, {id: `0.2541`, productName, price})
    },
};
