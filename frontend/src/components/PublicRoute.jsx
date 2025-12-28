import { Navigate } from "react-router-dom";

const PublicRoute = ({ Children }) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo?.token)
        return <Navigate to="/dashboard" replace></Navigate>;

    return Children;
};

export default PublicRoute;