import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>loading... kindly wait</p>
    }

    return user?.token ? <Outlet></Outlet> : <Navigate to={"/login"} replace></Navigate>;
}

export default PrivateRoute;