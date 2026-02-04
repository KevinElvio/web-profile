import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./context/UserContext";

export default function PrivateRoute () {
    const {user} = useUser();

    if (!user){
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}