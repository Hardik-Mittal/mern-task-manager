import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    return userInfo?.token ? <Outlet></Outlet> : <Navigate to={"/login"}></Navigate>;
}

export default PrivateRoute;