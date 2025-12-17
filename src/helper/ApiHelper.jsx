import axios from "axios";
import Cookie from 'cookie-universal'

const BASE_URL = import.meta.env.VITE_API_URL;

const ApiHelper = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

ApiHelper.interceptors.response.use(
    (config) => {
        const token = Cookie.get('Auth');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default ApiHelper;