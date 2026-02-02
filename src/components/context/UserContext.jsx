import {createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        const token = Cookies.get('Auth');
    })
}   