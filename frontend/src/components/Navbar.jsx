import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login", { replace: true });
    };

    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <Link to="/">Home</Link>

            <div style={{ float: "right" }}>
                {user?.token ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register" style={{ marginLeft: "10px" }}>
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
