import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const SignInAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
    }
};
