import { Children, createContext, useEffect, useState } from "react";
import { login } from "../../services/userService";
import { FailedNotif } from "../notification/Notification";

export const UserContext = createContext();

export const UserContextProvider = () => {
    const [user, setUser] = useState(null)

    useEffect((email, password) => {
        if(!email || !password){
            return FailedNotif("Gagal", "Gagal Login");
        }
        async () => {
            await login(email, password)
            .then((res) => {
                res.data
                setUser(res.data)
            })
            .catch((err) => {
                return FailedNotif("Gagal", err)
            })
        }

    },[user])

    return(
        <UserContext.Provider value={user}>
            {Children}
        </UserContext.Provider>
    )
}