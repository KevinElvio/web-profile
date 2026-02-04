import { createContext, useEffect, useState, useContext } from "react";
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom'
import { ReadMe } from "../../services/userService";
import { login } from "../../services/authService";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const tokenCookies = Cookies.get('token');
        if (tokenCookies) {
            setToken(tokenCookies)
        }
    }, [])

    const getUser = async () => {
        try {
            const data = await ReadMe();
            if (data.status === 200) {
                setUser(data.data)
            } else {
                setUser(null)
                Cookies.remove('token')
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        if (token) {
            getUser()
        } else {
            setUser(null)
        }
    }, [token])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
};