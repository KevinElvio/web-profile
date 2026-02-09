import axios from "axios";
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_API_URL;

const ApiHelper = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Accept": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
})

ApiHelper.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default ApiHelper;