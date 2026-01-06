import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user?.token)
        return <Navigate to="/dashboard" replace></Navigate>;

    return children;
};

export default PublicRoute;