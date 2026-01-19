import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>loading... kindly wait</p>
    }

    if (user?.token)
        return <Navigate to="/dashboard" replace></Navigate>;

    return children;
};

export default PublicRoute;