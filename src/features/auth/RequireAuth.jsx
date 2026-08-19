import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./AuthProvider";

export default function PrivateRoute () {
    const { user, isAuthLoading } = useUser();

    if (isAuthLoading) {
        return null;
    }

    if (!user){
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}