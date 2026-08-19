import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { ReadMe } from "../profile/api";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    const logout = () => {
        Cookies.remove('token');
        setToken(null);
        setUser(null);
    };

    useEffect(() => {
        setToken(Cookies.get('token') || null);
    }, []);

    useEffect(() => {
        const loadUser = async () => {
            if (!token) {
                setUser(null);
                setIsAuthLoading(false);
                return;
            }

            try {
                const response = await ReadMe();
                if (response.status === 200) {
                    setUser(response.data);
                } else {
                    logout();
                }
            } catch {
                logout();
            } finally {
                setIsAuthLoading(false);
            }
        };

        loadUser();
    }, [token]);

    return (
        <UserContext.Provider value={{ user, setUser, isAuthLoading, logout }}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useUser = () => useContext(UserContext);
